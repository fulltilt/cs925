import NextAuth from "next-auth";
import Nodemailer from "next-auth/providers/nodemailer";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/server/db";
import {
  accounts,
  sessions,
  user as db_user,
  verificationTokens,
} from "@/server/db/schema";
import { eq } from "drizzle-orm";
import MagicLinkEmail from "@/emails/MagicLinkEmail";
import { sendMail } from "@/server/db/queries";
import { render } from "@react-email/components";

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  trustHost: true,
  adapter: DrizzleAdapter(db, {
    usersTable: db_user,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  secret: process.env.AUTH_SECRET, // Used to sign the session cookie so AuthJS can verify the session
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days in seconds (this value is also the default)
  },
  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/auth-success",
    error: "/auth/auth-error",
  },
  providers: [
    Nodemailer({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: parseInt(process.env.EMAIL_SERVER_PORT!, 10),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      async sendVerificationRequest(params) {
        // this function allows you to customize the Magic Link email
        const { identifier, url } = params;
        const userEmail = identifier;

        try {
          const emailHtml = await render(<MagicLinkEmail url={url} />);

          sendMail(
            userEmail!,
            "Here is your Magic Link for CS 925!",
            emailHtml
          );
        } catch (e) {
          console.log("error", e);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      const userData = await db
        .select()
        .from(db_user)
        .where(eq(db_user.email ?? "", token.email ?? ""))
        .execute();

      if (userData.length === 1) {
        return {
          ...token,
          stripeData: userData[0].stripe_data,
          id: userData[0].id,
        };
      }
      return token;
    },
    async session({ session, token }) {
      //   console.log("session callback", { session, token });
      console.log("session callback");
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          stripeData: token.stripeData,
        },
      };
    },
    authorized: async ({ auth }) => {
      console.log("authorized", auth);
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
  },
});
