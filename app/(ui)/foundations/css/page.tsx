"use client";

import CodeEditor from "@/app/components/CodeEditor";
import CodeHighlight from "@/app/components/CodeHighlight";
import ModuleWrapperClient from "@/app/components/ModuleWrapperClient";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function CSS() {
  const [showEditor, setShowEditor] = useState(false);
  const [html_arg, set_html_arg] = useState("");
  const [css_arg, set_css_arg] = useState("");
  const [js_arg, set_js_arg] = useState("");

  return (
    <ModuleWrapperClient>
      <div className="flex flex-col sm:flex-row justify-center h-full">
        <div
          className={
            showEditor
              ? `flex flex-col max-w-[75ch] gap-4 w-[45%] mx-6 lesson`
              : `flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson`
          }
        >
          <h1>CSS</h1>
          <p>
            CSS (Cascading Style Sheets) is used to control the appearance of
            HTML elements on a web page. It allows you to add colors, fonts,
            layouts, and more, making your website look attractive and
            professional. Let’s go through a tutorial that covers the basics.
          </p>
          <h2>
            1. <strong>What is CSS?</strong>
          </h2>
          <p>
            CSS is used to style HTML content. A typical CSS rule consists of a
            selector and a set of declarations.
          </p>
          <h3>Example:</h3>
          <CodeHighlight
            content={`
h1 {
    color: blue;
    font-size: 36px;
}
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: "<h1>This is a header</h1>",
              css: `
h1 {
    color: blue;
    font-size: 36px;
}
            `,
              js: "",
            }}
          />
          <ul>
            <li>
              <code>h1</code>: The <em>selector</em>, which targets all{" "}
              <code>&lt;h1&gt;</code> elements.
            </li>
            <li>
              <code>&#10100; color: blue; font-size: 36px; &#10101;</code>: The{" "}
              <em>declaration block</em>, containing properties and values.
              <ul>
                <li>
                  <code>color</code>: The property.
                </li>
                <li>
                  <code>blue</code>: The value.
                </li>
              </ul>
            </li>
          </ul>
          <h2>
            2. <strong>Ways to Include CSS</strong>
          </h2>
          <p>There are three main ways to include CSS in an HTML document:</p>
          <h3>
            a. <strong>Inline CSS</strong>
          </h3>
          <p>
            This method uses the <code>style</code> attribute directly inside an
            HTML tag. It&apos;s not ideal for maintaining larger websites but is
            simple for quick changes.{" "}
          </p>
          <p>
            For best practices, it's advised not to do this but inline styles
            are used from time to time when dealing specifity issues which will
            be covered in depth in another module.
          </p>
          <h3>Example:</h3>
          <CodeHighlight
            content={`
<h1 style="color: red;">This is a red heading</h1>
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `<h1 style="color: red;">This is a red heading</h1>`,
              css: "",
              js: "",
            }}
          />
          <h3>
            b. <strong>Internal CSS</strong>
          </h3>
          <p>
            Internal CSS is written within a <code>&lt;style&gt;</code> tag
            inside the <code>&lt;head&gt;</code> section of an HTML document.
          </p>
          <h3>Example:</h3>
          <CodeHighlight
            content={`
<head>
    <style>
        p {
            color: green;
        }
    </style>
</head>
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `
<head>
  <style>
      p {
          color: green;
      }
  </style>
  <p>This text is green</p>
</head>
  `,
              css: "",
              js: "",
            }}
          />
          <h3>
            c. <strong>External CSS</strong>
          </h3>
          <p>
            External CSS involves creating a separate <code>.css</code> file and
            linking it to the HTML document using a <code>&lt;link&gt;</code>{" "}
            tag. This method is preferred for larger websites.
          </p>
          <h3>Example:</h3>
          <ol>
            <li>
              <strong>HTML file:</strong>
            </li>
          </ol>
          <CodeHighlight
            content={`
<head>
    <link rel="stylesheet" href="styles.css">
</head>
`}
            showEditor={showEditor}
            setShowEditor={() => {}}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: "",
              css: "",
              js: "",
            }}
          />
          <ol>
            <li>
              <strong>styles.css file:</strong>
            </li>
          </ol>
          <CodeHighlight
            content={`
body {
    background-color: lightblue;
}
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: "",
              css: `
body {
    background-color: lightblue;
}
  `,
              js: "",
            }}
          />
          <h2>
            3. <strong>CSS Selectors</strong>
          </h2>
          <p>
            CSS selectors target HTML elements to apply styles. Here are some
            common selectors:
          </p>
          <h3>
            a. <strong>Type Selector</strong>
          </h3>
          <p>Selects all elements of a given type.</p>
          <h3>Example:</h3>
          <CodeHighlight
            content={`
h1 {
    color: blue;
}
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: "<h1>Blue Header</h1>",
              css: `
h1 {
color: blue;
font-size: 36px;
}
  `,
              js: "",
            }}
          />
          <p>
            This will style all <code>&lt;h1&gt;</code> elements with blue text.
          </p>
          <h3>
            b. <strong>Class Selector</strong>
          </h3>
          <p>
            Selects elements with a specific class attribute. Class selectors
            use a period (<code>.</code>).
          </p>
          <h3>Example:</h3>
          <CodeHighlight
            content={`
.red-text {
    color: red;
}
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `
<p>This text is red.</p>
`,
              css: `
.red-text {
    color: red;
}  
`,
              js: "",
            }}
          />
          <p>Apply this class in HTML:</p>
          <CodeHighlight
            content={`
<p class="red-text">This text is red.</p>
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `
<p class="red-text">This text is red.</p>
`,
              css: `
.red-text {
    color: red;
}
`,
              js: ``,
            }}
          />
          <h3>
            c. <strong>ID Selector</strong>
          </h3>
          <p>
            Selects a single element with a specific ID attribute. ID selectors
            use a hash (<code>#</code>).
          </p>
          <h3>Example:</h3>
          <CodeHighlight
            content={`
#main-title {
    font-size: 48px;
}
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `<h1>This is the main title</h1>`,
              css: `
#main-title {
    font-size: 48px;
}
`,
              js: ``,
            }}
          />
          <p>Apply this ID in HTML</p>
          <CodeHighlight
            content={`
<h1 id="main-title">This is the main title</h1>
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `<h1 id="main-title">This is the main title</h1>`,
              css: `
#main-title {
    font-size: 48px;
}
`,
              js: ``,
            }}
          />
          <h3>
            d. <strong>Universal Selector</strong>
          </h3>
          <p>Selects all elements.</p>
          <h3>Example:</h3>
          <CodeHighlight
            content={`
* {
    box-sizing: border-box;
    margin: 0;
}
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: ``,
              css: `
* {
    box-sizing: border-box;
    margin: 0;
}
`,
              js: ``,
            }}
          />
          <p>
            This will remove default margins and padding from all elements and
            will set the <code>box-sizing</code> attribute to{" "}
            <code>border-box</code> which will be explained in a later module on
            the box model.
          </p>
          <p>
            The example is also part of what is called a CSS reset as browsers
            tend to add their own styling whether you want it or not so by
            resetting the CSS, you get to start on a clean slate. There are a
            couple of CSS reset examples you can search for online.
          </p>
          <h3>
            e. <strong>Attribute Selector</strong>
          </h3>
          <p>Selects elements based on their attributes.</p>
          <h3>Example:</h3>
          <CodeHighlight
            content={`
input[type="text"] {
    border: 2px solid blue;
}
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `<input type="text" placeholder="Sample input box" />`,
              css: `
input[type="text"] {
    border: 2px solid blue;
}
`,
              js: ``,
            }}
          />
          <p>
            This targets <code>&lt;input&gt;</code> elements with{" "}
            <code>type=&quot;text&quot;</code>.
          </p>
          <h2 id="4-css-properties-">
            4. <strong>CSS Properties</strong>
          </h2>
          <p>
            CSS properties define what aspect of an element you want to style.
          </p>
          <h3 id="a-text-and-font-properties-">
            a. <strong>Text and Font Properties</strong>
          </h3>
          <ul>
            <li>
              <code>color</code>: Changes the text color.
            </li>
            <li>
              <code>font-size</code>: Sets the size of the text.
            </li>
            <li>
              <code>font-family</code>: Sets the font style (e.g., Arial,
              Verdana).
            </li>
            <li>
              <code>text-align</code>: Aligns text (e.g., <code>left</code>,{" "}
              <code>center</code>, <code>right</code>).
            </li>
            <li>
              <code>background-color</code>: Sets the background color.
            </li>
            <li>
              <code>background-image</code>: Sets a background image.
            </li>
            <li>
              <code>background-size</code>: Defines the size of the background
              image.
            </li>
          </ul>
          <h3>Example:</h3>
          <CodeHighlight
            content={`
p {
    color: darkgray;
    font-size: 18px;
    font-family: Arial, sans-serif;
    text-align: center;
}
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `<p>Hi, I'm a styled paragraph!</p>`,
              css: `
p {
color: darkgray;
font-size: 18px;
font-family: Arial, sans-serif;
text-align: center;
}
`,
              js: ``,
            }}
          />
          <h3>
            b. <strong>Background Properties</strong>
          </h3>
          <ul>
            <li>
              <code>background-color</code>: Sets the background color.
            </li>
            <li>
              <code>background-image</code>: Sets a background image.
            </li>
            <li>
              <code>background-size</code>: Defines the size of the background
              image.
            </li>
          </ul>
          <h3>Example:</h3>
          <CodeHighlight
            content={`
body {
    background-color: pink;
}
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: ``,
              css: `
body {
    background-color: pink;
}
`,
              js: ``,
            }}
          />
          <h3>
            c. <strong>Box Model Properties</strong>
          </h3>
          <p>
            The box model is a fundamental concept in CSS that includes margins,
            borders, padding, and content. This will be covered in more depth in
            a future module.
          </p>
          <ul>
            <li>
              <code>margin</code>: Space outside the element’s border.
            </li>
            <li>
              <code>padding</code>: Space inside the element’s border.
            </li>
            <li>
              <code>border</code>: A line around the element.
            </li>
          </ul>
          <h3>Example:</h3>
          <CodeHighlight
            content={`
div {
    padding: 10px;
    margin: 15px;
    border: 2px solid black;
}
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `<div>div example with margin, padding and a border</div>`,
              css: `
div {
    padding: 10px;
    margin: 15px;
    border: 2px solid black;
}
`,
              js: ``,
            }}
          />
          <h2>
            5. <strong>CSS Layouts</strong>
          </h2>
          <p>
            CSS helps in creating responsive layouts. Two common layout
            techniques are <code>flexbox</code> and <code>grid</code>.
          </p>
          <h3>
            a. <strong>Flexbox</strong>
          </h3>
          <p>
            Flexbox is used for designing flexible layout structures. This will
            be covered in more depth in a future module .
          </p>
          <h3>Example:</h3>
          <CodeHighlight
            content={`
.container {
    display: flex;
    justify-content: space-between;
}
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `
<div class="container">
  <p>One</p>
  <p>Two</p>
</div>
            `,
              css: `
.container {
    display: flex;
    justify-content: space-between;
}
`,
              js: ``,
            }}
          />
          <ul>
            <li>
              <code>display: flex</code>: Turns an element into a flex
              container.
            </li>
            <li>
              <code>justify-content</code>: Distributes space between items (
              <code>center</code>, <code>space-between</code>,{" "}
              <code>space-around</code>).
            </li>
          </ul>
          <h3>
            b. <strong>CSS Grid</strong>
          </h3>
          <p>
            CSS Grid is a powerful layout system for creating complex grid
            structures. This will be covered in more depth in a future module.
          </p>
          <h3>Example:</h3>
          <CodeHighlight
            content={`
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `
<div class="grid-container">
  <div>Cell 1</div>
  <div>Cell 2</div>
  <div>Cell 3</div>
  <div>Cell 4</div>
  <div>Cell 5</div>
  <div>Cell 6</div>
</div>
            `,
              css: `
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
`,
              js: ``,
            }}
          />
          <ul>
            <li>
              <code>grid-template-columns</code>: Defines the number of columns.
            </li>
            <li>
              <code>gap</code>: Sets the spacing between grid items.
            </li>
          </ul>
          <h2>
            6. <strong>Styling Links, Buttons, and Images</strong>
          </h2>
          <h3>
            a. <strong>Styling Links</strong>
          </h3>
          <p>
            Links can have different styles for different states using
            pseudo-classes like <code>:hover</code>, <code>:visited</code>,{" "}
            <code>:active</code>.
          </p>
          <h3>Example:</h3>
          <CodeHighlight
            content={`
a {
    text-decoration: none;
    color: blue;
}

a:hover {
    color: red;
}
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `<a href="#">Hover over me</a>`,
              css: `
a {
    text-decoration: none;
    color: blue;
}

a:hover {
    color: red;
}
`,
              js: ``,
            }}
          />
          <h3>
            b. <strong>Styling Buttons</strong>
          </h3>
          <p>Buttons can be styled using the same CSS properties.</p>
          <h3>Example:</h3>
          <CodeHighlight
            content={`
button {
    background-color: blue;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: darkblue;
}
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `<button>Hover over me</button>`,
              css: `
button {
    background-color: blue;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: darkblue;
}
`,
              js: ``,
            }}
          />
          <h3>
            c. <strong>Styling Images</strong>
          </h3>
          <p>You can use CSS to control the size and border of images.</p>
          <h3>Example:</h3>
          <CodeHighlight
            content={`
img {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
}
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `<img src="favicon.ico" />`,
              css: `
img {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
}
`,
              js: ``,
            }}
          />
          <h2>
            7. <strong>Responsive Design with Media Queries</strong>
          </h2>
          <p>
            Media queries allow you to make your website responsive, adjusting
            styles for different screen sizes.
          </p>
          <h3>
            Example (to see the example work in the sandbox, shrink the size of
            the window until it's less than 600px wide):
          </h3>
          <CodeHighlight
            content={`
@media (max-width: 600px) {
    body {
        background-color: lightcoral;
    }
}
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: ``,
              css: `
@media (max-width: 600px) {
    body {
        background-color: lightcoral;
    }
}
`,
              js: ``,
            }}
          />
          <p>
            This example changes the background color to light coral on screens
            that are 600px wide or smaller.
          </p>
          <h2>
            8. <strong>Complete Example</strong>
          </h2>
          <p>
            Here’s a simple HTML and CSS example that ties everything together:
          </p>
          <h3>HTML:</h3>
          <CodeHighlight
            content={`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Stylish Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    <section class="content">
        <p class="intro">This is a sample page using basic CSS.</p>
        <button>Click Me!</button>
    </section>
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
    <title>My Stylish Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    <section class="content">
        <p class="intro">This is a sample page using basic CSS.</p>
        <button>Click Me!</button>
    </section>
</body>
</html>
`,
              css: ``,
              js: ``,
            }}
          />
          <h3>styles.css:</h3>
          <CodeHighlight
            content={`
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    padding: 20px;
}

header {
    background-color: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
}

.content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
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
    <title>My Stylish Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    <section class="content">
        <p class="intro">This is a sample page using basic CSS.</p>
        <button>Click Me!</button>
    </section>
</body>
</html>
`,
              css: `
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    padding: 20px;
}

header {
    background-color: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
}

.content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
`,
              js: ``,
            }}
          />
          <p>
            This creates a simple, styled page with a header, a paragraph, and a
            button that changes color when hovered over.
          </p>
          <hr />
          <h2>Key Points Recap:</h2>
          <ul>
            <li>
              <strong>CSS selectors</strong> target HTML elements.
            </li>
            <li>
              <strong>Properties</strong> define what aspect you want to style.
            </li>
            <li>
              Use <strong>media queries</strong> for responsive design.
            </li>
            <li>
              <strong>Flexbox</strong> and <strong>grid</strong> help create
              layouts.
            </li>
          </ul>
          <p>
            Now you’re ready to start creating beautiful web pages using CSS!
            Feel free to experiment with different properties and layouts.
          </p>
          {/* <NavigationLinks
          prevLesson={{
            slug: "/foundations/html",
            title: "Introduction to HTML",
          }}
          nextLesson={{
            slug: "/foundations/js",
            title: "Introduction to JavaScript",
          }}
        /> */}
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
              <CodeEditor
                html_arg={html_arg}
                css_arg={css_arg}
                js_arg={js_arg}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ModuleWrapperClient>
  );
}
