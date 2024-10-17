"use client";

import CodeHighlight from "@/app/components/CodeHighlight";
import NavigationLinks from "@/app/components/NavigationLinks";

export default function JS() {
  return (
    <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
      <h1>Introduction to JavaScript</h1>
      <p>
        JavaScript is one of the core programming languages of the web, enabling
        interactivity, dynamic content, and complex functionalities on websites.
        Unlike HTML and CSS, which focus on the structure and styling of web
        pages, JavaScript allows you to manipulate content, respond to user
        events, and connect to servers. This course will guide you through the
        basics of JavaScript, its syntax, key concepts, and some practical
        examples to get you started.
      </p>

      <hr />
      <h2>1. What is JavaScript?</h2>
      <p>
        JavaScript is a <strong>programming language</strong> used primarily for
        creating dynamic and interactive content on websites. It is one of the
        core technologies of the web, alongside <strong>HTML</strong> (for
        structure) and <strong>CSS</strong> (for styling). JavaScript is
        versatile and can be used both on the <strong>client-side</strong> (in
        the browser) and on the <strong>server-side</strong> (using frameworks
        like Node.js).
      </p>
      <p>JavaScript allows you to:</p>
      <ul>
        <li>Create interactive forms and animations.</li>
        <li>Respond to user inputs, such as clicks or key presses.</li>
        <li>Communicate with remote servers for data (e.g., using APIs).</li>
        <li>Build entire applications for both the web and mobile devices.</li>
      </ul>
      <p>
        In terms of a car, you can think of HTML as the frame, CSS as the
        decorations and JavaScript as the engine that runs the whole thing. A
        majority of what you will be doing as an engineer is on the JavaScript
        part of things.
      </p>
      <hr />
      <h2>2. Setting Up Your Development Environment</h2>
      <p>
        To start coding in JavaScript, you need a text editor and a web browser.
        As this is an introductory module, we can get away with doing everything
        in the browser console. Go to the{" "}
        <a href="/foundations/devtools">Developer Tools</a> page to see how to
        access the developer console in your browser.
      </p>

      <p>
        <strong>Setting Up</strong>:
      </p>
      <ol>
        <li>
          Open a new file in your text editor, and save it as{" "}
          <code>index.html</code>.
        </li>
        <li>
          Inside <code>index.html</code>, you can include a{" "}
          <code>&lt;script&gt;</code> tag to write JavaScript:
          <CodeHighlight
            content={`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Intro</title>
</head>
<body>
    <h1>Hello, JavaScript!</h1>
    <script>
        console.log('Hello, World!');
    </script>
</body>
</html>
`}
            sandboxOption={false}
          />
        </li>
        <li>
          Open <code>index.html</code> in your browser and press{" "}
          <code>F12</code> (or right-click and choose &quot;Inspect&quot;) to
          open the Developer Tools. Go to the <strong>Console</strong> tab, and
          you should see &quot;Hello, World!&quot; printed.
        </li>
      </ol>
      <hr />
      <h2>3. JavaScript Basics</h2>
      <h3>Variables and Data Types</h3>
      <p>
        Variables store data that you can use and manipulate in your program.
        JavaScript uses the keywords <code>let</code>, <code>const</code>, and{" "}
        <code>var</code> to declare variables.
      </p>
      <ul>
        <li>
          <code>let</code> and <code>const</code> are the modern ways to declare
          variables.
        </li>
        <li>
          <code>var</code> is older and has some differences in behavior.
        </li>
      </ul>
      <p>Example:</p>
      <CodeHighlight
        content={`
let name = 'Alice';
const age = 30;
var isStudent = true;
`}
        sandboxOption={false}
      />
      <p>
        <strong>Data Types</strong>:
      </p>
      <ul>
        <li>
          <strong>String</strong>: Text data (<code>&#39;Hello&#39;</code>,{" "}
          <code>&quot;JavaScript&quot;</code>).
        </li>
        <li>
          <strong>Number</strong>: Numeric values (<code>10</code>,{" "}
          <code>3.14</code>).
        </li>
        <li>
          <strong>Boolean</strong>: <code>true</code> or <code>false</code>.
        </li>
        <li>
          <strong>Array</strong>: Collection of values (<code>[1, 2, 3]</code>).
        </li>
        <li>
          <strong>Object</strong>: Collection of key-value pairs (
          <code>&#10100; name: &#39;Alice&#39;, age: 30 &#10101;</code>).
        </li>
      </ul>
      <h3>Operators and Expressions</h3>
      <p>
        JavaScript supports arithmetic operators (<code>+</code>, <code>-</code>
        , <code>*</code>, <code>/</code>), comparison operators (<code>==</code>
        , <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>), and logical
        operators (<code>&amp;&amp;</code>, <code>||</code>, <code>!</code>).
      </p>
      <p>Example:</p>
      <CodeHighlight
        content={`
let sum = 5 + 3; // 8
let isAdult = age > 18; // true
`}
        sandboxOption={false}
      />
      <h3>Conditional Statements</h3>
      <p>
        Control the flow of your program using <code>if</code> statements.
      </p>
      <p>Example:</p>
      <CodeHighlight
        content={`
if (age >= 18) {
    console.log('You are an adult.');
} else {
    console.log('You are a minor.');
}
`}
        sandboxOption={false}
      />
      <h3>Loops</h3>
      <p>
        Loops allow you to execute code multiple times. The most common types
        are <code>for</code> and <code>while</code>.
      </p>
      <p>Example:</p>
      <CodeHighlight
        content={`
for (let i = 0; i < 5; i++) {
    console.log(i); // Prints 0 to 4
}
`}
        sandboxOption={false}
      />
      <hr />
      <h2>4. Functions and Scope</h2>
      <p>Functions allow you to reuse blocks of code.</p>
      <p>Example:</p>
      <CodeHighlight
        content={`
function greet(name) {
    return \`Hello, $\{name\}!\`;
}
console.log(greet('Alice')); // Output: Hello, Alice!
`}
        sandboxOption={false}
      />
      <p>
        <strong>Scope</strong> refers to the accessibility of variables within
        your code. Variables declared inside a function are not accessible
        outside of it.
      </p>
      <hr />
      <h2>5. Working with Objects and Arrays</h2>
      <p>
        <strong>Objects</strong> are used to store related data and
        functionality together.
      </p>
      <p>Example:</p>
      <CodeHighlight
        content={`
let person = {
    name: 'Alice',
    age: 30,
    greet: function() {
        console.log(\`Hello, my name is $\{this.name}.\`);
    }
};
person.greet(); // Output: Hello, my name is Alice.
`}
        sandboxOption={false}
      />
      <p>
        <strong>Arrays</strong> hold lists of data.
      </p>
      <p>Example:</p>
      <CodeHighlight
        content={`
let colors = ['red', 'green', 'blue'];
console.log(colors[0]); // Output: red
`}
        sandboxOption={false}
      />
      <hr />
      <h2>6. JavaScript in the Browser</h2>
      <p>
        JavaScript can interact with the HTML of a web page using the{" "}
        <strong>DOM (Document Object Model)</strong>.
      </p>
      <p>Example:</p>
      <CodeHighlight
        content={`
document.querySelector('h1').textContent = 'JavaScript is Awesome!';
`}
        sandboxOption={false}
      />
      <p>
        <strong>Events</strong> allow you to respond to user actions like clicks
        and key presses.
      </p>
      <p>Example:</p>
      <CodeHighlight
        content={`
document.querySelector('button').addEventListener('click', function() {
    alert('Button clicked!');
});
`}
        sandboxOption={false}
      />
      <hr />
      <h2>7. Introduction to Asynchronous JavaScript</h2>
      <p>
        JavaScript can handle tasks like loading data from a server without
        blocking the rest of the code. This will be covered heavily in a future
        module as this is one of the most important yet hardest concepts to
        grasp for new developers.
      </p>
      <p>
        <strong>Callbacks</strong> and <strong>Promises</strong> are used to
        handle asynchronous operations.
      </p>
      <p>
        Example of a <strong>Promise</strong>:
      </p>
      <CodeHighlight
        content={`
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
`}
        sandboxOption={false}
      />
      <hr />
      <h2>Summary</h2>
      <p>
        This introductory course gives you a foundation in JavaScript, covering
        variables, functions, the DOM, and asynchronous programming. From here,
        you can explore advanced topics like working with APIs, using JavaScript
        frameworks, and building full-fledged web applications.
      </p>
      <NavigationLinks
        prevLesson={{
          slug: "/foundations/css",
          title: "Introduction to CSS",
        }}
        nextLesson={{
          slug: "/foundations/exercises",
          title: "Exercises",
        }}
      />
    </div>
  );
}
