import NavigationLinks from "@/app/components/NavigationLinks";

export default function () {
  return (
    <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
      <h1>Notes</h1>
      <p>
        The modules in this course serve as to give you a brief overview of a
        particular topic and we branch off from there in more specific modules.
        You can read each module one after the next but the real learning is
        being hands on and doing the exercises/projects and experimenting and
        playing around with the code.
      </p>
      <p>
        Ultimately, all of these small projects will be building blocks for you
        to build your own projects and that's where the most learning will be.
        It's one thing to follow along a multi-hour tutorial and mimicing the
        instructor but it's another thing when you're building something from
        scratch.
      </p>
      <p>
        For the simpler examples, you can access the built-in code editor by
        clicking on the Sandbox option but as we get into more complex topics
        like React, you'll be directed to an external editor (Codesandbox.io
        specifically). Each module will try to build a small app to demonstrate
        what was covered in a module. Think of these as building blocks which
        you will eventually use with other building blocks to build
        applications. We keep the modules concise and apps small so that you can
        use them as references in the future.
      </p>
      <p>
        As there are many front-end frameworks to choose from (i.e. Angular,
        Svelte, etc.), we opted for React as it is the most widely used
        framework which in turn means that the bigger the community, the more
        information there is out there and more importantly, the more likely
        someone has run into the same issues that you'll run into.
      </p>
      <p>
        For the technologies used, we will use tools that are free so don&apos;t
        expect to have to pay anything outside of the monthly membership if you
        are subscribed. The one exception I can think of is when setting up a
        domain which can't be avoided. Fortunately, the cost for registering a
        domain can be as low as $10.
      </p>
      <p>
        The site is still relatively new and we plan on adding more content as
        time goes on but in the meantime, there is more than enough content to
        keep you busy for a long time, especially if you are new.
      </p>
      <NavigationLinks
        prevLesson={{
          slug: "/intro",
          title: "Introduction",
        }}
        nextLesson={{
          slug: "/foundations/webdev",
          title: "What Is Web Development?",
        }}
      />
    </div>
  );
}
