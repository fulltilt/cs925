import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

function ExclamationTriangle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
      />
    </svg>
  );
}

export default function AuthSuccessPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-center text-2xl">CS 925 Login</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <Alert variant={"destructive"} className="mt-4">
            <AlertCircle className="h-4 w-4" color="green" />

            <AlertTitle>Error!</AlertTitle>
            <AlertDescription>
              Failed to send magic link. Please try again.
            </AlertDescription>
          </Alert>
        </CardContent>
        <CardFooter className="flex flex-col"></CardFooter>
      </Card>
    </div>
  );
}
