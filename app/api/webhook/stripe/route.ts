import Stripe from "stripe";
import { headers } from "next/headers";
import { buffer } from "node:stream/consumers";
import { db } from "@/server/db";
import { user } from "@/server/db/schema";
import { eq, sql } from "drizzle-orm";
import { NextApiRequest } from "next";

const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET!;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextApiRequest) {
  const rawBody = await buffer(req.body);
  try {
    const sig = headers().get("stripe-signature");
    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(rawBody, sig!, endpointSecret);
    } catch (err: unknown) {
      return Response.json({ error: `Webhook Error ${err?.message ?? ""} ` });
    }

    switch (event.type) {
      // const end_at = new Date(
      //   result.lines.data[0].period.end * 1000
      // ).toISOString();

      // used to get metadata
      case "checkout.session.completed": {
        const userId = event.data.object.metadata?.userId ?? "";
        const checkoutSession: Stripe.Checkout.Session = event.data.object;

        try {
          await db
            .update(user)
            .set({ stripe_data: sql`${checkoutSession}::jsonb` })
            .where(eq(user.id, userId as string));
        } catch (error) {
          console.log(error);
          return Response.json({ error });
        }
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object;
        const subscriptionId = subscription.id;
        console.log("sub update", subscription);

        try {
          const res = await db.execute(sql`
            SELECT * 
            FROM cs925_user
            WHERE (stripe_data->>'subscription')::text = ${subscriptionId} OR
                  (stripe_data->>'id')::text = ${subscriptionId}
          `);
          const userId = res.rows[0].id;

          await db
            .update(user)
            .set({ stripe_data: sql`${subscription}::jsonb` })
            .where(eq(user.id, userId as string));
        } catch (error) {
          console.log(error);
          return Response.json({ error: error });
        }

        break;
      }
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    return Response.json({});
  } catch (e) {
    return Response.json({ error: `Webhook Error: ${e?.message}` });
  }
}
