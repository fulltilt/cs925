"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { loadStripe } from "@stripe/stripe-js";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";

const SubscribeComponent = ({ priceId }: { priceId: string }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
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

      const res = await stripe.redirectToCheckout({
        sessionId: data.result.id,
      });

      //   console.log(data);
      //   const data = response.data;
      //   if (!data.ok) throw new Error('Something went wrong');
      //   await stripe.redirectToCheckout({
      //     sessionId: data.result.id
      //   });
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
