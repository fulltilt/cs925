"use server";

import { eq, sql } from "drizzle-orm";
import { db } from ".";
import { user } from "@/server/db/schema";

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

export async function sendMail(to: string, subject: string, html: string) {
  console.log(to, subject, html);
  await transporter.sendMail({
    from: process.env.EMAIL_FROM, // sender address
    to, // list of receivers
    subject,
    // text: email, // plain text body
    html, // html body
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

export async function getCourseCounts() {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await db.execute(sql`
            SELECT c.id, c.name, COUNT(*) AS total_modules
            FROM cs925_course c, cs925_module m
            WHERE c.id = m.course_id
            GROUP BY c.id
        `);

      //   console.log(res.rows);
      resolve(
        res.rows
          .map((row) => ({ ...row, count: 0 }))
          .reduce((courses, current) => {
            courses[current.id] = { ...current };
            return courses;
          }, {})
      );
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
}

export async function getCompletedCourses(email: string) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await db.execute(sql`
        SELECT m.course_id, s.module_id
        FROM cs925_user u
        INNER JOIN cs925_module_status s ON u.id = s.user_id
        INNER JOIN cs925_module m ON s.module_id = m.id
        WHERE u.email = ${email} AND s.complete = TRUE;
    `);

      //   console.log(res.rows);
      resolve(res.rows);
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
}

export async function getCourseData() {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await db.execute(sql`
            SELECT c.id AS course_id, c.name AS course_name, m.id AS module_id, 
                    m.path, m.name AS module_name
            FROM cs925_course c
            INNER JOIN cs925_module m ON c.id = m.course_id;
        `);

      //   console.log(res.rows);
      resolve(res.rows);
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
}

export async function getModule(path: string): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await db.execute(sql`
              SELECT id 
              FROM cs925_module
              WHERE path = ${path}
          `);

      if (res.rows.length) resolve(res.rows[0].id);
      else resolve("");
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
}

export async function getModuleUserStatus(
  user_id: string,
  module_id: string
): Promise<boolean> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await db.execute(sql`
                SELECT complete
                FROM cs925_module_status
                WHERE user_id = ${user_id} AND module_id = ${module_id}
            `);

      if (res.rows.length) resolve(res.rows[0].complete);
      else resolve(false);
    } catch (e) {
      console.log("error", e);
      reject(e);
    }
  });
}

export async function setModuleUserStatus(
  status: boolean,
  user_id: string,
  module_id: string
): Promise<boolean> {
  console.log(status, user_id, module_id);
  return new Promise(async (resolve, reject) => {
    try {
      //   const res = await db.execute(sql`
      //               UPDATE cs925_module_status
      //               SET complete = ${!status}
      //               WHERE user_id = ${user_id} AND module_id = ${module_id}
      //           `);

      // when user clicks marks a module complete, it will create a new entry and the 'status' value is false initially
      // so when creating, do !status to make the initial value to be true
      const res = await db.execute(sql`
        INSERT into cs925_module_status (user_id, module_id, complete)
        VALUES (${user_id}, ${module_id}, ${!status})
        ON CONFLICT (user_id, module_id) DO UPDATE 
        SET complete = ${!status};
      `);
      console.log(res);
      resolve(res.rowCount === 1);
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
}
