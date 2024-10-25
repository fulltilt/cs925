import CodeHighlight from "@/app/components/CodeHighlight";
import ModuleWrapper from "@/app/components/ModuleWrapper";

export default function NodeIntro() {
  return (
    <ModuleWrapper>
      <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
        <h1>Introduction to Node.js and Setting Up a Local Website</h1>
        <p>
          Welcome to the <strong>Node.js</strong> introductory course! Node.js
          is a powerful JavaScript runtime that allows you to build server-side
          applications using JavaScript. This course will guide you through the
          basics of Node.js and how to use it to set up a simple website on your
          local machine.
        </p>
        <h2>What is Node.js?</h2>
        <p>
          Node.js is an{" "}
          <strong>open-source, cross-platform runtime environment</strong> built
          on <strong>Google Chrome&#39;s V8 JavaScript engine</strong>. It
          allows you to run JavaScript code outside of a web browser, making it
          ideal for building server-side applications.
        </p>
        <p>With Node.js, you can create:</p>
        <ul>
          <li>Web servers</li>
          <li>APIs (Application Programming Interfaces)</li>
          <li>Real-time applications (like chat apps)</li>
          <li>Command-line tools</li>
          <li>Many other types of applications</li>
        </ul>

        <hr />
        <h2>1. Installing Node.js and npm</h2>
        <p>
          Node.js comes with <strong>npm</strong> (Node Package Manager), which
          allows you to install libraries and packages that make development
          faster and easier.
        </p>
        <h3>Step 1: Download and Install Node.js</h3>
        <ul>
          <li>
            Go to the <a href="https://nodejs.org/">Node.js website</a>.
          </li>
          <li>
            Download the <strong>LTS version</strong> (Long Term Support) for
            your operating system (Windows, macOS, or Linux).
          </li>
          <li>Follow the installation instructions.</li>
        </ul>
        <h3>Step 2: Verify Installation</h3>
        <p>
          After installation, open your terminal and run the following commands
          to ensure Node.js and npm are installed correctly:
        </p>
        <CodeHighlight
          content={`
node -v
npm -v
`}
          sandboxOption={false}
        />
        <p>
          These commands should display the installed version numbers of Node.js
          and npm.
        </p>
        <hr />
        <h2>2. Setting Up a New Node.js Project</h2>
        <h3>Step 1: Create a Project Directory</h3>
        <p>
          In your terminal, navigate to a folder where you want to store your
          project and create a new directory:
        </p>
        <CodeHighlight
          content={`
mkdir my-website
cd my-website
`}
          sandboxOption={false}
        />
        <h3>Step 2: Initialize a Node.js Project</h3>
        <p>
          Inside the <code>my-website</code> folder, run the following command
          to create a <code>package.json</code> file, which stores metadata
          about your project:
        </p>
        <CodeHighlight
          content={`
npm init -y
`}
          sandboxOption={false}
        />
        <p>
          This command generates a basic <code>package.json</code> file with
          default settings.
        </p>
        <hr />
        <h2>3. Building a Basic Server with Node.js</h2>
        <p>
          Node.js allows you to create a simple HTTP server with just a few
          lines of code. Let’s create a basic server that responds with
          &quot;Hello, World!&quot; when accessed in a browser.
        </p>
        <h3>
          Step 1: Create a <code>server.js</code> File
        </h3>
        <p>
          In your <code>my-website</code> directory, create a new file called{" "}
          <code>server.js</code>:
        </p>
        <CodeHighlight
          content={`
// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(\`Server running at http://localhost:$\{PORT}/\`);
});
`}
          sandboxOption={false}
        />
        <h3>Step 2: Start the Server</h3>
        <p>In your terminal, run the following command:</p>
        <CodeHighlight
          content={`
node server.js
`}
          sandboxOption={false}
        />
        <p>
          You should see the message:{" "}
          <code>Server running at http://localhost:3000/</code>.
        </p>
        <h3>Step 3: Test the Server</h3>
        <p>
          Open your browser and go to <code>http://localhost:3000/</code>. You
          should see the message <strong>&quot;Hello, World!&quot;</strong>.
        </p>
        <hr />
        <h2>4. Serving HTML Pages</h2>
        <p>
          To make your website more dynamic, let’s serve an HTML file instead of
          just a text message.
        </p>
        <h3>
          Step 1: Create an <code>index.html</code> File
        </h3>
        <p>
          In your <code>my-website</code> directory, create a file called{" "}
          <code>index.html</code> with the following content:
        </p>
        <CodeHighlight
          content={`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Local Website</title>
</head>
<body>
    <h1>Welcome to My Local Website!</h1>
    <p>This website is running on Node.js.</p>
</body>
</html>
`}
          sandboxOption={false}
        />
        <h3>
          Step 2: Update <code>server.js</code> to Serve <code>index.html</code>
        </h3>
        <p>
          Replace the content of <code>server.js</code> with the following code
          (a lot of the code in the <code>http.createServer</code> function will
          look pretty crazy if you're new to Node so just ignore it for now.
          Basically what it's doing is creating a server and taking in a
          callback function that is called whenever a request is made. If it's
          successful, return the contents of index.html else return an error):
        </p>
        <CodeHighlight
          content={`
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading index.html');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });
    } else {
        res.statusCode = 404;
        res.end('Page not found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(\`Server running at http://localhost:$\{PORT}/\`);
});
`}
          sandboxOption={false}
        />
        <h3>Step 3: Restart the Server</h3>
        <p>After saving your changes, restart the server:</p>
        <CodeHighlight
          content={`
node server.js
`}
          sandboxOption={false}
        />
        <p>
          Go to <code>http://localhost:3000/</code> in your browser, and you
          should now see your <strong>index.html</strong> page.
        </p>
        <hr />
        <h2>5. Installing and Using Express.js</h2>
        <p>
          <strong>Express.js</strong> is a popular framework that simplifies the
          process of building servers and APIs with Node.js.
        </p>
        <h3>Step 1: Install Express.js</h3>
        <p>Run the following command in your project directory:</p>
        <CodeHighlight
          content={`
npm install express
`}
          sandboxOption={false}
        />
        <h3>Step 2: Create a Simple Express Server</h3>
        <p>
          Replace the content of <code>server.js</code> with this (notice how
          the code looks a lot less crazy than what we had before yet it still
          does the same thing):
        </p>
        <CodeHighlight
          content={`
const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(\`Server running at http://localhost:$\{PORT}/\`);
});
`}
          sandboxOption={false}
        />
        <h3>Step 3: Start the Server</h3>
        <p>Run the following command:</p>
        <CodeHighlight
          content={`
node server.js
`}
          sandboxOption={false}
        />
        <p>
          Visit <code>http://localhost:3000/</code>, and you should see your{" "}
          <strong>index.html</strong> page served through an Express.js server.
        </p>
        <hr />
        <h2>6. Final Project: Setting Up a Simple Website Locally</h2>
        <h3>Step 1: Directory Structure</h3>
        <p>Your project folder should look like this:</p>
        <CodeHighlight
          content={`
my-website/
│   server.js
│   package.json
└───index.html
`}
          sandboxOption={false}
        />
        <h3>Step 2: Running the Project</h3>
        <ul>
          <li>
            Run <code>node server.js</code> from the terminal.
          </li>
          <li>
            Visit <code>http://localhost:3000/</code> in your browser.
          </li>
          <li>
            Explore the <strong>index.html</strong> file to modify the content
            and see your changes live.
          </li>
        </ul>
        <hr />
        <h2>Summary</h2>
        <p>Congratulations! You’ve learned how to:</p>
        <ul>
          <li>Install Node.js and npm.</li>
          <li>Set up a basic Node.js project.</li>
          <li>Create a simple HTTP server.</li>
          <li>Serve HTML files using Node.js.</li>
          <li>Use Express.js for a more streamlined experience.</li>
        </ul>
        <p>
          With these skills, you can now create and test simple websites locally
          before deploying them to a live server. From here, you can explore
          building RESTful APIs, adding more features with Express, or even
          working with databases.
        </p>
      </div>
    </ModuleWrapper>
  );
}
