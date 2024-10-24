"use server";

import { sql, and, eq } from "drizzle-orm";
import { db } from ".";
import { module, moduleStatus, user } from "./schema";

export async function getCourseCounts() {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await db.execute(sql`
            SELECT c.name, COUNT(*)
            FROM cs925_course c, cs925_module m
            WHERE c.id = m.course_id
            GROUP BY c.id
        `);

      console.log(res.rows);
      resolve(res.rows);
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
}

export async function getCompletedCourses(email: string) {
  return new Promise(async (resolve, reject) => {
    try {
      //   const res = await db
      //     .select({
      //       course_id: module.courseId,
      //       module_id: moduleStatus.moduleId,
      //     })
      //     .from(user)
      //     .innerJoin(moduleStatus, eq(user.id, moduleStatus.userId))
      //     .innerJoin(module, eq(moduleStatus.moduleId, module.id))
      //     .where(eq(user.email, email))
      //     .execute();
      const res = await db.execute(sql`
        SELECT m.course_id, s.module_id
        FROM cs925_user u
        INNER JOIN cs925_module_status s ON u.id = s.user_id
        INNER JOIN cs925_module m ON s.module_id = m.id
        WHERE u.email = ${email};
    `);

      console.log(res.rows);
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

      console.log(res.rows);
      resolve(res.rows);
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
}
