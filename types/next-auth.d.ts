// LOOKUP MODULE AUGMENTATION FOR NEXT-AUTH
import NextAuth from "next-auth";

interface StripeData {
  cancel_at: number;
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session extends User {
    user: {
      image: string;
      email: string;
      name: string | null;
      id: string;
      username: string | null;
      emailVerified: Date | null;
      stripeData: StripeData;
      createdAt: Date;
    };
  }
}
