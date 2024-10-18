"use client";

import CodeEditor from "@/app/components/CodeEditor";
import CodeHighlight from "@/app/components/CodeHighlight";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function CSS() {
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
        <h1>Flexbox Layout</h1>
        <p>
          <em>
            (NOTE: a great resource that we use all the time is the infamous{" "}
            <Link href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
              Flexbox Cheat Sheet
            </Link>
            )
          </em>
        </p>
        <p>
          <strong>Flexbox</strong> (or <strong>Flexible Box Layout</strong>) is
          a powerful layout model in CSS that allows you to design complex
          layouts quickly and efficiently. It is particularly useful for
          designing responsive layouts, as it provides control over how items
          are distributed and aligned within a container, regardless of their
          size.
        </p>

        <hr />
        <h2>What is Flexbox?</h2>
        <p>
          Flexbox is a one-dimensional layout system that allows you to align
          and distribute space between items inside a container. It can handle
          the layout in one of two directions:
        </p>
        <ul>
          <li>
            <strong>Rows</strong> (horizontal)
          </li>
          <li>
            <strong>Columns</strong> (vertical)
          </li>
        </ul>
        <p>
          When using flexbox, a container becomes a{" "}
          <strong>flex container</strong>, and its children become{" "}
          <strong>flex items</strong>.
        </p>
        <p>
          To start using Flexbox, you simply set the container&#39;s{" "}
          <code>display</code> property to <code>flex</code>:
        </p>
        <CodeHighlight
          content={`
.container {
    display: flex;
}
`}
          sandboxOption={false}
        />
        <hr />
        <h2>Thinking in Rows and Columns</h2>
        <p>
          One of the key concepts of Flexbox is to{" "}
          <strong>think in terms of rows and columns</strong>. Unlike other
          layout systems, Flexbox isn’t constrained to just a row or column
          layout—<strong>you choose</strong> how items should be aligned within
          the flex container.
        </p>
        <ul>
          <li>
            <strong>Row</strong>: When you want the items to be aligned
            horizontally, you use <code>flex-direction: row</code> (which is the
            default). Think of this as aligning items{" "}
            <strong>left-to-right</strong>.
          </li>
          <li>
            <strong>Column</strong>: When you want items to be aligned
            vertically, you use <code>flex-direction: column</code>. Think of
            this as aligning items <strong>top-to-bottom</strong>.
          </li>
        </ul>
        <p>
          Understanding when to switch between these two directions is crucial
          for creating flexible and responsive designs.
        </p>
        <CodeHighlight
          content={`
/* Horizontal layout (Row) */
.container-row {
    display: flex;
    flex-direction: row; /* Items are laid out left-to-right */
}

/* Vertical layout (Column) */
.container-column {
    display: flex;
    flex-direction: column; /* Items are laid out top-to-bottom */
}
`}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          set_html_arg={set_html_arg}
          set_css_arg={set_css_arg}
          set_js_arg={set_js_arg}
          args={{
            html: `
<div>
  <div class="container-row">
    <div>one</div>
    <div>two</div>
    <div>three</div>
  </div>
  <br>
  <br>
  <div class="container-column">
    <div>one</div>
    <div>two</div>
    <div>three</div>
  </div>
</div>
`,
            css: `
/* Horizontal layout (Row) */
.container-row {
    display: flex;
    flex-direction: row; /* Items are laid out left-to-right */
    gap: 1rem;
}

/* Vertical layout (Column) */
.container-column {
    display: flex;
    flex-direction: column; /* Items are laid out top-to-bottom */
    gap: 1rem;
}
`,
            js: ``,
          }}
        />
        <h2>Basic Flexbox Properties</h2>
        <p>Here are some of the core properties you will use with Flexbox:</p>
        <h3>
          <code>flex-direction</code>
        </h3>
        <p>
          Determines the <strong>direction</strong> of the main axis:
        </p>
        <ul>
          <li>
            <code>row</code> (default): Items are placed from left to right.
          </li>
          <li>
            <code>row-reverse</code>: Items are placed from right to left.
          </li>
          <li>
            <code>column</code>: Items are placed from top to bottom.
          </li>
          <li>
            <code>column-reverse</code>: Items are placed from bottom to top.
          </li>
        </ul>
        <CodeHighlight
          content={`
.container {
    display: flex;
    flex-direction: row; /* Changes to column for vertical layouts */
}
`}
          sandboxOption={false}
        />
        <h3>
          <code>justify-content</code>
        </h3>
        <p>
          Aligns items along the <strong>main axis</strong> (row or column):
        </p>
        <ul>
          <li>
            <code>flex-start</code>: Aligns items to the start.
          </li>
          <li>
            <code>center</code>: Centers items.
          </li>
          <li>
            <code>space-between</code>: Distributes items with space between
            them.
          </li>
          <li>
            <code>space-around</code>: Distributes items with space before,
            between, and after.
          </li>
          <li>
            <code>space-evenly</code>: Distributes items with equal space around
            them.
          </li>
        </ul>
        <CodeHighlight
          content={`
.container {
    display: flex;
    justify-content: center; /* Aligns items at the center horizontally */
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
  <div>hotizontally centered element</div>
</div>
`,
            css: `
.container {
    display: flex;
    justify-content: center; /* Aligns items at the center horizontally */
}
`,
            js: ``,
          }}
        />
        <h3>
          <code>align-items</code>
        </h3>
        <p>
          Aligns items along the <strong>cross axis</strong> (perpendicular to
          the main axis):
        </p>
        <ul>
          <li>
            <code>flex-start</code>: Aligns items to the start of the cross
            axis.
          </li>
          <li>
            <code>center</code>: Centers items along the cross axis.
          </li>
          <li>
            <code>stretch</code> (default): Stretches items to fill the
            container.
          </li>
          <li>
            <code>baseline</code>: Aligns items based on their baseline.
          </li>
        </ul>
        <CodeHighlight
          content={`
.container {
    display: flex;
    align-items: center; /* Aligns items at the center vertically */
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
<div>vertically centered element</div>
</div>
`,
            css: `
.container {
  display: flex;
  align-items: center; /* Aligns items at the center vertically */
  height: 5em;
  border: 1px solid black;
}
`,
            js: ``,
          }}
        />
        <hr />
        <h2>Aligning Items in a Flex Container</h2>
        <p>
          Flexbox makes aligning items along both the <strong>main axis</strong>{" "}
          and <strong>cross axis</strong> straightforward. This helps with
          creating layouts that respond well to different screen sizes.
        </p>
        <p>
          <strong>Main Axis Alignment</strong>: Controlled using{" "}
          <code>justify-content</code>, which determines how items are
          distributed within the container.
        </p>
        <p>
          <strong>Cross Axis Alignment</strong>: Controlled using{" "}
          <code>align-items</code> and <code>align-self</code> (for individual
          items).
        </p>
        <CodeHighlight
          content={`
.container {
    display: flex;
    flex-direction: row; /* Lays items horizontally */
    justify-content: space-between; /* Distributes items evenly with space between */
    align-items: center; /* Aligns items in the center of the cross-axis (vertically) */
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
    <div>one</div>
    <div>two</div>
    <div>three</div>
</div>
`,
            css: `
.container {
    display: flex;
    flex-direction: row; /* Lays items horizontally */
    justify-content: space-between; /* Distributes items evenly with space between */
    align-items: center; /* Aligns items in the center of the cross-axis (vertically) */
    height: 5em;
    border: 1px solid black;
}
`,
            js: ``,
          }}
        />
        <hr />
        <h2>Advanced Properties for Control</h2>
        <p>
          Flexbox also has advanced properties like <code>flex-grow</code>,{" "}
          <code>flex-shrink</code>, and <code>flex-basis</code> that give you
          more control over how items behave.
        </p>
        <h3>
          <code>flex-grow</code>
        </h3>
        <p>
          Defines how much space a flex item should take up relative to others:
        </p>
        <CodeHighlight
          content={`
.item {
    flex-grow: 1; /* The item will grow to fill available space */
}
`}
          sandboxOption={false}
        />
        <h3>
          <code>flex-shrink</code>
        </h3>
        <p>
          Determines how items should shrink when there is not enough space:
        </p>
        <CodeHighlight
          content={`
.item {
    flex-shrink: 1; /* The item will shrink when space is limited */
}
`}
          sandboxOption={false}
        />
        <h3>
          <code>flex-basis</code>
        </h3>
        <p>
          Sets the initial size of a flex item before any growing or shrinking
          takes place:
        </p>
        <CodeHighlight
          content={`
.item {
    flex-basis: 200px; /* The item starts with a width/height of 200px */
}
`}
          sandboxOption={false}
        />
        <h3>
          <code>align-self</code>
        </h3>
        <p>
          Allows individual items to override the <code>align-items</code>{" "}
          property:
        </p>
        <CodeHighlight
          content={`
.item {
    align-self: flex-end; /* This item will align itself to the end of the cross axis */
}
`}
          sandboxOption={false}
        />
        <hr />
        <h2>Practical Examples</h2>
        <h3>Example 1: Centering Items in a Row</h3>
        <CodeHighlight
          content={`
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full viewport height for vertical centering */
}
`}
          sandboxOption={false}
        />
        <CodeHighlight
          content={`
<div class="container">
    <div class="item">Centered Item</div>
</div>
`}
          sandboxOption={false}
        />
        <p>
          <strong>Explanation</strong>:
        </p>
        <ul>
          <li>
            <code>justify-content: center</code> centers items horizontally.
          </li>
          <li>
            <code>align-items: center</code> centers items vertically.
          </li>
          <li>The item will be perfectly centered in both directions.</li>
        </ul>
        <h3>Example 2: Sidebar and Main Content Layout</h3>
        <CodeHighlight
          content={`
.container {
    display: flex;
}

.sidebar {
    flex: 1; /* Takes up 1 part of the available space */
    background: lightgray;
}

.main-content {
    flex: 3; /* Takes up 3 parts of the available space */
    background: lightblue;
}
`}
          sandboxOption={false}
        />
        <CodeHighlight
          content={`
<div class="container">
    <div class="sidebar">Sidebar</div>
    <div class="main-content">Main Content</div>
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
<div class="sidebar">Sidebar</div>
<div class="main-content">Main Content</div>
</div>
`,
            css: `
.container {
display: flex;
height: 100vh;
}

.sidebar {
flex: 1; /* Takes up 1 part of the available space */
background: lightgray;
}

.main-content {
flex: 3; /* Takes up 3 parts of the available space */
background: lightblue;
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
            The container uses <code>display: flex</code> with default{" "}
            <code>flex-direction: row</code>, so the sidebar and main content
            are placed next to each other.
          </li>
          <li>
            <code>flex: 1</code> and <code>flex: 3</code> determine the relative
            space each part takes up.
          </li>
        </ul>
        <h3>
          Example 3: Stacked Items with <code>flex-direction: column</code>
        </h3>
        <CodeHighlight
          content={`
.container {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.header {
    background: lightgreen;
    flex: 0 1 50px; /* Fixed height */
}

.content {
    background: lightblue;
    flex: 1; /* Fills remaining space */
}

.footer {
    background: lightcoral;
    flex: 0 1 50px; /* Fixed height */
}
`}
          sandboxOption={false}
        />
        <CodeHighlight
          content={`
<div class="container">
    <div class="header">Header</div>
    <div class="content">Main Content</div>
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
    <div class="content">Main Content</div>
    <div class="footer">Footer</div>
</div>
`,
            css: `
.container {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.header {
    background: lightgreen;
    flex: 0 1 50px; /* shorthand for: [flex-grow] [flex-shrink] [flex-basis] */
}

.content {
    background: lightblue;
    flex: 1; /* Fills remaining space */
}

.footer {
    background: lightcoral;
    flex: 0 1 50px; /* Fixed height */
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
            The layout is vertically stacked using{" "}
            <code>flex-direction: column</code>.
          </li>
          <li>
            The header and footer have fixed heights, while the content area
            takes up the remaining space.
          </li>
        </ul>
        <hr />
        <h2>Conclusion</h2>
        <p>
          Flexbox is a highly versatile layout system that allows you to easily
          manage complex layouts by thinking in terms of{" "}
          <strong>rows and columns</strong>. By using properties like{" "}
          <code>flex-direction</code>, <code>justify-content</code>, and{" "}
          <code>align-items</code>, you can align and space your elements
          precisely how you want.
        </p>
        <ul>
          <li>
            Use <code>row</code> when you want items arranged horizontally.
          </li>
          <li>
            Use <code>column</code> when you want items arranged vertically.
          </li>
          <li>
            Mix and match properties for fine-grained control over how items
            grow, shrink, and align.
          </li>
        </ul>
        <p>
          Mastering Flexbox will give you a solid foundation for building
          responsive web layouts and make working with CSS much easier.
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
