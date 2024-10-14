"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { loadStripe } from "@stripe/stripe-js";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { updateUser } from "../server/queries";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SubscribeComponent = ({ priceId }: { priceId: string }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (priceId === "free" && user?.id) {
      try {
        await updateUser(user.id, "free");
        router.push("/dashboard");
      } catch (e) {
        console.log(e);
      }

      return;
    }

    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
    );

    if (!stripe) {
      return;
    }

    try {
      setLoading(true);
      const data = await (
        await fetch("/api/stripe/checkout", {
          method: "POST",
          body: JSON.stringify({ priceId: priceId }),
        })
      ).json();

      await stripe.redirectToCheckout({
        sessionId: data.result.id,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handleSubmit}>
      {!loading ? (
        "Subscribe"
      ) : (
        <LoaderCircle
          className={cn("animate-spin", loading ? "block" : "hidden")}
        />
      )}
    </Button>
  );
};
export default SubscribeComponent;
