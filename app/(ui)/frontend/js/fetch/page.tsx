"use client";

import CodeEditor from "@/app/components/CodeEditor";
import CodeHighlight from "@/app/components/CodeHighlight";
import NavigationLinks from "@/app/components/NavigationLinks";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Fetch() {
  const [showEditor, setShowEditor] = useState(false);
  const [html_arg, set_html_arg] = useState("");
  const [css_arg, set_css_arg] = useState("");
  const [js_arg, set_js_arg] = useState("");

  return (
    <div className="flex flex-col sm:flex-row justify-center h-full">
      <div
        className={
          showEditor
            ? `flex flex-col max-w-[75ch] gap-4 w-[45%] mx-6 lesson`
            : `flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson`
        }
      >
        <h1>
          <code>fetch</code>
        </h1>
        <p>
          The <code>fetch</code> API in JavaScript is a powerful and modern way
          to make HTTP requests to servers. It&apos;s used to get data from a
          server, send data, or interact with APIs, making it an essential part
          of working with web services. This tutorial will cover the basics of
          using <code>fetch</code>, handling responses, and managing errors.
        </p>
        <hr />
        <h2>
          What is the <code>fetch</code> API?
        </h2>
        <p>
          The <code>fetch</code> API is a built-in JavaScript function for
          making network requests. It&apos;s a modern alternative to the older{" "}
          <code>XMLHttpRequest</code> method, offering a simpler and more
          powerful way to work with HTTP requests. <code>fetch</code> uses
          promises, making it easier to work with asynchronous code.
        </p>
        <h2>
          Basic Syntax of <code>fetch</code>
        </h2>
        <p>
          The basic syntax of the <code>fetch</code> API is:
        </p>
        <CodeHighlight
          content={`
fetch(url, options)
    .then(response => {
        // Handle the response
    })
    .catch(error => {
        // Handle any errors
    });
`}
          sandboxOption={false}
        />
        <ul>
          <li>
            <strong>
              <code>url</code>
            </strong>
            : The endpoint you want to request (string).
          </li>
          <li>
            <strong>
              <code>options</code>
            </strong>
            : Optional object that can include settings like HTTP method (
            <code>GET</code>, <code>POST</code>, etc.), headers, body, etc.
          </li>
        </ul>
        <h2>Making a GET Request</h2>
        <p>
          A <code>GET</code> request retrieves data from a server without
          altering it. Here&apos;s a simple example:
        </p>
        <CodeHighlight
          content={`
fetch('https://api.example.com/data')
    .then(response => response.json()) // Parse the JSON from the response
    .then(data => {
        console.log(data); // Log the data to the console
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
`}
          sandboxOption={false}
        />
        <p>In this example:</p>
        <ul>
          <li>
            <code>response.json()</code> parses the response into a JavaScript
            object.
          </li>
          <li>
            The <code>catch</code> block handles any network errors that occur
            during the request.
          </li>
        </ul>
        <h2>Handling Responses</h2>
        <p>
          The <code>fetch</code> API doesn&apos;t automatically reject a promise
          if the server returns an HTTP error (e.g., 404 or 500). Therefore, you
          should check the <code>response.ok</code> property to verify if the
          request was successful:
        </p>
        <CodeHighlight
          content={`
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error(\`HTTP error! Status: $\{response.status}\`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
`}
          sandboxOption={false}
        />
        <ul>
          <li>
            <strong>
              <code>response.ok</code>
            </strong>
            : A boolean that&apos;s <code>true</code> if the HTTP status code is
            in the range 200-299.
          </li>
        </ul>
        <h2>Making a POST Request</h2>
        <p>
          A <code>POST</code> request is used to send data to a server,
          typically to create or update a resource. When making a{" "}
          <code>POST</code> request with <code>fetch</code>, you&apos;ll need to
          specify the method and include the body data:
        </p>
        <CodeHighlight
          content={`
fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: 'John Doe',
        age: 30
    })
})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
`}
          sandboxOption={false}
        />
        <ul>
          <li>
            <strong>
              <code>method</code>
            </strong>
            : Specifies the HTTP method (<code>GET</code>, <code>POST</code>,
            etc.).
          </li>
          <li>
            <strong>
              <code>headers</code>
            </strong>
            : Used to set the <code>Content-Type</code> to{" "}
            <code>application/json</code> so the server knows you&apos;re
            sending JSON data.
          </li>
          <li>
            <strong>
              <code>body</code>
            </strong>
            : Contains the data you&apos;re sending, typically serialized with{" "}
            <code>JSON.stringify()</code>.
          </li>
        </ul>
        <h2>Handling Errors</h2>
        <p>
          It&apos;s important to handle errors that can occur during a{" "}
          <code>fetch</code> request. These can include network errors, invalid
          JSON, or server errors. Here&apos;s an example:
        </p>
        <CodeHighlight
          content={`
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error(\`HTTP error! Status: $\{response.status}\`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Data received:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error.message);
    });
`}
          sandboxOption={false}
        />
        <h2>Practical Example: Fetching Data from an API</h2>
        <p>
          Let&apos;s create a practical example where we fetch data from an open
          API and display it in a webpage.
        </p>
        <h3>
          Example: Fetching and Displaying Data (must have internet connection
          for sample to work in Sandbox)
        </h3>
        <CodeHighlight
          content={`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch Example</title>
</head>
<body>
    <h1>User Data</h1>
    <div id="user-data"></div>

    <script>
        const userDataDiv = document.getElementById('user-data');

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(users => {
                users.forEach(user => {
                    const userElement = document.createElement('p');
                    userElement.textContent = \`Name: $\{user.name}, Email: $\{user.email}\`;
                    userDataDiv.appendChild(userElement);
                });
            })
            .catch(error => {
                userDataDiv.textContent = \`Error: $\{error.message}\`;
            });
    </script>
</body>
</html>
`}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          set_html_arg={set_html_arg}
          set_css_arg={set_css_arg}
          set_js_arg={set_js_arg}
          args={{
            html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch Example</title>
</head>
<body>
    <h1>User Data</h1>
    <div id="user-data"></div>

    <script>
        const userDataDiv = document.getElementById('user-data');

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(users => {
                users.forEach(user => {
                    const userElement = document.createElement('p');
                    userElement.textContent = \`Name: $\{user.name}, Email: $\{user.email}\`;
                    userDataDiv.appendChild(userElement);
                });
            })
            .catch(error => {
                userDataDiv.textContent = \`Error: $\{error.message}\`;
            });
    </script>
</body>
</html>
`,
            css: ``,
            js: ``,
          }}
        />
        <ul>
          <li>
            This HTML page makes a <code>GET</code> request to{" "}
            <code>https://jsonplaceholder.typicode.com/users</code>, a free mock
            API.
          </li>
          <li>
            It parses the JSON response, iterates over the user data, and
            displays each user&#39;s name and email in a <code>&lt;p&gt;</code>{" "}
            element.
          </li>
          <li>If an error occurs, it displays an error message instead.</li>
        </ul>
        <h2>Conclusion</h2>
        <p>
          The <code>fetch</code> API is a versatile and powerful tool for
          working with HTTP requests in JavaScript. It simplifies the process of
          retrieving or sending data, making it easier to integrate with APIs
          and handle responses. Understanding how to use <code>fetch</code>{" "}
          allows you to build dynamic web applications that can communicate with
          servers, load data asynchronously, and update the UI seamlessly.
        </p>
      </div>
      <AnimatePresence>
        {showEditor && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            exit={{
              width: 0,
              transition: { duration: 0.5 },
            }}
          >
            <CodeEditor html_arg={html_arg} css_arg={css_arg} js_arg={js_arg} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
