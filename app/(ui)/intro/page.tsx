"use client";
import NavigationLinks from "@/app/components/NavigationLinks";
import { alertDiscord } from "@/app/server/queries";

export default function Intro() {
  return (
    <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
      <h1>Welcome!</h1>
      <p>Hello, and welcome to CS925! 🎉</p>
      <p>
        We&apos;re thrilled that you&apos;ve decided to take the first step into
        the world of coding. Whether you&apos;re looking to build a new career,
        sharpen your skills, or simply explore the power of technology,
        you&apos;re in the right place.
      </p>
      <p>
        This bootcamp is designed <strong>especially for beginners</strong>—no
        prior programming experience needed! We&apos;ll start from the very
        basics and guide you through key concepts and practical skills
        step-by-step. Our hands-on approach ensures that you&apos;ll be writing
        your own code in no time and ultimately start building real projects to
        apply what you learn. Everyone goes at their own pace and this course
        will help accommodate that.
      </p>
      <p>
        As of this writing, there are a ton of great resources on this subject
        but the content is scattered or you consume the content and totally
        forget about it. I can't recall how many times I have gone through an
        online video, spent hours coding along and finish it only to forget what
        I did as it was too much of an information dump in too little time.
        However, in those resources, I always find little gems here and there
        and what I'd like to have this course be is to also consolidate those
        gems into one place.
      </p>
      <h2>What to Expect:</h2>
      <ul>
        <li>
          <strong>Friendly, Beginner-Focused Learning</strong>: We understand
          that starting something new can be challenging, so our course is
          tailored to be accessible and fun, breaking down complex topics into
          simple, easy-to-digest lessons.
        </li>
        <li>
          <strong>Interactive and Engaging Content</strong>: With video
          tutorials, interactive exercises, and coding challenges, you&apos;ll
          learn by doing. We&apos;ll help you turn theory into practice.
        </li>
        <li>
          <strong>Supportive Community</strong>: You&apos;re not alone in this
          journey! Join a community of fellow beginners and mentors who are here
          to help, answer questions, and celebrate your progress.
        </li>
      </ul>
      <p>
        Our goal is to give you the foundational skills needed to create
        websites, understand programming logic, and even build your own small
        apps. Plus, you&apos;ll gain the confidence to continue your coding
        journey, whether it&#39;s towards web development, software engineering,
        employment or just solving everyday problems with code.
      </p>
      <h2>Let&apos;s Get Started!</h2>
      <p>
        It&apos;s time to dive in, have some fun, and unlock the power of
        coding. We&apos;re excited to see what you&apos;ll create!
      </p>
      <p>Happy coding, and welcome to the world of tech! 🚀</p>

      <NavigationLinks
        prevLesson={null}
        nextLesson={{
          slug: "/foundations/webdev",
          title: "What Is Web Development?",
        }}
      />
    </div>
  );
}
