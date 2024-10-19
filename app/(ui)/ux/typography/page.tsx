"use client";

import CodeEditor from "@/app/components/CodeEditor";
import CodeHighlight from "@/app/components/CodeHighlight";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Typography() {
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
        <h1>Typography</h1>
        <h2>Tutorial: Mastering Typography for Websites</h2>
        <p>
          Typography is a crucial aspect of web design that significantly
          impacts readability, user experience, and the overall aesthetic of a
          website. Good typography helps convey a message effectively, while
          poor typography can drive users away. In this tutorial, we&#39;ll
          explore the key principles of web typography, the properties that
          control text appearance, and practical examples to help you create
          beautiful, readable websites.
        </p>
        <hr />
        <h2>Why Typography Matters in Web Design</h2>
        <p>
          Typography is more than just choosing a font. It involves selecting
          the right typeface, adjusting spacing, and arranging text in a way
          that makes it easy to read and understand. Good typography helps:
        </p>
        <ul>
          <li>
            <strong>Enhance readability</strong>: Text should be easy to read on
            different devices and screen sizes.
          </li>
          <li>
            <strong>Convey tone and mood</strong>: Different fonts can evoke
            different feelings, helping to set the tone for your website.
          </li>
          <li>
            <strong>Establish hierarchy</strong>: Typography helps guide users
            through your content by making important information stand out.
          </li>
          <li>
            <strong>Strengthen brand identity</strong>: Consistent use of fonts
            and typography styles can reinforce a brand&#39;s look and feel.
          </li>
        </ul>
        <h2>Basic Typography Terminology</h2>
        <p>
          Before diving into practical examples, it’s important to understand
          some basic typography terms:
        </p>
        <ul>
          <li>
            <strong>Typeface</strong>: The design of a set of characters (e.g.,
            Arial, Times New Roman). A typeface is often referred to as a
            &quot;font family.&quot;
          </li>
          <li>
            <strong>Font</strong>: A specific style within a typeface (e.g.,
            Arial Bold, Times New Roman Italic).
          </li>
          <li>
            <strong>Serif</strong>: Fonts with small decorative lines or
            &quot;feet&quot; at the ends of letters (e.g., Times New Roman).
            Typically used for traditional, formal designs.
          </li>
          <li>
            <strong>Sans-Serif</strong>: Fonts without decorative lines (e.g.,
            Arial, Helvetica). Often used for modern, clean designs.
          </li>
          <li>
            <strong>Line Height</strong>: The space between lines of text, which
            affects readability.
          </li>
          <li>
            <strong>Kerning</strong>: The space between individual characters.
          </li>
          <li>
            <strong>Leading</strong>: The vertical spacing between lines of
            text.
          </li>
          <li>
            <strong>Weight</strong>: The thickness of a font, such as light,
            regular, bold, or extra bold.
          </li>
        </ul>
        <h2>Font Selection and Pairing</h2>
        <p>
          Choosing the right fonts and combining them effectively is key to good
          typography. Here are some tips for selecting and pairing fonts:
        </p>
        <ul>
          <li>
            <strong>Limit the number of fonts</strong>: Using 2-3 fonts per
            website is a good rule of thumb. Too many fonts can make the design
            look cluttered.
          </li>
          <li>
            <strong>Contrast is important</strong>: Use contrasting typefaces
            for different elements (e.g., headers vs. body text). For example,
            pair a serif font for headings with a sans-serif for body text.
          </li>
          <li>
            <strong>Choose web-safe fonts</strong>: These fonts are widely
            supported by different browsers and operating systems. Examples
            include Arial, Verdana, Georgia, and Times New Roman.
          </li>
          <li>
            <strong>Use Google Fonts</strong>: Google Fonts is a great resource
            for free, high-quality web fonts. It provides a wide range of fonts
            that you can easily integrate into your website.
          </li>
        </ul>
        <h2>Typography Properties in CSS</h2>
        <p>
          CSS provides a range of properties that allow you to control
          typography. Here are some of the most important ones:
        </p>
        <h3>
          1. <code>font-family</code>
        </h3>
        <p>Defines the typeface of an element.</p>
        <CodeHighlight
          content={`
body {
    font-family: 'Roboto', sans-serif;
}
`}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          set_html_arg={set_html_arg}
          set_css_arg={set_css_arg}
          set_js_arg={set_js_arg}
          args={{
            html: `
<body>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</body>
`,
            css: `
body {
    font-family: 'Roboto', sans-serif;
}
`,
            js: ``,
          }}
        />
        <h3>
          2. <code>font-size</code>
        </h3>
        <p>
          Defines the size of the text. It can be set in <code>px</code>,{" "}
          <code>em</code>, <code>rem</code>, <code>vw</code>, or <code>%</code>.
        </p>
        <CodeHighlight
          content={`
h1 {
    font-size: 2rem; /* 2 times the base font size */
}
`}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          set_html_arg={set_html_arg}
          set_css_arg={set_css_arg}
          set_js_arg={set_js_arg}
          args={{
            html: `
<h1>Header</h1>
`,
            css: `
h1 {
    font-size: 2rem; /* 2 times the base font size */
}
`,
            js: ``,
          }}
        />
        <h3>
          3. <code>font-weight</code>
        </h3>
        <p>Specifies the thickness of the text.</p>
        <CodeHighlight
          content={`
h1 {
    font-weight: 700; /* Bold text */
}

p {
    font-weight: 400; /* Regular text */
}
`}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          set_html_arg={set_html_arg}
          set_css_arg={set_css_arg}
          set_js_arg={set_js_arg}
          args={{
            html: `
<h1>Header</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
`,
            css: `
h1 {
    font-weight: 700; /* Bold text */
}

p {
    font-weight: 400; /* Regular text */
}
`,
            js: ``,
          }}
        />
        <h3>
          4. <code>line-height</code>
        </h3>
        <p>
          Controls the space between lines of text, which is important for
          readability.
        </p>
        <CodeHighlight
          content={`
p {
    line-height: 1.5; /* 1.5 times the font size */
}
`}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          set_html_arg={set_html_arg}
          set_css_arg={set_css_arg}
          set_js_arg={set_js_arg}
          args={{
            html: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p>Sed sagittis turpis quis gravida sagittis. Duis quis urna nulla.</p>
`,
            css: `
p {
    line-height: 1.5; /* 1.5 times the font size */
}
`,
            js: ``,
          }}
        />
        <h3>
          5. <code>letter-spacing</code> and <code>word-spacing</code>
        </h3>
        <p>
          Controls the space between characters (<code>letter-spacing</code>) or
          words (<code>word-spacing</code>).
        </p>
        <CodeHighlight
          content={`
p {
    letter-spacing: 0.05em; /* Adds space between characters */
    word-spacing: 0.1em; /* Adds space between words */
}
`}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          set_html_arg={set_html_arg}
          set_css_arg={set_css_arg}
          set_js_arg={set_js_arg}
          args={{
            html: `
<p>Sed sagittis turpis quis gravida sagittis. Duis quis urna nulla.</p>
`,
            css: `
p {
    letter-spacing: 0.05em; /* Adds space between characters */
    word-spacing: 0.1em; /* Adds space between words */
}
`,
            js: ``,
          }}
        />
        <h3>
          6. <code>text-transform</code>
        </h3>
        <p>
          Changes the text case, such as uppercase, lowercase, or capitalized.
        </p>
        <CodeHighlight
          content={`
h2 {
    text-transform: uppercase; /* Transforms text to uppercase */
}
`}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          set_html_arg={set_html_arg}
          set_css_arg={set_css_arg}
          set_js_arg={set_js_arg}
          args={{
            html: `
<h2>H2 Header</h2>`,
            css: `
h2 {
    text-transform: uppercase; /* Transforms text to uppercase */
}
`,
            js: ``,
          }}
        />
        <h3>
          7. <code>text-align</code>
        </h3>
        <p>Aligns text to the left, right, center, or justify.</p>
        <CodeHighlight
          content={`
p {
    text-align: justify; /* Justifies the text */
}
`}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          set_html_arg={set_html_arg}
          set_css_arg={set_css_arg}
          set_js_arg={set_js_arg}
          args={{
            html: `
<p>Sed sagittis turpis quis gravida sagittis. Duis quis urna nulla.</p>`,
            css: `
p {
    text-align: justify; /* Justifies the text */
}
`,
            js: ``,
          }}
        />
        <h2>Responsive Typography</h2>
        <p>
          Responsive typography ensures that text remains readable across
          different devices and screen sizes. Here are some techniques:
        </p>
        <h3>
          1. Using <code>em</code> and <code>rem</code> units
        </h3>
        <ul>
          <li>
            <code>em</code>: Relative to the font size of the parent element.
          </li>
          <li>
            <code>rem</code>: Relative to the root font size (usually set on the{" "}
            <code>html</code> element).
          </li>
        </ul>
        <CodeHighlight
          content={`
html {
    font-size: 16px;
}

body {
    font-size: 1rem; /* 16px */
}

h1 {
    font-size: 2.5rem; /* 40px */
}
`}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          set_html_arg={set_html_arg}
          set_css_arg={set_css_arg}
          set_js_arg={set_js_arg}
          args={{
            html: `
<html>
  <body>
    <h1>Header</h1>
    <p>Sed sagittis turpis quis gravida sagittis. Duis quis urna nulla.</p>
  </body>
</html>
`,
            css: `
html {
    font-size: 16px;
}

body {
    font-size: 1rem; /* 16px */
}

h1 {
    font-size: 2.5rem; /* 40px */
}
`,
            js: ``,
          }}
        />
        <h3>2. Media Queries for Font Sizes</h3>
        <p>Adjust font sizes for different screen sizes using media queries.</p>
        <CodeHighlight
          content={`
body {
    font-size: 16px;
}

@media (min-width: 768px) {
    body {
        font-size: 24px;
    }
}

@media (min-width: 1024px) {
    body {
        font-size: 32px;
    }
}
`}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          set_html_arg={set_html_arg}
          set_css_arg={set_css_arg}
          set_js_arg={set_js_arg}
          args={{
            html: `
<body>
  <p>Sed sagittis turpis quis gravida sagittis. Duis quis urna nulla.</p>
</body>`,
            css: `
body {
    font-size: 16px;
}

@media (min-width: 768px) {
    body {
        font-size: 24px;
    }
}

@media (min-width: 1024px) {
    body {
        font-size: 32px;
    }
}
`,
            js: ``,
          }}
        />
        <h3>
          3. Using <code>clamp()</code>
        </h3>
        <p>
          <code>clamp()</code> allows you to set a minimum, preferred, and
          maximum font size. It’s great for responsive typography.
        </p>
        <CodeHighlight
          content={`
h1 {
    font-size: clamp(1.5rem, 2vw + 1rem, 3rem);
}
`}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          set_html_arg={set_html_arg}
          set_css_arg={set_css_arg}
          set_js_arg={set_js_arg}
          args={{
            html: `
<h1>Clamped font</h1>`,
            css: `
h1 {
    font-size: clamp(1.5rem, 2vw + 1rem, 3rem);
}
`,
            js: ``,
          }}
        />
        <p>
          This sets a font size that scales with the viewport but never goes
          below <code>1.5rem</code> or above <code>3rem</code>.
        </p>
        <h2>6. Practical Examples</h2>
        <h3>Example 1: Styling Headings and Paragraphs</h3>
        <CodeHighlight
          content={`
<body>
  <h1>This is the 1st header</h1>
  <p>Sed sagittis turpis quis gravida sagittis. Duis quis urna nulla.</p>
  <h2>This is the 2nd header</h2>
  <p>Vivamus justo turpis, ultrices eget lobortis eget, fermentum eget urna.</p>
</body>
`}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          set_html_arg={set_html_arg}
          set_css_arg={set_css_arg}
          set_js_arg={set_js_arg}
          args={{
            html: `
<body>
  <h1>This is the 1st header</h1>
  <p>Sed sagittis turpis quis gravida sagittis. Duis quis urna nulla.</p>
  <h2>This is the 2nd header</h2>
  <p>Vivamus justo turpis, ultrices eget lobortis eget, fermentum eget urna.</p>
</body>
`,
            css: `
body {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
}

h1, h2, h3 {
    font-family: 'Merriweather', serif;
    margin-bottom: 0.5rem;
    font-weight: 700;
}

p {
    margin-bottom: 1rem;
    color: #555;
}

`,
            js: ``,
          }}
        />
        <h3>Example 2: Customizing Buttons with Typography</h3>
        <CodeHighlight
          content={`
button {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.875rem; /* 14px */
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 600;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
}
`}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          set_html_arg={set_html_arg}
          set_css_arg={set_css_arg}
          set_js_arg={set_js_arg}
          args={{
            html: `
<button>Styled Button</button>
`,
            css: `
button {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.875rem; /* 14px */
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 600;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
}
`,
            js: ``,
          }}
        />
        <h2>Conclusion</h2>
        <p>
          Typography is a fundamental part of web design that affects the
          overall look, feel, and readability of a website. By mastering the
          basics of font selection, CSS properties, and responsive design, you
          can create websites that are both aesthetically pleasing and
          user-friendly. Experiment with different typefaces, styles, and
          layouts to find what works best for your projects. Remember, good
          typography is about finding a balance between form and function.
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
