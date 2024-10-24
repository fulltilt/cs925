"use client";

import CodeEditor from "@/app/components/CodeEditor";
import CodeHighlight from "@/app/components/CodeHighlight";
import NavigationLinks from "@/app/components/NavigationLinks";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function DOM() {
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
        <h1>The Document Object Model (DOM)</h1>
        <p>
          JavaScript DOM manipulation allows you to dynamically change the
          content, structure, and styling of web pages. The{" "}
          <strong>Document Object Model (DOM)</strong> represents the structure
          of an HTML document as a tree of nodes, and JavaScript gives you the
          power to interact with and modify these nodes. In this tutorial, we’ll
          explore how to use JavaScript to manipulate the DOM, covering methods
          for selecting, adding, modifying, and removing elements.
        </p>
        <hr />
        <h2>What is the DOM?</h2>
        <p>
          The <strong>Document Object Model (DOM)</strong> is a programming
          interface for HTML and XML documents. It represents the page so that
          programs can change the document structure, style, and content. When a
          web page is loaded, the browser creates a DOM for it, forming a tree
          structure of nodes where each element, attribute, and piece of text is
          a node.
        </p>
        <p>
          JavaScript allows you to interact with this structure, making your
          website dynamic. You can:
        </p>
        <ul>
          <li>Access and modify content.</li>
          <li>Add or remove elements.</li>
          <li>Change the styling of elements.</li>
        </ul>
        <hr />
        <h2>Selecting Elements</h2>
        <p>
          To manipulate the DOM, you first need to <strong>select</strong>{" "}
          elements. JavaScript provides several methods for this:
        </p>
        <h3>
          <code>getElementById()</code>
        </h3>
        <p>
          Selects an element by its <strong>ID</strong>.
        </p>
        <CodeHighlight
          content={`
const element = document.getElementById('myElement');
`}
          sandboxOption={false}
        />
        <h3>
          <code>querySelector()</code> and <code>querySelectorAll()</code>
        </h3>
        <p>
          Selects the <strong>first</strong> element that matches a CSS
          selector:
        </p>
        <CodeHighlight
          content={`
const elements = document.querySelectorAll('div'); // Selects all <div> elements
`}
          sandboxOption={false}
        />
        <p>
          Selects <strong>all</strong> elements that match a CSS selector:
        </p>

        <h3>
          <code>getElementsByClassName()</code> and{" "}
          <code>getElementsByTagName()</code>
        </h3>
        <p>
          Selects all elements with a specific <strong>class</strong>:
        </p>
        <CodeHighlight
          content={`
const elements = document.getElementsByClassName('myClass');
`}
          sandboxOption={false}
        />
        <p>
          Selects all elements with a specific <strong>tag name</strong>:
        </p>
        <CodeHighlight
          content={`
const divs = document.getElementsByTagName('div');
`}
          sandboxOption={false}
        />
        <hr />
        <h2>3. Modifying Elements</h2>
        <p>
          Once you have selected elements, you can modify their content,
          attributes, and styles.
        </p>
        <h3>Changing Text Content</h3>
        <p>
          Use the <code>textContent</code> property to change the text inside an
          element:
        </p>
        <CodeHighlight
          content={`
const element = document.getElementById('myElement');
element.textContent = 'New text content';
`}
          sandboxOption={false}
        />
        <h3>Modifying HTML Content</h3>
        <p>
          Use the <code>innerHTML</code> property to change the HTML inside an
          element:
        </p>
        <CodeHighlight
          content={`
element.innerHTML = '<strong>Bold text</strong>';
`}
          sandboxOption={false}
        />
        <h3>Changing Element Attributes</h3>
        <p>
          Use the <code>setAttribute()</code> method to change attributes like{" "}
          <code>src</code>, <code>href</code>, or <code>class</code>:
        </p>
        <CodeHighlight
          content={`
element.setAttribute('src', 'image.png');
`}
          sandboxOption={false}
        />
        <p>Or directly:</p>
        <CodeHighlight
          content={`
element.src = 'image.png';
`}
          sandboxOption={false}
        />
        <h3>Updating Styles</h3>
        <p>
          Modify the <code>style</code> property to change an element’s CSS:
        </p>
        <CodeHighlight
          content={`
element.style.backgroundColor = 'blue';
element.style.fontSize = '20px';
`}
          sandboxOption={false}
        />
        <hr />
        <h2>4. Creating and Adding Elements</h2>
        <p>
          You can create new elements and add them to the DOM using methods like{" "}
          <code>createElement()</code> and <code>appendChild()</code>.
        </p>
        <h3>
          <code>createElement()</code> and <code>appendChild()</code>
        </h3>
        <p>Create a new element and append it as a child:</p>
        <CodeHighlight
          content={`
const newElement = document.createElement('div');
newElement.textContent = 'I am a new div!';
document.body.appendChild(newElement);
`}
          sandboxOption={false}
        />
        <h3>
          <code>insertBefore()</code>
        </h3>
        <p>Insert a new element before an existing one:</p>
        <CodeHighlight
          content={`
const parent = document.getElementById('parentElement');
const newElement = document.createElement('div');
newElement.textContent = 'Inserted before!';
const referenceElement = document.getElementById('referenceElement');

parent.insertBefore(newElement, referenceElement);
`}
          sandboxOption={false}
        />
        <h3>
          <code>innerHTML</code> for Adding Elements
        </h3>
        <p>
          You can also add elements using <code>innerHTML</code>, but be
          careful, as this can overwrite existing content:
        </p>
        <CodeHighlight
          content={`
element.innerHTML += '<p>New paragraph</p>';
`}
          sandboxOption={false}
        />
        <hr />
        <h2>Removing Elements</h2>
        <p>
          Removing elements can be done with <code>removeChild()</code> or{" "}
          <code>remove()</code>.
        </p>
        <h3>
          <code>removeChild()</code>
        </h3>
        <p>Remove a child element from its parent:</p>
        <CodeHighlight
          content={`
const parent = document.getElementById('parentElement');
const child = document.getElementById('childElement');

parent.removeChild(child);
`}
          sandboxOption={false}
        />
        <h3>
          <code>remove()</code>
        </h3>
        <p>Directly remove an element:</p>
        <CodeHighlight
          content={`
const element = document.getElementById('myElement');
element.remove();
`}
          sandboxOption={false}
        />
        <hr />
        {/* <h2>Example: Building a Dynamic To-Do List</h2>
        <p>
          Let&#39;s create a simple dynamic to-do list to practice DOM
          manipulation (click on <strong>"Sandbox"</strong> to see live
          implementation).
        </p>
        <CodeHighlight
          content={`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic To-Do List</title>
</head>
<body>
    <h1>To-Do List</h1>
    <input type="text" id="todoInput" placeholder="Add a new task">
    <button id="addButton">Add</button>
    <ul id="todoList"></ul>

    <script>
        const input = document.getElementById('todoInput');
        const addButton = document.getElementById('addButton');
        const todoList = document.getElementById('todoList');

        addButton.addEventListener('click', () => {
            const taskText = input.value;
            if (taskText) {
                const listItem = document.createElement('li');
                listItem.textContent = taskText;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => {
                    listItem.remove();
                });

                listItem.appendChild(deleteButton);
                todoList.appendChild(listItem);
                input.value = ''; // Clear input after adding
            }
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
    <title>Dynamic To-Do List</title>
</head>
<body>
    <h1>To-Do List</h1>
    <input type="text" id="todoInput" placeholder="Add a new task">
    <button id="addButton">Add</button>
    <ul id="todoList"></ul>

    <script>
        const input = document.getElementById('todoInput');
        const addButton = document.getElementById('addButton');
        const todoList = document.getElementById('todoList');

        addButton.addEventListener('click', () => {
            const taskText = input.value;
            if (taskText) {
                const listItem = document.createElement('li');
                listItem.textContent = taskText;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => {
                    listItem.remove();
                });

                listItem.appendChild(deleteButton);
                todoList.appendChild(listItem);
                input.value = ''; // Clear input after adding
            }
        });
    </script>
</body>
</html>
`,
            css: ``,
            js: ``,
          }}
        />
        <p>In this example:</p>
        <ul>
          <li>
            The user types a task into an input field and clicks the
            &quot;Add&quot; button.
          </li>
          <li>
            The task is added as a new list item (<code>&lt;li&gt;</code>) to
            the <code>&lt;ul&gt;</code> element.
          </li>
          <li>
            A &quot;Delete&quot; button is added to each task, allowing the user
            to remove tasks.
          </li>
          <li>
            The <code>addEventListener()</code> method is used to handle clicks
            and to remove items.
          </li>
        </ul>
        <hr /> */}
        <h2>7. Conclusion</h2>
        <p>In this tutorial, you learned how to:</p>
        <ul>
          <li>
            <strong>Select</strong> elements using various DOM methods.
          </li>
          <li>
            <strong>Modify</strong> content, attributes, and styles of elements.
          </li>
          <li>
            <strong>Create</strong>, <strong>add</strong>, and{" "}
            <strong>remove</strong> elements dynamically.
          </li>
          <li>Use JavaScript to build a simple interactive to-do list.</li>
        </ul>
        <p>
          With these tools, you can create dynamic, responsive, and engaging web
          pages. Mastering DOM manipulation is an essential step in your journey
          as a front-end developer. You should have enough information to try
          the TODO exercise to cement what was covered in this lesson.
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
