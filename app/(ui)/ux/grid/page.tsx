"use client";

import CodeEditor from "@/app/components/CodeEditor";
import CodeHighlight from "@/app/components/CodeHighlight";
import ModuleWrapperClient from "@/app/components/ModuleWrapperClient";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Grid() {
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
          <h1>Grid Layout</h1>
          <p>
            <strong>CSS Grid Layout</strong> is a powerful, two-dimensional
            layout system in CSS. It allows you to create complex layouts on the
            web more easily than with traditional methods like floats or
            Flexbox. Unlike Flexbox, which is one-dimensional (either rows or
            columns), CSS Grid allows you to manage both rows and columns
            simultaneously, making it ideal for creating grid-based designs like
            websites, dashboards, and galleries.
          </p>
          <hr />
          <h2>What is CSS Grid Layout?</h2>
          <p>
            CSS Grid Layout allows you to design webpages using a grid-based
            structure where you can define <strong>rows</strong> and{" "}
            <strong>columns</strong> and control the placement of elements
            within this structure. It provides a high level of control over both
            the dimensions and position of elements, making it easier to build
            flexible, complex layouts.
          </p>
          <p>With CSS Grid, you can:</p>
          <ul>
            <li>Create multi-column and multi-row layouts.</li>
            <li>Adjust grid layouts for different screen sizes.</li>
            <li>Control the positioning of elements within a container.</li>
          </ul>
          <h2>Creating a Grid Container</h2>
          <p>
            To start using CSS Grid, you need to define a{" "}
            <strong>grid container</strong> by setting{" "}
            <code>display: grid</code> on an element.
          </p>
          <CodeHighlight
            content={`
.container {
    display: grid;
    gap: 10px; /* Adds space between rows and columns */
}
`}
            sandboxOption={false}
          />
          <CodeHighlight
            content={`
<div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `
<div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>
`,
              css: `
.container {
    display: grid;
    gap: 10px; /* Adds space between rows and columns */
}
`,
              js: ``,
            }}
          />
          <p>
            <strong>Explanation</strong>:
          </p>
          <ul>
            <li>
              The <code>display: grid</code> property makes{" "}
              <code>.container</code> a grid container, and its children become{" "}
              <strong>grid items</strong>.
            </li>
            <li>
              The <code>gap</code> property adds spacing between rows and
              columns.
            </li>
          </ul>
          <hr />
          <h2>Defining Rows and Columns</h2>
          <p>
            You can define the rows and columns of a grid using{" "}
            <code>grid-template-columns</code> and{" "}
            <code>grid-template-rows</code>.
          </p>
          <h3>Example: Creating a 3-Column Layout</h3>
          <CodeHighlight
            content={`
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* Creates 3 columns of equal width */
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
<div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
</div>
`,
              css: `
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* Creates 3 columns of equal width */
    gap: 10px;
}
`,
              js: ``,
            }}
          />
          <p>
            <strong>Explanation</strong>:
          </p>
          <ul>
            <li>
              <code>1fr</code> stands for <strong>one fraction</strong> of the
              available space. It means that each column will take up an equal
              share of the container.
            </li>
            <li>
              <code>grid-template-columns: 1fr 1fr 1fr</code> creates three
              columns, each taking up one-third of the available space.
            </li>
          </ul>
          <h3>Example: Specifying Fixed and Flexible Sizes</h3>
          <CodeHighlight
            content={`
.container {
    display: grid;
    grid-template-columns: 200px 1fr 2fr; /* 3 columns: one fixed, one flexible */
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
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
</div>
`,
              css: `
.container {
    display: grid;
    grid-template-columns: 200px 1fr 2fr; /* 3 columns: one fixed, one flexible */
}

.item {
  border: 1px solid black;
}
`,
              js: ``,
            }}
          />
          <p>
            <strong>Explanation</strong>:
          </p>
          <p>
            The first column is <code>200px</code> wide, while the other columns
            are flexible. The second column takes up one part, and the third
            column takes up two parts of the remaining space. Try to shrink and
            exand the screen and you'll notice that the first column stays in a
            fixed width while the other two columns grow relative to the
            remaining space.
          </p>
          <h3>
            Defining Rows with <code>grid-template-rows</code>
          </h3>
          <p>You can define rows in the same way:</p>
          <CodeHighlight
            content={`
.container {
    display: grid;
    grid-template-rows: 100px auto 50px; /* 3 rows: one fixed, one flexible, one fixed */
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
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>
`,
              css: `
.container {
    display: grid;
    grid-template-rows: 100px auto 50px; /* 3 rows: one fixed, one flexible, one fixed */
}

.item {
  border: 1px solid black;
}
`,
              js: ``,
            }}
          />
          <p>
            <strong>Explanation</strong>:
          </p>
          <ul>
            <li>
              This creates a grid with three rows: 100px, a row that expands to
              fill the remaining space, and a 50px row.
            </li>
          </ul>
          <hr />
          <h2>Grid Item Placement</h2>
          <p>
            You can control where each grid item is placed using{" "}
            <code>grid-column</code> and <code>grid-row</code> properties.
          </p>
          <h3>Example: Placing Grid Items</h3>
          <CodeHighlight
            content={`
.item1 {
    grid-column: 1 / 3; /* Spans from column 1 to 3 */
    grid-row: 1 / 2; /* Spans the first row */
}

.item2 {
    grid-column: 3 / 4; /* Occupies the third column */
    grid-row: 1 / 3; /* Spans from row 1 to 3 */
}

.item3 {
    background: lightgreen;
}

.item4 {
    background: lightgoldenrodyellow;
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
    <div class="item1">Item 1</div>
    <div class="item2">Item 2</div>
    <div class="item3">Item 3</div>
    <div class="item4">Item 4</div>
</div>
          `,
              css: `
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns of equal width */
    grid-template-rows: repeat(2, 100px); /* 2 rows, each 100px high */
    gap: 10px; /* Space between grid items */
}

.item1 {
    grid-column: 1 / 3; /* Spans from column 1 to 3 */
    grid-row: 1 / 2; /* Spans the first row */
    background: lightblue;
}

.item2 {
    grid-column: 3 / 4; /* Occupies the third column */
    grid-row: 1 / 3; /* Spans from row 1 to 3 */
    background: lightcoral;
}

.item3 {
    background: lightgreen;
}

.item4 {
    background: lightgoldenrodyellow;
}
          `,
              js: ``,
            }}
          />
          <p>
            <strong>Explanation</strong>:
          </p>
          <ul>
            <li>
              <code>grid-column: 1 / 3</code> means that the element spans from
              column 1 to column 3.
            </li>
            <li>
              <code>grid-row: 1 / 2</code> means that the element spans from row
              1 to row 2.
            </li>
          </ul>
          <hr />
          <h2>Grid Template Areas</h2>
          <p>
            <code>grid-template-areas</code> allows you to create a visual map
            of your layout using named areas, making it easier to see how
            different parts of your design fit together.
          </p>
          <h3>
            Example: Using <code>grid-template-areas</code>
          </h3>
          <CodeHighlight
            content={`
.container {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar content content"
        "footer footer footer";
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto 1fr auto;
}

.header {
    grid-area: header;
}

.sidebar {
    grid-area: sidebar;
}

.content {
    grid-area: content;
}

.footer {
    grid-area: footer;
}
`}
            sandboxOption={false}
          />
          <CodeHighlight
            content={`
<div class="container">
    <div class="header">Header</div>
    <div class="sidebar">Sidebar</div>
    <div class="content">Content</div>
    <div class="footer">Footer</div>
</div>
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `
<div class="container">
    <div class="header">Header</div>
    <div class="sidebar">Sidebar</div>
    <div class="content">Content</div>
    <div class="footer">Footer</div>
</div>
`,
              css: `
.container {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar content content"
        "footer footer footer";
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto 1fr auto;
}

.header {
    grid-area: header;
}

.sidebar {
    grid-area: sidebar;
}

.content {
    grid-area: content;
}

.footer {
    grid-area: footer;
}

div {
    border: 1px solid black;
}
`,
              js: ``,
            }}
          />
          <p>
            <strong>Explanation</strong>:
          </p>
          <ul>
            <li>
              <code>grid-template-areas</code> defines a grid layout with named
              areas like <code>header</code>, <code>sidebar</code>,{" "}
              <code>content</code>, and <code>footer</code>.
            </li>
            <li>
              Each grid item is assigned to a specific area using{" "}
              <code>grid-area</code>.
            </li>
          </ul>
          <hr />
          <h2>Responsive Design with CSS Grid</h2>
          <p>
            CSS Grid can be combined with <strong>media queries</strong> to
            create layouts that adjust based on screen size, making it ideal for
            responsive design.
          </p>
          <h3>Example: Responsive Grid</h3>
          <CodeHighlight
            content={`
.container {
    display: grid;
    grid-template-columns: 1fr; /* Single column for smaller screens */
}

@media (min-width: 768px) {
    .container {
        grid-template-columns: 1fr 1fr; /* Two columns for larger screens */
    }
}

@media (min-width: 1024px) {
    .container {
        grid-template-columns: repeat(3, 1fr); /* Three columns for even larger screens */
    }
}
`}
            sandboxOption={false}
          />
          <p>
            <strong>Explanation</strong>:
          </p>
          <ul>
            <li>
              By using <code>@media</code> queries, you can change the number of
              columns based on the screen size.
            </li>
            <li>
              <code>repeat(3, 1fr)</code> creates three columns that each take
              up one-third of the container&#39;s width.
            </li>
          </ul>
          <hr />
          <h2>Practical Examples</h2>
          <h3>Example 1: Simple 2-Column Layout with a Header</h3>
          <CodeHighlight
            content={`
.container {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr;
    gap: 10px;
}

.header {
    grid-column: 1 / -1; /* Spans across all columns */
    background: lightblue;
}

.sidebar {
    background: lightgray;
}

.main {
    background: lightgreen;
}
`}
            sandboxOption={false}
          />
          <CodeHighlight
            content={`
<div class="container">
    <div class="header">Header</div>
    <div class="sidebar">Sidebar</div>
    <div class="main">Main Content</div>
</div>
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `
<div class="container">
    <div class="header">Header</div>
    <div class="sidebar">Sidebar</div>
    <div class="main">Main Content</div>
</div>
`,
              css: `
.container {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr;
    gap: 10px;
}

.header {
    grid-column: 1 / -1; /* Spans across all columns */
    background: lightblue;
}

.sidebar {
    background: lightgray;
}

.main {
    background: lightgreen;
}
`,
              js: ``,
            }}
          />
          <p>
            <strong>Explanation</strong>:
          </p>
          <ul>
            <li>
              The <code>grid-column: 1 / -1</code> makes the header span across
              both columns, while the sidebar and main content occupy their
              respective columns.
            </li>
          </ul>
          <h3>Example 2: Photo Gallery with CSS Grid</h3>
          <CodeHighlight
            content={`
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
}

.photo {
    background: #ccc;
    height: 200px;
}
`}
            sandboxOption={false}
          />
          <CodeHighlight
            content={`
<div class="gallery">
    <div class="photo"></div>
    <div class="photo"></div>
    <div class="photo"></div>
    <div class="photo"></div>
    <div class="photo"></div>
</div>
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `
<div class="gallery">
    <div class="photo"></div>
    <div class="photo"></div>
    <div class="photo"></div>
    <div class="photo"></div>
    <div class="photo"></div>
</div>
`,
              css: `
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
}

.photo {
    background: #ccc;
    height: 200px;
}
`,
              js: ``,
            }}
          />
          <p>
            <strong>Explanation</strong>:
          </p>
          <ul>
            <li>
              <code>repeat(auto-fill, minmax(150px, 1fr))</code> automatically
              creates as many columns as fit within the container, each having a
              minimum width of <code>150px</code> and a maximum width that
              expands as needed.
            </li>
            <li>
              This layout is responsive, automatically adjusting the number of
              columns based on the available space.
            </li>
          </ul>
          <hr />
          <h2>Conclusion</h2>
          <p>
            CSS Grid is an incredibly powerful layout tool that can handle even
            the most complex layouts with ease. Its ability to control both rows
            and columns makes it a versatile solution for building responsive
            websites. Understanding properties like{" "}
            <code>grid-template-columns</code>, <code>grid-template-rows</code>,
            and <code>grid-template-areas</code> gives you the flexibility to
            create layouts that adapt to any screen size.
          </p>
          <p>
            With a little practice, you’ll find that CSS Grid can simplify the
            process of creating beautiful, responsive designs.
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
