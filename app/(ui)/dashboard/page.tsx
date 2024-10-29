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
import { customOrder, roundToTwoDecimals } from "@/lib/utils";

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

function orderSections(sections) {
  // JavaScript
  sections[2].modules.sort(
    customOrder("url", [
      "/js/arrayf",
      "/js/dom",
      "/js/exercise",
      "/js/events",
      "/js/async",
      "/js/promises",
      "/js/fetch",
      "/js/errors",
      "/js/typescript",
      "/js/reconciliation",
    ])
  );

  // React
  sections[3].modules.sort(
    customOrder("url", [
      "/react",
      "/react/state",
      "/react/forms",
      "/react/zodhookform",
      "/react/reconciliation",
      "/react/old",
    ])
  );

  // UX
  sections[4].modules.sort(
    customOrder("url", [
      "/ux/basics",
      "/ux/flexbox",
      "/ux/grid",
      "/ux/responsive",
      "/ux/colors",
      "/ux/typography",
      "/ux/images",
      "/ux/content",
      "/ux/tailwind",
    ])
  );

  // backend
  sections[5].modules.sort(
    customOrder("url", [
      "/backend/node-intro",
      "/backend/express",
      "/backend/rest",
      "/backend/auth",
      "/backend/db",
    ])
  );

  // Database
  sections[6].modules.sort(
    customOrder("url", [
      "/db",
      "/db/sql",
      "/db/nosql",
      "/db/design",
      "/db/models",
    ])
  );

  // Misc
  sections[7].modules.sort(
    customOrder("url", [
      "/shell/paths",
      "/misc/git",
      "/misc/zod",
      "/misc/why-zod",
      "/misc/keyencrypt",
      "/misc/jwt",
      "/misc/regex",
      "/misc/domain",
    ])
  );
}

export default async function TableOfContents() {
  const session = await auth();
  const counts = await getCourseCounts();
  const completed = await getCompletedCourses(session?.user.email ?? "");
  const courseData = (await getCourseData()) as CourseData;

  // update users completed modules count for every course
  completed.forEach((module) => counts[module.course_id].count++);

  const sections = courseData.reduce((courses, current) => {
    if (courses[current.course_id] === undefined) {
      const newCourse = {} as any;
      newCourse.id = current.course_id;
      newCourse.title = current.course_name;
      newCourse.modules = [];
      courses[current.course_id] = newCourse;
    }
    courses[current.course_id].modules.push({
      id: current.module_id,
      name: current.module_name,
      url: current.path,
    });

    return courses;
  }, {} as any);
  orderSections(sections);

  const overallCounts = Object.values(counts).reduce(
    (totals, current) => {
      totals["modules"] += parseInt(current["total_modules"]);
      totals["completed"] += current["count"];
      return totals;
    },
    { modules: 0, completed: 0 }
  );

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
              <Progress
                value={
                  (overallCounts["completed"] / overallCounts["modules"]) * 100
                }
                className="w-full [&>*]:bg-green-500"
              />
              <p className="text-sm text-gray-500 mt-2">
                {roundToTwoDecimals(
                  (overallCounts["completed"] / overallCounts["modules"]) * 100
                )}
                % Complete
              </p>
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
                <Module
                  section={section}
                  index={index}
                  completedCourses={completed.map((c2) => c2.module_id)}
                  progress={roundToTwoDecimals(
                    (counts[section.id].count /
                      parseInt(counts[section.id].total_modules)) *
                      100
                  )}
                />
              </Suspense>
            ))}
          </Accordion>
        </div>
      </main>
    </div>
  );
}

// { module: "Web Security Best Practices", url: "/misc/security" },
// { module: "Performance Optimization", url: "/misc/performance" },
// { module: "Deployment and DevOps", url: "/misc/devops" },
// { module: "Microservices Architecture", url: "/misc/microservices" },
// { module: "Serverless Computing", url: "/misc/serverless" },
