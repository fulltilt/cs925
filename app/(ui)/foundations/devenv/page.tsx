import CodeHighlight from "@/app/components/CodeHighlight";

export default function DevEnv() {
  return (
    <div className="flex max-w-[70ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson ">
      <h1>Setting Up a Development Environment</h1>
      <p>
        This module will guide you through the essentials of setting up a
        development environment for web development. We&#39;ll cover the
        necessary tools, their installation, and how to configure your workspace
        for efficient coding. This is perfect for beginners starting out with
        web development or those who want to ensure their environment is
        optimized for productivity.
      </p>
      <p>
        The following is an extremely brief overview of the recommended tools
        which we'll expand on in later modules but this is enough to get you
        started or at the very least familiarized with tools that will help you
        on your journey.
      </p>

      <hr />
      <h3>
        <strong>1. Introduction to Development Environments</strong>
      </h3>
      <p>
        <strong>Goal</strong>: Understand the importance of a good development
        environment and the basic tools you need.
      </p>
      <ul>
        <li>
          A development environment is where you write, test, and debug your
          code before deploying it to a live website.
        </li>
        <li>
          Key tools for web development:
          <ul className="ml-4">
            <li>
              <strong>Code Editor</strong>: A tool for writing code.
            </li>
            <li>
              <strong>Version Control</strong>: Manages changes to code.
            </li>
            <li>
              <strong>Package Manager</strong>: Installs libraries and
              frameworks.
            </li>
            <li>
              <strong>Local Server</strong>: Tests your code locally before
              deploying.
            </li>
            <li>
              <strong>Browser with DevTools</strong>: Helps debug and test your
              website.
            </li>
          </ul>
        </li>
        <li>
          A well-configured development environment can save time and improve
          productivity.
        </li>
      </ul>
      <hr />
      <h3>
        <strong>2. Installing a Code Editor (VS Code)</strong>
      </h3>
      <p>
        <strong>Goal</strong>: Set up Visual Studio Code, a powerful code editor
        for web development.
      </p>
      <ul>
        <li>
          <strong>Visual Studio Code (VS Code)</strong> is a free, open-source
          editor with a lot of built-in features and extensions.
        </li>
        <li>
          Download and install VS Code from{" "}
          <a href="https://code.visualstudio.com/">
            https://code.visualstudio.com/
          </a>
          .
        </li>
      </ul>
      <p>
        <strong>Key Settings</strong>:
      </p>
      <ul>
        <li>
          <strong>Themes</strong>: Customize the appearance with themes like
          &quot;Dracula&quot; or &quot;Material Theme&quot;.
        </li>
        <li>
          <strong>Extensions</strong>:
          <ul className="ml-4">
            <li>
              <strong>Prettier</strong>: Formats your code automatically.
            </li>
            <li>
              <strong>ESLint</strong>: Lints JavaScript to catch errors.
            </li>
            <li>
              <strong>GitLens</strong>: Enhances Git integration in VS Code.
            </li>
          </ul>
        </li>
      </ul>
      <hr />
      <h3>
        <strong>3. Setting Up Git and Version Control</strong>
      </h3>
      <p>
        <strong>Goal</strong>: Learn how to install and use Git for version
        control.
      </p>
      <ul>
        <li>
          <strong>Git</strong> is a version control system that allows you to
          track changes in your codebase.
        </li>
        <li>
          Download Git from{" "}
          <a href="https://git-scm.com/">https://git-scm.com/</a> and install
          it.
        </li>
      </ul>
      <p>
        <strong>Basic Commands</strong>:
      </p>
      <ul>
        <li>
          <code>git init</code>: Initialize a new Git repository.
        </li>
        <li>
          <code>git add .</code>: Stage changes.
        </li>
        <li>
          <code>git commit -m &quot;message&quot;</code>: Commit changes with a
          message.
        </li>
        <li>
          <code>git push</code>: Push changes to a remote repository.
        </li>
        <li>
          <strong>Remote Repository</strong>: Use GitHub, GitLab, or Bitbucket
          for hosting your repositories online.
        </li>
      </ul>
      <p>
        <strong>Setup</strong>:
      </p>
      <ul>
        <li>
          After installation, configure your user details:
          <CodeHighlight
            content={`
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
`}
          />
        </li>
      </ul>
      <hr />
      <h3>
        <strong>4. Installing Node.js and npm</strong>
      </h3>
      <p>
        <strong>Goal</strong>: Set up Node.js and npm for managing packages and
        building JavaScript applications.
      </p>
      <ul>
        <li>
          <strong>Node.js</strong> is a runtime environment for running
          JavaScript outside the browser.
        </li>
        <li>
          <strong>npm</strong> (Node Package Manager) is used to install
          libraries and frameworks like React, Express, etc.
        </li>
        <li>
          Download Node.js from{" "}
          <a href="https://nodejs.org/">https://nodejs.org/</a>.
        </li>
        <li>
          After installation, verify it in the terminal:
          <CodeHighlight
            content={`
node -v
npm -v
`}
          />
        </li>
      </ul>
      <p>
        <strong>Useful npm Commands</strong>:
      </p>
      <ul>
        <li>
          <code>npm init</code>: Initialize a new project.
        </li>
        <li>
          <code>npm install &lt;package&gt;</code>: Install a package.
        </li>
        <li>
          <code>npm install -g &lt;package&gt;</code>: Install a package
          globally.
        </li>
      </ul>
      <hr />

      <h3>
        <strong>5. Using a Terminal for Development</strong>
      </h3>
      <p>
        <strong>Goal</strong>: Learn basic terminal commands to navigate and
        manage your projects.
      </p>
      <ul>
        <li>
          The terminal is used for interacting with your computer using text
          commands.
        </li>
        <li>
          <strong>Common Commands</strong>:
          <ul className="ml-4">
            <li>
              <code>cd &lt;directory&gt;</code>: Change directory.
            </li>
            <li>
              <code>ls</code> or <code>dir</code>: List files in the current
              directory.
            </li>
            <li>
              <code>mkdir &lt;directory&gt;</code>: Create a new folder.
            </li>
            <li>
              <code>rm -rf &lt;directory&gt;</code>: Delete a folder.
            </li>
            <li>
              <code>touch &lt;file&gt;</code>: Create a new file.
            </li>
          </ul>
        </li>
        <li>
          <strong>Integrated Terminal in VS Code</strong>:
          <ul className="ml-4">
            <li>
              Press <code>Ctrl + ~</code> (Windows/Linux) or{" "}
              <code>Cmd + ~</code> (Mac) to open the terminal inside VS Code.
            </li>
          </ul>
        </li>
      </ul>
      <hr />
      <h3>
        <strong>6. Installing a Browser for Development (Chrome)</strong>
      </h3>
      <p>
        <strong>Goal</strong>: Use a browser with powerful developer tools for
        debugging and testing.
      </p>
      <ul>
        <li>
          <strong>Google Chrome</strong> is commonly used because of its robust
          DevTools.
        </li>
        <li>
          <strong>Download</strong> from{" "}
          <a href="https://www.google.com/chrome/">
            https://www.google.com/chrome/
          </a>
          .
        </li>
      </ul>
      <p>
        <strong>Key DevTools Features</strong>:
      </p>
      <ul>
        <li>
          <strong>Elements</strong>: Inspect and modify HTML and CSS.
        </li>
        <li>
          <strong>Console</strong>: See errors and debug JavaScript.
        </li>
        <li>
          <strong>Network</strong>: Monitor network requests and API calls.
        </li>
        <li>
          <strong>Sources</strong>: Debug JavaScript code using breakpoints.
        </li>
      </ul>
      <hr />

      <h3>
        <strong>7. Setting Up Prettier and ESLint for Code Quality</strong>
      </h3>
      <p>
        <strong>Goal</strong>: Improve code readability and consistency with
        Prettier and ESLint.
      </p>
      <ul>
        <li>
          <strong>Prettier</strong> automatically formats your code.
          <ul className="ml-4">
            <li>
              Install the Prettier extension in VS Code. Once installed, enable
              formatting on save by going to VS Code settings (
              <code>Command + ,</code> on Mac or <code>Ctrl + ,</code> on
              Windows), searching for 'format' in search bar and then checking{" "}
              <strong>Format on Save</strong>
            </li>
          </ul>
        </li>
        <li>
          <strong>ESLint</strong> catches syntax errors and enforces coding
          style.
        </li>
        <li>
          <strong>Install ESLint</strong>:
          <CodeHighlight
            content={`
npm install --save-dev eslint
npx eslint --init
`}
          />
          <ul className="ml-4">
            <li>Choose the rules and format you prefer.</li>
          </ul>
        </li>
      </ul>
      <hr />
      <h3>
        <strong>
          8. Optional/Advanced: Setting Up Docker for Containerized Development
        </strong>
      </h3>
      <p>
        <strong>Goal</strong>: Use Docker to create isolated environments for
        your projects.
      </p>
      <p>
        Once you get into the cloud or SQL database modules, you will want to
        containerize your database and/or app to make life easier. For now, you
        don't have to worry about it but Docker will be a great addition to your
        development toolkit .
      </p>
      <ul>
        <li>
          <strong>Docker</strong> allows you to containerize your application,
          ensuring consistent environments between development, testing, and
          production.
        </li>
        <li>
          <strong>Installation</strong>:
          <ul className="ml-4">
            <li>
              Download from{" "}
              <a href="https://www.docker.com/">https://www.docker.com/</a>.
            </li>
            <li>
              Create a <code>Dockerfile</code> to define your environment.
            </li>
          </ul>
        </li>
      </ul>
      <p>
        <strong>
          Example <code>Dockerfile</code>
        </strong>
        :
      </p>
      <CodeHighlight
        content={`
FROM node:14
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
`}
      />

      <p>This sets up a Node.js environment in Docker.</p>
      <hr />
      <h3>
        <strong>Conclusion</strong>
      </h3>
      <p>
        If you setup , you’ll have a fully functional development environment
        with tools that make coding, testing, and debugging more efficient.
        Whether you&#39;re working on simple HTML/CSS pages or complex
        JavaScript applications, this setup will make your development
        experience smoother and more enjoyable.
      </p>
      <p>Happy coding! 🎨💻</p>
    </div>
  );
}
