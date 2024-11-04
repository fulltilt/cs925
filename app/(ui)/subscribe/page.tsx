import SubscribeButton from "@/app/components/SubscribeButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { SessionProvider } from "next-auth/react";

export default function Subscribe({
  searchParams,
}: {
  searchParams?: { notSubbed: string };
}) {
  return (
    <SessionProvider>
      <section
        id="pricing"
        className="w-full py-12 md:py-24 lg:py-32 bg-[#f7f7f7] dark:bg-black"
      >
        <div className="container mx-auto px-4 md:px-6">
          {searchParams?.notSubbed && (
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Hi! I see you tried to access premium content but unfortunately
              you need to be subscribed to our Pro plan.
            </h2>
          )}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Basic",
                price: "FREE",
                features: ["HTML/CSS/JS Foundations", "Misc Free Modules"],
                priceId: "free",
              },
              {
                name: "Pro",
                price: "$49 / month",
                priceNote: "(normally $99)",
                features: [
                  "Access to All Modules",
                  "Discord Server Access",
                  "Q&A Support",
                  "No Contracts, Cancel Anytime",
                ],
                priceId: `${process.env.CS925_PRICE_ID}`,
              },
            ].map((plan, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-4xl font-bold mb-4">
                    {plan.price}&nbsp;
                    <span className="text-lg font-normal">
                      {plan.priceNote ? plan.priceNote : null}
                    </span>
                  </p>
                  <ul className="space-y-2 mb-4">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <SubscribeButton priceId={plan.priceId} />
              </Card>
            ))}
          </div>
        </div>
      </section>
    </SessionProvider>
  );
}
