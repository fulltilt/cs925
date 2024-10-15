"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CalendarIcon, MailIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const ProfileComponent = () => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center space-y-4 sm:space-y-6">
          <Avatar className="w-20 h-20 sm:w-24 sm:h-24">
            <AvatarImage src={user?.image ?? ""} alt={user?.email ?? ""} />
            <AvatarFallback>
              {user?.email
                ?.split(" ")
                .map((n) => n[0].toUpperCase())
                .join("") ?? "O"}
            </AvatarFallback>
          </Avatar>
          <div className="text-center">
            <CardTitle className="text-xl sm:text-2xl">{user?.name}</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              User Profile
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <MailIcon className="text-gray-500 w-5 h-5 sm:w-6 sm:h-6" />
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-gray-500 break-all">{user?.email}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <CalendarIcon className="text-gray-500 w-5 h-5 sm:w-6 sm:h-6" />
            <div>
              <p className="text-sm font-medium">Member Since</p>
              <p className="text-sm text-gray-500">
                {user &&
                  new Date(
                    user?.stripeData?.created * 1000
                  ).toLocaleDateString()}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-4 sm:px-6 pt-4 sm:pt-6">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="w-full">Update Subscription</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-[90vw] sm:max-w-lg">
              <AlertDialogHeader>
                <AlertDialogTitle>Redirect to Stripe?</AlertDialogTitle>
                <AlertDialogDescription>
                  To view your subscription details, you will be redirected to
                  Stripe where you will be asked for your email this account is
                  associated with
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <AlertDialogCancel className="sm:w-auto w-full">
                  Cancel
                </AlertDialogCancel>

                <AlertDialogAction className="sm:w-auto w-full">
                  <Link
                    href={process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL!}
                    className="no-underline"
                  >
                    Go to Stripe
                  </Link>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      </Card>
    </div>
  );
};
export default ProfileComponent;
