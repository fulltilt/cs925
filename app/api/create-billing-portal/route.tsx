import { NextResponse } from "next/server";
import { auth } from "../auth/authConfig";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Not authenticated", status: 401 });
  }

  try {
    const stripeId = session.user.stripeData.customer;

    const stripeSession = await stripe.billingPortal.sessions.create({
      customer: stripeId,
      return_url: `${process.env.NEXT_BASE_URL}/profile`,
    });
    return NextResponse.json({ url: stripeSession.url });
  } catch (e) {
    console.log("Error creating billing portal session: ", e);
    return NextResponse.json({
      error: "Error retrieving Stripe billing page",
      status: 500,
    });
  }
}
