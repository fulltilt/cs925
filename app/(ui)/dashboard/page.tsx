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
        { module: "Exercises", url: "/foundations/js" },
      ],
      progress: 0,
    },
    {
      title: "Front-End Development (Upcoming)",
      icon: <Layout className="h-5 w-5" />,
      lessons: [
        { module: "Asynchronous JavaScript", url: "#" },
        { module: "Promises", url: "#" },
        { module: "Common JavaScript APIs", url: "#" },
        { module: "Event Handlers", url: "#" },
        { module: "JavaScript DOM Manipulation", url: "#" },
        { module: "Basic Reconciliation", url: "#" },
        { module: "Responsive Web Design", url: "#" },
        { module: "Introduction to React", url: "#" },
        { module: "State Management in React", url: "#" },
      ],
      progress: 0,
    },
    {
      title: "Back-End Development (Upcoming)",
      icon: <Server className="h-5 w-5" />,
      lessons: [
        { module: "Introduction to Node.js", url: "#" },
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
      title: "Misc Topics (Upcoming)",
      icon: <Code className="h-5 w-5" />,
      lessons: [
        { module: "Version Control with Git", url: "#" },
        { module: "Public/Private Key Encryption", url: "#" },
        { module: "Authentication Using JSON Web Tokens (JWTs)", url: "#" },
        { module: "Deploying Your App to the Cloud", url: "#" },
        { module: "Setting up a Domain", url: "#" },
        { module: "Zod for Form Validation", url: "#" },
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
          <Accordion
            type="multiple"
            className="w-full"
            defaultValue={[
              "section-0",
              "section-1",
              "section-2",
              "section-3",
              "section-4",
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
          <div className="mt-8 flex justify-center">
            <Button>Continue Learning</Button>
          </div>
        </div>
      </main>
      <footer className="py-6 px-4 md:px-6 border-t">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2024 CodeMaster Academy. All rights reserved.
          </p>
          <nav className="flex gap-4 mt-4 sm:mt-0">
            <Link
              className="text-sm text-gray-500 hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm text-gray-500 hover:underline underline-offset-4"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-sm text-gray-500 hover:underline underline-offset-4"
              href="#"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
