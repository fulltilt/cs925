"use client";

import CodeEditor from "@/app/components/CodeEditor";
import CodeHighlight from "@/app/components/CodeHighlight";
import NavigationLinks from "@/app/components/NavigationLinks";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function HTML() {
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
        <h1>HTML</h1>
        <p>
          HTML (HyperText Markup Language) is the standard language for creating
          web pages. It uses a system of tags and elements to structure content.
          Here’s a simple tutorial to help you understand the basics.
        </p>
        <h2>1. Basic Structure of an HTML Document</h2>
        <p>
          Every HTML document follows a basic structure. Here&apos;s a simple
          template:
        </p>
        <CodeHighlight
          content={`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Basic HTML Page</title>
    </head>
    <body>
        <h1>Welcome to My Page!</h1>
        <p>This is a paragraph in my first HTML page.</p>
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
        <title>Basic HTML Page</title>
    </head>
    <body>
        <h1>Welcome to My Page!</h1>
        <p>This is a paragraph in my first HTML page.</p>
    </body>
</html>
`,
            css: ``,
            js: ``,
          }}
        />
        <h3>Explanation:</h3>
        <ul className="list-disc list-inside">
          <li>
            <code>&lt;!DOCTYPE html&gt;</code>: Declares the document type as
            HTML5.
          </li>
          <li>
            <code>&lt;html&gt;</code>: The root element that contains all other
            HTML elements.
          </li>
          <li>
            <code>&lt;head&gt;</code>: Contains meta-information about the
            document (title, character set, viewport).
          </li>
          <li>
            <code>&lt;title&gt;</code>: The title of the page, shown in the
            browser tab.
          </li>
          <li>
            <code>&lt;body&gt;</code>: Contains the visible content of the web
            page.
          </li>
          <li>
            <code>&lt;h1&gt;</code>: A top-level heading.
          </li>
          <li>
            <code>&lt;p&gt;</code>: A paragraph element.
          </li>
        </ul>
        <h2>2. HTML Elements and Tags</h2>
        <p>
          HTML uses tags to structure content. Most tags have an opening and
          closing tag.
        </p>
        <h3>Example:</h3>
        <CodeHighlight
          content={`
<h2>This is a heading</h2>
<p>This is a paragraph.</p>
`}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          set_html_arg={set_html_arg}
          set_css_arg={set_css_arg}
          set_js_arg={set_js_arg}
          args={{
            html: `
<h2>This is a heading</h2>
<p>This is a paragraph.</p>
`,
            css: ``,
            js: ``,
          }}
        />
        <p>
          Tags like <code>&lt;h2&gt;</code> and <code>&lt;p&gt;</code> are known
          as
          <em>block-level elements</em>, meaning they take up the full width of
          their container.
        </p>
        <h3>Common Tags:</h3>
        <ul>
          <li>
            <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>: Headings (H1 is
            the largest, H6 is the smallest).
          </li>
          <li>
            <code>&lt;p&gt;</code>: Paragraph.
          </li>
          <li>
            <code>&lt;a&gt;</code>: Anchor for links.
          </li>
          <li>
            <code>&lt;img&gt;</code>: For images.
          </li>
          <li>
            <code>&lt;div&gt;</code>: A block-level container.
          </li>
          <li>
            <code>&lt;span&gt;</code>: An inline container, often used for
            styling.
          </li>
        </ul>
        <h2>
          3. <strong>Attributes in HTML</strong>
        </h2>
        <p>
          Attributes provide additional information about elements. They are
          always included in the opening tag.
        </p>
        <h3>
          Example with the <code>&lt;a&gt;</code> tag (used for links):
        </h3>
        <CodeHighlight
          content={`
<a href="https://www.example.com">Visit Example</a>`}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          set_html_arg={set_html_arg}
          set_css_arg={set_css_arg}
          set_js_arg={set_js_arg}
          args={{
            html: `
<a href="https://www.example.com">Visit Example</a>`,
            css: ``,
            js: ``,
          }}
        />
        <ul>
          <li>
            <code>href</code>: The attribute that defines the URL of the link.
          </li>
        </ul>
        <h3>
          Example with the <code>&lt;img&gt;</code> tag:
        </h3>
        <CodeHighlight
          content={`
<img src="image.jpg" alt="A description of the image" width="500">`}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          set_html_arg={set_html_arg}
          set_css_arg={set_css_arg}
          set_js_arg={set_js_arg}
          args={{
            html: `<img src="image.jpg" alt="A description of the image" width="500">`,
            css: ``,
            js: ``,
          }}
        />

        <ul>
          <li>
            <code>src</code>: Specifies the source of the image.
          </li>
          <li>
            <code>alt</code>: Provides alternative text for screen readers or if
            the image fails to load.
          </li>
          <li>
            <code>width</code>: Sets the width of the image.
          </li>
        </ul>
        <h2>
          4. <strong>Lists in HTML</strong>
        </h2>
        <p>HTML supports ordered and unordered lists.</p>
        <h3>Unordered List (bullet points):</h3>
        <CodeHighlight
          content={`
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
`}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          set_html_arg={set_html_arg}
          set_css_arg={set_css_arg}
          set_js_arg={set_js_arg}
          args={{
            html: `
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
`,
            css: ``,
            js: ``,
          }}
        />
        <h3>Ordered List (numbered):</h3>
        <CodeHighlight
          content={`
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
`}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          set_html_arg={set_html_arg}
          set_css_arg={set_css_arg}
          set_js_arg={set_js_arg}
          args={{
            html: `
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
`,
            css: ``,
            js: ``,
          }}
        />
        <h2>
          5. <strong>Tables in HTML</strong>
        </h2>
        <p>
          HTML tables are structured using the <code>&lt;table&gt;</code>,
          <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, and
          <code>&lt;td&gt;</code> tags.
        </p>
        <CodeHighlight
          content={`
<table border="1">
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
    </tr>
    <tr>
        <td>Row 2, Cell 1</td>
        <td>Row 2, Cell 2</td>
    </tr>
</table>
`}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          set_html_arg={set_html_arg}
          set_css_arg={set_css_arg}
          set_js_arg={set_js_arg}
          args={{
            html: `
<table border="1">
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
    </tr>
    <tr>
        <td>Row 2, Cell 1</td>
        <td>Row 2, Cell 2</td>
    </tr>
</table>
`,
            css: ``,
            js: ``,
          }}
        />
        <ul>
          <li>
            <code>&lt;th&gt;</code>: Table header.
          </li>
          <li>
            <code>&lt;td&gt;</code>: Table data (cells).
          </li>
          <li>
            <code>border=&quot;1&quot;</code>: Adds a border around the table
            and cells.
          </li>
        </ul>
        <h2>
          6. <strong>Forms in HTML</strong>
        </h2>
        <p>Forms are used to collect user input.</p>
        <CodeHighlight
          content={`
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    
    <input type="submit" value="Submit">
</form>
`}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          set_html_arg={set_html_arg}
          set_css_arg={set_css_arg}
          set_js_arg={set_js_arg}
          args={{
            html: `
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    
    <input type="submit" value="Submit">
</form>
`,
            css: ``,
            js: ``,
          }}
        />
        <ul>
          <li>
            <code>action</code>: Specifies where to send the form data.
          </li>
          <li>
            <code>method</code>: The HTTP method (GET or POST).
          </li>
          <li>
            <code>&lt;input&gt;</code>: A field for user input.
            <ul className="ml-8">
              <li>
                <code>type=&quot;text&quot;</code>: A text field.
              </li>
              <li>
                <code>type=&quot;email&quot;</code>: A field for email input.
              </li>
              <li>
                <code>type=&quot;submit&quot;</code>: A submit button.
              </li>
            </ul>
          </li>
        </ul>
        <h2>
          7. <strong>Linking CSS for Styling</strong>
        </h2>
        <p>
          HTML can be styled using CSS (Cascading Style Sheets). You can either
          include CSS in the <code>&lt;head&gt;</code> section of the HTML or as
          an external file.
        </p>
        <h3>Internal CSS Example:</h3>
        <CodeHighlight
          content={`
<head>
    <style>
        body {
            background-color: lightblue;
        }
        h1 {
            color: navy;
            font-size: 36px;
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
        body {
            background-color: lightblue;
        }
        h1 {
            color: navy;
            font-size: 36px;
        }
    </style>
</head>
`,
            css: ``,
            js: ``,
          }}
        />
        <h2>
          8. <strong>Semantic HTML</strong>
        </h2>
        <p>
          Semantic HTML uses elements that clearly describe their meaning to
          both the browser and the developer.
        </p>
        <h3>Examples of Semantic Elements:</h3>
        <ul>
          <li>
            <code>&lt;header&gt;</code>: Represents the header of a page.
          </li>
          <li>
            <code>&lt;footer&gt;</code>: Represents the footer of a page.
          </li>
          <li>
            <code>&lt;article&gt;</code>: Represents an independent piece of
            content.
          </li>
          <li>
            <code>&lt;section&gt;</code>: Defines sections within a document.
          </li>
          <li>
            <code>&lt;nav&gt;</code>: Defines a navigation menu.
          </li>
        </ul>
        <h3>Example:</h3>
        <CodeHighlight
          content={`
<article>
    <header>
        <h1>Blog Post Title</h1>
    </header>
    <p>This is the content of the blog post.</p>
    <footer>Written by John Doe</footer>
</article>
`}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          set_html_arg={set_html_arg}
          set_css_arg={set_css_arg}
          set_js_arg={set_js_arg}
          args={{
            html: `
<article>
    <header>
        <h1>Blog Post Title</h1>
    </header>
    <p>This is the content of the blog post.</p>
    <footer>Written by John Doe</footer>
</article>
`,
            css: ``,
            js: ``,
          }}
        />
        <h2>
          9. <strong>Basic HTML Page with Links, Images, and Lists</strong>
        </h2>
        <p>
          Here&apos;s a full example that includes different elements we&#39;ve
          discussed:
        </p>
        <CodeHighlight
          content={`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }
        h1 {
            color: #333;
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
        <nav>
            <ul>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="about">
        <h2>About Me</h2>
        <p>Hello! My name is Jane, and I love web development. Here's a picture of my recent project:</p>
        <img src="project.jpg" alt="Project Image" width="300">
    </section>

    <section id="projects">
        <h2>Projects</h2>
        <ol>
            <li>Portfolio Website</li>
            <li>JavaScript Calculator</li>
            <li>CSS Grid Layout</li>
        </ol>
    </section>

    <footer>
        <p>&copy; 2024 Jane Doe. All rights reserved.</p>
    </footer>
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
    <title>My First Web Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }
        h1 {
            color: #333;
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
        <nav>
            <ul>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="about">
        <h2>About Me</h2>
        <p>Hello! My name is Jane, and I love web development. Here's a picture of my recent project:</p>
        <img src="project.jpg" alt="Project Image" width="300">
    </section>

    <section id="projects">
        <h2>Projects</h2>
        <ol>
            <li>Portfolio Website</li>
            <li>JavaScript Calculator</li>
            <li>CSS Grid Layout</li>
        </ol>
    </section>

    <footer>
        <p>&copy; 2024 Jane Doe. All rights reserved.</p>
    </footer>
</body>
</html>
`,
            css: ``,
            js: ``,
          }}
        />
        <p>
          This code creates a basic webpage with a navigation menu, content
          sections, an image, and a list of projects.
        </p>
        <hr />
        <h2>Key Points Recap:</h2>
        <ul>
          <li>
            <strong>HTML tags</strong> create elements that structure your web
            content.
          </li>
          <li>
            <strong>Attributes</strong> provide additional information to
            elements (e.g., <code>href</code>, <code>src</code>,{" "}
            <code>alt</code>).
          </li>
          <li>
            Use <strong>semantic HTML</strong> for meaningful content structure.
          </li>
          <li>
            <strong>CSS</strong> can be linked to HTML for styling.
          </li>
        </ul>
        <p>
          That&#39;s the foundation of HTML! You can now start experimenting and
          building your own web pages but as you can tell, the pages look very
          bland so let&apos;s get into how we can add some styling to our pages.
        </p>
        <NavigationLinks
          prevLesson={{
            slug: "/foundations/devenv",
            title: "Setting Up Your Development Environment",
          }}
          nextLesson={{
            slug: "/foundations/css",
            title: "Introduction to CSS",
          }}
        />
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
