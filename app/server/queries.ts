"use server";

import { db } from "@/server/db";
import { user } from "@/server/db/schema";
import { eq } from "drizzle-orm";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: process.env.EMAIL_SERVER_PORT,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

export async function sendMail(email: string) {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM, // sender address
    to: process.env.EMAIL_FROM, // list of receivers
    subject: "New CS925 Interest Request", // Subject line
    text: email, // plain text body
    html: email, // html body
  });
}

export async function getUser(id: string) {
  try {
    const res = await db.select().from(user).where(eq(user.id, id)).execute();
    const { email, image } = res[0];
    // @ts-ignore
    const subscriptionDate = new Date(
      res[0].stripe_data.created * 1000
    ).toISOString();

    return { email, image, subscriptionDate };
  } catch (err) {
    return { error: "Error updating user" };
  }
}

export async function updateUser(id: string, stripe_data: any) {
  try {
    await db.update(user).set({ stripe_data }).where(eq(user.id, id)).execute();
    return { data: "Successfully updated user" };
  } catch (err) {
    return { error: "Error updating user" };
  }
}

export async function alertDiscord(message: string) {
  await fetch(process.env.DISCORD_WEBHOOK!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: message,
    }),
  });
}
