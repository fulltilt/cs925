import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Code,
  Layout,
  Database,
  Server,
  Globe,
  CheckCircle,
  NotepadText,
} from "lucide-react";

export default function TableOfContents() {
  const courseSections = [
    {
      title: "Foundations",
      icon: <Globe className="h-5 w-5" />,
      lessons: [
        { module: "What is Web Development?", url: "/foundations/webdev" },
        {
          module: "Setting Up Your Development Environment",
          url: "/foundations/devenv",
        },
        { module: "Introduction to HTML", url: "/foundations/html" },
        { module: "Introduction to CSS", url: "/foundations/css" },
        { module: "Introduction to JavaScript", url: "/foundations/js" },
        {
          module: "Exercise: replicating landing pages",
          url: "/foundations/exercises",
        },
      ],
      progress: 0,
    },
    {
      title: "JavaScript (In Progress)",
      icon: <Layout className="h-5 w-5" />,
      lessons: [
        { module: "Asynchronous JavaScript (NEW)", url: "/frontend/js/async" },
        { module: "Map, Filter and Reduce", url: "/frontend/js/arrayf" },
        { module: "Event Handlers", url: "/frontend/js/events" },
        { module: "JavaScript DOM Manipulation", url: "/frontend/js/dom" },
        {
          module: "Exercise: TODO app in vanilla JavaScript",
          url: "/frontend/js/exercise",
        },
        { module: "Error Handling", url: "/frontend/js/error" },
        { module: "Promises", url: "/frontend/js/promises" },
        { module: "TypeScript", url: "/misc/typescript" },
        {
          module: "Basic Reconciliation (Optional)",
          url: "/frontend/js/reconciliation",
        },
      ],
      progress: 0,
    },
    {
      title: "React (In Progress)",
      icon: <Layout className="h-5 w-5" />,
      lessons: [
        { module: "Introduction to React", url: "/react" },
        { module: "State Management in React", url: "/react/state" },

        { module: "Handling Form Data", url: "/react/forms" },
        {
          module: "Form Validation with Zod and React Hook Form",
          url: "/react/zodhookform",
        },
        {
          module: "Reconciliation in React (Optional)",
          url: "/react/reconciliation",
        },
        { module: "Older Versions of React (Optional)", url: "/react/old" },
      ],
      progress: 0,
    },
    // https://www.youtube.com/watch?v=NJGLR5gl6m4
    {
      title: "User Experience (UX) (In Progress)",
      icon: <Layout className="h-5 w-5" />,
      lessons: [
        { module: "UX Basics", url: "/ux/basics" },
        { module: "Flexbox Layout", url: "/ux/flexbox" },
        { module: "Grid Layout", url: "/ux/grid" },
        { module: "Responsive Web Design", url: "/ux/responsive" },
        { module: "Typography", url: "/ux/" },
        { module: "Colors", url: "/ux/" },
        { module: "Images", url: "/ux/" },
        { module: "Content", url: "/ux/" },
        { module: "Tailwind for Styling", url: "#" },
      ],
      progress: 0,
    },
    {
      title: "Back-End Development (Upcoming)",
      icon: <Server className="h-5 w-5" />,
      lessons: [
        { module: "Introduction to Node.js (NEW)", url: "/backend/node-intro" },
        { module: "Express.js Fundamentals", url: "#" },
        { module: "RESTful API Design", url: "#" },
        { module: "Authentication and Authorization", url: "#" },
        { module: "Database Integration", url: "#" },
      ],
      progress: 0,
    },
    {
      title: "Database Management (Upcoming)",
      icon: <Database className="h-5 w-5" />,
      lessons: [
        { module: "Introduction to Databases", url: "#" },
        { module: "SQL Fundamentals", url: "#" },
        { module: "NoSQL Databases", url: "#" },
        { module: "Database Design Principles", url: "#" },
        { module: "Data Modeling and Normalization", url: "#" },
      ],
      progress: 0,
    },
    {
      title: "Misc Topics (In Progress)",
      icon: <Code className="h-5 w-5" />,
      lessons: [
        { module: "Directory Paths and Navigation", url: "/shell/paths" },
        { module: "Data Validation with Zod", url: "/misc/why-zod" },
        { module: "Zod Basics", url: "/misc/zod" },
        { module: "Version Control with Git", url: "#" },
        { module: "Regex", url: "/misc/regex" },
        { module: "Public/Private Key Encryption", url: "#" },
        { module: "Authentication Using JSON Web Tokens (JWTs)", url: "#" },
        { module: "Deploying Your App to the Cloud", url: "#" },
        { module: "Setting up a Domain", url: "#" },

        // { module: "Web Security Best Practices", url: "#" },
        // { module: "Performance Optimization", url: "#" },
        // { module: "Deployment and DevOps", url: "#" },
        // { module: "Microservices Architecture", url: "#" },
        // { module: "Serverless Computing", url: "#" },
      ],
      progress: 0,
    },
  ];

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
            {courseSections.map((section, index) => (
              <AccordionItem value={`section-${index}`} key={index}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center">
                    {section.icon}
                    <span className="ml-2">{section.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="flex items-center">
                        <CheckCircle
                          className={`h-4 w-4 mr-2 ${
                            section.progress > lessonIndex * 20
                              ? "text-green-500"
                              : "text-gray-300"
                          }`}
                        />
                        <Link
                          href={lesson.url}
                          className="text-sm no-underline hover:underline"
                        >
                          {lesson.module}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <Progress value={section.progress} className="w-full" />
                    <p className="text-sm text-gray-500 mt-2">
                      {section.progress}% Complete
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
    </div>
  );
}
