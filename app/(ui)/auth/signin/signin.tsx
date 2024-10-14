"use client";

import { useState, useTransition } from "react";
import { handleEmailSignIn } from "@/app/api/auth/EmailSignInServerAction";
// import { handleGoogleSignIn } from "~/app/api/auth/googleSignInServerAction";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function GoogleIcon() {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="-3 0 262 262"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      className="size-6"
    >
      <path
        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
        fill="#4285F4"
      />
      <path
        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
        fill="#34A853"
      />
      <path
        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
        fill="#FBBC05"
      />
      <path
        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
        fill="#EB4335"
      />
    </svg>
  );
}

export default function SignInPage() {
  const [isPending, startTransition] = useTransition();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevents the form from submitting and reloading the page, allowing us to handle the submission in TypeScript.

    setIsLoading(true);
    setMessage(null);
    startTransition(async () => {
      try {
        await handleEmailSignIn(email);
        setMessage({
          type: "success",
          text: "Magic link sent! Check your email.",
        });
      } catch (error) {
        // redirect("/auth/auth-error");
        setMessage({
          type: "error",
          text: "Failed to send magic link. Please try again.",
        });
      } finally {
        setIsLoading(false);
      }
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-center text-2xl">CS 925 Login</CardTitle>
          <CardDescription>
            <p>Enter your email to receive a magic link.</p>
            <p>(For new users, this will create a new account.)</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* <form onSubmit={handleSubmit}> */}
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          {/* </form> */}
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button
            className="w-full"
            type="submit"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {isLoading ? "Sending..." : "Send Magic Link"}
          </Button>
          {message && (
            <Alert
              variant={message.type === "success" ? "default" : "destructive"}
              className="mt-4 dark:bg-gray-300"
            >
              {message.type === "success" ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              <AlertTitle>
                {message.type === "success" ? "Success" : "Error"}
              </AlertTitle>
              <AlertDescription>{message.text}</AlertDescription>
            </Alert>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
