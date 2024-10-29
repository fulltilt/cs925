import Nodemailer from "next-auth/providers/nodemailer";
import type { NextAuthConfig } from "next-auth";
import MagicLinkEmail from "@/emails/MagicLinkEmail";
import { sendMail } from "@/server/db/queries";
import { render } from "@react-email/components";

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [],
} satisfies NextAuthConfig;
