import ModuleWrapper from "@/app/components/ModuleWrapper";

export default function WebDev() {
  return (
    <ModuleWrapper>
      <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
        <h1>Introduction</h1>
        <h2>What is Web Development?</h2>
        <p>
          Web development is the process of creating websites and web
          applications for the internet or a private network (intranet). It
          involves everything from building simple static web pages to complex
          platforms like social networks or e-commerce sites. It allows users to
          access information, services, and tools directly through their web
          browsers, making the web an interactive and engaging space.
        </p>
        <hr />
        <h2>Key Aspects of Web Development</h2>
        <p>
          Web development is generally divided into three main components:
          frontend development, backend development, and database management.
        </p>
        <p>
          <strong>Frontend development</strong> focuses on what users see and
          interact with directly in their web browsers. It involves building the
          layout, design, colors, and visual elements of a website. HTML
          (HyperText Markup Language) is used to structure content, CSS
          (Cascading Style Sheets) styles the content, and JavaScript makes it
          interactive. Popular frameworks like React or Vue.js can help
          streamline the development of more complex user interfaces.
        </p>
        <p>
          <strong>Backend development</strong> involves the server-side logic
          that processes requests from the frontend and manages communication
          with the database. It handles user authentication, data processing,
          and the overall business logic of an application. This part of web
          development relies on programming languages like JavaScript (with
          Node.js), Python, or PHP, along with frameworks such as Express,
          Django, or Laravel.
        </p>
        <p>
          <strong>Database management</strong> is the third component, crucial
          for storing and retrieving data like user information, product
          details, or blog posts. Databases can be structured using SQL-based
          systems like MySQL and PostgreSQL, or unstructured using NoSQL options
          like MongoDB.
        </p>
        <hr />
        <h2>Frontend and Backend: How They Work Together</h2>
        <p>
          When a user visits a website, the frontend sends a request to the
          backend server, which processes the request and retrieves data from a
          database if needed. The server then sends this data back to the
          frontend, which displays it to the user. For example, when you log
          into a website, the frontend sends your login details to the backend,
          which verifies them against a database and returns the relevant user
          data to be displayed.
        </p>
        <hr />
        <h2>Types of Web Development</h2>
        <p>
          Web development can be categorized into static websites, dynamic
          websites, and web applications. Static websites have fixed content
          that doesn&#39;t change unless manually updated, like a basic
          portfolio site. Dynamic websites adjust content based on user
          interactions, such as social media platforms or news sites. Web
          applications are more interactive and allow users to perform tasks,
          like online banking or project management tools.
        </p>
        <hr />
        <h2>Web Development Roles</h2>
        <p>
          In web development, different roles focus on different aspects of the
          process. Frontend developers work on building user interfaces and
          making sure that websites are responsive and visually appealing.
          Backend developers handle server-side logic and data management,
          ensuring that applications run smoothly. Full stack developers combine
          both frontend and backend skills, working across the entire
          development process. Web designers, though more focused on the
          creative aspect, often collaborate closely with developers to ensure
          that design mockups are translated into functional interfaces.
        </p>
        <hr />
        <h2>The Importance of Web Development</h2>
        <p>
          Web development is vital because it enables businesses, individuals,
          and organizations to reach a global audience. It makes services and
          information accessible from anywhere and on any device, and it allows
          companies to grow by creating engaging online experiences. Beyond
          practical uses, web development fosters creativity, allowing
          developers to bring unique, interactive ideas to life on the internet.
        </p>
        <hr />
        <h2>Getting Started with Web Development</h2>
        <p>
          To begin learning web development, start with the basics of HTML, CSS,
          and JavaScript, then practice by building small projects like a
          personal portfolio or a simple to-do list app. As you gain confidence,
          explore frameworks like React for the frontend or Express for the
          backend. Understanding version control with Git is essential for
          managing your code efficiently. Web development is a constantly
          evolving field, so it&#39;s important to stay updated with new tools
          and best practices.
        </p>
        <hr />
        <h2>Summary</h2>
        <p>
          Web development is the engine that powers the internet, making
          websites and web applications possible. It combines creativity, logic,
          and problem-solving to turn ideas into reality in the digital world.
          Whether you&#39;re aiming to build a simple blog or a complex
          platform, learning web development opens up a range of possibilities
          in the tech industry.
        </p>
        {/* <NavigationLinks
        prevLesson={{
          slug: "/notes",
          title: "Notes",
        }}
        nextLesson={{
          slug: "/foundations/devenv",
          title: "Setting Up Your Development Environment",
        }}
      /> */}
      </div>
    </ModuleWrapper>
  );
}
