import { redirect } from "next/navigation";
import SignInPage from "./signin";
import { checkIsAuthenticated } from "@/app/api/auth/CheckIsAuthenticated";
import { auth } from "@/app/api/auth/authConfig";

export default async function SignIn() {
  const isAuthenticated = await checkIsAuthenticated();

  const session = await auth();
  const user = session?.user;
  console.log("user", user, isAuthenticated);

  if (isAuthenticated) {
    // @ts-ignore
    if (!user?.stripeData) {
      redirect("/subscribe");
    }

    redirect("/dashboard");
  }
  return <SignInPage />;
}
