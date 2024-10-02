"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Laptop, Code, Brain, Rocket, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { sendMail } from "./server/queries";

export default function LandingPage() {
  const { toast } = useToast();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col mx-auto min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Laptop className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-xl md:text-2xl font-bold text-gray-900">
            CS 925
          </span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          {/* <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Programs
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About Us
          </Link> 
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link> */}
        </nav>
        <Button
          className="md:hidden"
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </header>
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4">
          <nav className="flex flex-col gap-4">
            {/* <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Programs
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              About Us
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Contact
            </Link> */}
          </nav>
        </div>
      )}
      <main className="flex-1">
        <section className="w-full mx-auto py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <div className="container px-4 md:px-6 mx-auto ">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 ">
                <h1 className="text-3xl font-bold tracking-tighter mx-auto sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Unlock Your Coding Potential
                </h1>
                <p className="mx-auto max-w-[700px] text-white text-sm md:text-xl">
                  {/* Fun and engaging computer science classes for kids aged 7-14.
                  Build games, apps, and more! */}
                  Learn the latest coding skills needed in today&apos;s job
                  market such as JavaScript, React, Next.js and SQL as well as
                  how to leverage AI technologies to help you build your next
                  startup/business idea.
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
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Contact Us Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Why Choose CS 925?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Code className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Learn Real Coding</h3>
                <p className="text-gray-600">
                  Learn actual programming skills used in the industry.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Brain className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Develop Problem-Solving Skills
                </h3>
                <p className="text-gray-600">
                  Enhance logical thinking and creativity through coding
                  challenges.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Rocket className="h-12 w-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Project-Based Learning
                </h3>
                <p className="text-gray-600">
                  {/* Create games, apps, and websites in a fun, interactive
                  environment. */}
                  Create apps and websites in a fun, interactive environment.
                </p>
              </div>
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
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
          id="contact"
        >
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
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
