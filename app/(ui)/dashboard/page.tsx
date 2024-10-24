import Link from "next/link";
import { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { BookOpen, NotepadText } from "lucide-react";
import Module from "./Module";
import {
  getCompletedCourses,
  getCourseCounts,
  getCourseData,
} from "@/server/db/queries";
import { auth } from "@/app/api/auth/authConfig";
import { z } from "zod";

export const courseDataSchema = z.array(
  z.object({
    course_id: z.number(),
    course_name: z.string(),
    module_id: z.string(),
    path: z.string(),
    module_name: z.string(),
  })
);

type CourseData = z.infer<typeof courseDataSchema>;

export default async function TableOfContents() {
  const session = await auth();
  const counts = await getCourseCounts();
  const completed = await getCompletedCourses(session?.user.email ?? "");
  const courseData = (await getCourseData()) as CourseData;

  const sections = courseData.reduce((courses, current) => {
    if (courses[current.course_id] === undefined) {
      const newCourse = {} as any;
      newCourse.id = current.course_id;
      newCourse.title = current.course_name;
      newCourse.modules = [];
      courses[current.course_id] = newCourse;
    }
    courses[current.course_id].modules.push({
      name: current.module_name,
      url: current.path,
    });

    return courses;
  }, {} as any);

  // { module: "Web Security Best Practices", url: "/misc/security" },
  // { module: "Performance Optimization", url: "/misc/performance" },
  // { module: "Deployment and DevOps", url: "/misc/devops" },
  // { module: "Microservices Architecture", url: "/misc/microservices" },
  // { module: "Serverless Computing", url: "/misc/serverless" },

  return (
    <div className="flex flex-col min-h-screen mx-4">
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">
            Full-Stack Web Development Course
          </h1>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Course Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={0} className="w-full" />
              <p className="text-sm text-gray-500 mt-2">0% Complete</p>
            </CardContent>
          </Card>
          <div className="flex gap-2">
            <BookOpen className="h-5 w-5" />
            <Link
              href="/intro"
              className="text-sm no-underline hover:underline"
            >
              Introduction
            </Link>
          </div>
          <div className="flex gap-2 mt-4">
            <NotepadText className="h-5 w-5" />
            <Link
              href="/notes"
              className="text-sm no-underline hover:underline"
            >
              Notes
            </Link>
          </div>
          <Accordion
            type="multiple"
            className="w-full"
            defaultValue={[
              "section-0",
              "section-1",
              "section-2",
              "section-3",
              "section-4",
              "section-5",
              "section-6",
            ]}
          >
            {Object.values(sections).map((section, index) => (
              <Suspense key={index} fallback={<p>Loading...</p>}>
                <Module section={section} index={index} />
              </Suspense>
            ))}
          </Accordion>
        </div>
      </main>
    </div>
  );
}
