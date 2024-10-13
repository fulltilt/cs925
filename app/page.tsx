"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Laptop, Code, Brain, Rocket, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { sendMail } from "./server/queries";
import SubscribeButton from "./components/SubscribeButton";

export default function LandingPage() {
  const { toast } = useToast();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col mx-auto min-h-screen">
      <main className="flex-1">
        <section className="w-full mx-auto py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <div className="container px-4 md:px-6 mx-auto ">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 ">
                <h1 className="text-3xl font-bold tracking-tighter mx-auto sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Unlock Your Coding Potential
                </h1>
                <p className="mx-auto max-w-[700px] text-sm md:text-xl text-white">
                  {/* Fun and engaging computer science classes for kids aged 7-14.
                  Build games, apps, and more! */}
                  Learn the latest coding skills needed in today&apos;s market
                  such as JavaScript, React, Next.js, SQL/NoSQL and Cloud as
                  well as how to leverage AI to help you land your next job or
                  build your next startup/business idea.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                {/* <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600"
                >
                  Learn More
                </Button> */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  {/* <Input className="max-w-lg flex-1" type="email" /> */}
                  <Button
                    type="submit"
                    className="bg-white text-blue-600 hover:bg-gray-100"
                    onClick={() =>
                      document
                        .getElementById("pricing")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full mx-auto py-12 md:py-24 lg:py-32 ">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Why Choose CS 925?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Code className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Learn Real Coding</h3>
                <p>Learn actual programming skills used in the industry.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Brain className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Develop Problem-Solving Skills
                </h3>
                <p>
                  Enhance logical thinking and creativity through coding
                  challenges.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Rocket className="h-12 w-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Project-Based Learning
                </h3>
                <p>
                  {/* Create games, apps, and websites in a fun, interactive
                  environment. */}
                  Create apps and websites in a fun, interactive environment.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#f7f7f7] dark:bg-black"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Basic",
                  price: "FREE",
                  features: ["HTML/CSS/JS Foundations", "Misc Free Modules"],
                  priceId: null,
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
                  priceId: "price_1Q8yKdKzDxzEb95OTbtiHOnU",
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
                  {plan.priceId ? (
                    <SubscribeButton priceId={plan.priceId} />
                  ) : (
                    <Link href="/dashboard">
                      <Button className="w-full">Go to Free Modules</Button>
                    </Link>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Join Our Coding Community
                </h2>
                <p className="max-w-[600px] text-gray-600 text-sm md:text-xl/relaxed">
                  Our classes are designed to be fun, engaging, and educational.
                  
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Button
                  className="bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Contact Us
                </Button>
                
              </div>
            </div>
          </div>
        </section> */}
        <section className="w-full py-12 md:py-24 lg:py-32 " id="contact">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Start Coding?
                </h2>
                <p className="max-w-[600px] text-gray-600 text-sm md:text-xl/relaxed">
                  Provide your email so we can guage interest and to receive
                  updates on new classes, special offers, and free coding
                  resources.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button
                    type="submit"
                    onClick={() => {
                      sendMail(email);
                      toast({
                        title: "Notification Sent!",
                        description: "Thank you for your interest!",
                      });
                    }}
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-600">
          © 2024 CS 925. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="privacy"
          >
            Terms of Service & Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
