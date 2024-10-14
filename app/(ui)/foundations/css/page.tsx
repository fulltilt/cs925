import CodeHighlight from "@/app/components/CodeHighlight";
import NavigationLinks from "@/app/components/NavigationLinks";

export default function CSS() {
  return (
    <div className="flex max-w-[70ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
      <h1>CSS</h1>
      <p>
        CSS (Cascading Style Sheets) is used to control the appearance of HTML
        elements on a web page. It allows you to add colors, fonts, layouts, and
        more, making your website look attractive and professional. Let’s go
        through a tutorial that covers the basics.
      </p>
      <h2>
        1. <strong>What is CSS?</strong>
      </h2>
      <p>
        CSS is used to style HTML content. A typical CSS rule consists of a
        selector and a set of declarations.
      </p>
      <h3>Example:</h3>
      <h1 style={{ color: "blue", fontSize: "36px" }}>This is a header</h1>
      <CodeHighlight
        content={`
h1 {
    color: blue;
    font-size: 36px;
}
`}
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
        simple for quick changes. (NOTE: For the examples on this page, we're
        using inline styles.)
      </p>
      <h3>Example:</h3>
      <CodeHighlight
        content={`
<h1 style="color: red;">This is a red heading</h1>
`}
      />
      <h3>
        b. <strong>Internal CSS</strong>
      </h3>
      <p>
        Internal CSS is written within a <code>&lt;style&gt;</code> tag inside
        the <code>&lt;head&gt;</code> section of an HTML document.
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
      />
      <h3>
        c. <strong>External CSS</strong>
      </h3>
      <p>
        External CSS involves creating a separate <code>.css</code> file and
        linking it to the HTML document using a <code>&lt;link&gt;</code> tag.
        This method is preferred for larger websites.
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
      />
      <h2>
        3. <strong>CSS Selectors</strong>
      </h2>
      <p>
        CSS selectors target HTML elements to apply styles. Here are some common
        selectors:
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
      />
      <p>
        This will style all <code>&lt;h1&gt;</code> elements with blue text.
      </p>
      <h3>
        b. <strong>Class Selector</strong>
      </h3>
      <p>
        Selects elements with a specific class attribute. Class selectors use a
        period (<code>.</code>).
      </p>
      <h3>Example:</h3>
      <CodeHighlight
        content={`
.red-text {
    color: red;
}
`}
      />
      <p>Apply this class in HTML:</p>
      <CodeHighlight
        content={`
<p class="red-text">This text is red.</p>
`}
      />
      <h3>
        c. <strong>ID Selector</strong>
      </h3>
      <p>
        Selects a single element with a specific ID attribute. ID selectors use
        a hash (<code>#</code>).
      </p>
      <h3>Example:</h3>
      <CodeHighlight
        content={`
#main-title {
    font-size: 24px;
}
`}
      />
      <p>Apply this ID in HTML</p>
      <CodeHighlight
        content={`
<h1 id="main-title">This is the main title</h1>
`}
      />
      <h3>
        d. <strong>Universal Selector</strong>
      </h3>
      <p>Selects all elements.</p>
      <h3>Example:</h3>
      <CodeHighlight
        content={`
* {
    margin: 0;
    padding: 0;
}
`}
      />
      <p>This will remove default margins and padding from all elements.</p>
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
      />
      <p>
        This targets <code>&lt;input&gt;</code> elements with{" "}
        <code>type=&quot;text&quot;</code>.
      </p>
      <h2 id="4-css-properties-">
        4. <strong>CSS Properties</strong>
      </h2>
      <p>CSS properties define what aspect of an element you want to style.</p>
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
          <code>font-family</code>: Sets the font style (e.g., Arial, Verdana).
        </li>
        <li>
          <code>text-align</code>: Aligns text (e.g., <code>left</code>,{" "}
          <code>center</code>, <code>right</code>).
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
      />
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
p {
    color: darkgray;
    font-size: 18px;
    font-family: Arial, sans-serif;
    text-align: center;
}
`}
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
    background-color: #f0f0f0;
    background-image: url('background.jpg');
    background-size: cover;
}
`}
      />
      <h3>
        c. <strong>Box Model Properties</strong>
      </h3>
      <p>
        The box model is a fundamental concept in CSS that includes margins,
        borders, padding, and content.
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
      />
      <h2>
        5. <strong>CSS Layouts</strong>
      </h2>
      <p>
        CSS helps in creating responsive layouts. Two common layout techniques
        are <code>flexbox</code> and <code>grid</code>.
      </p>
      <h3>
        a. <strong>Flexbox</strong>
      </h3>
      <p>Flexbox is used for designing flexible layout structures.</p>
      <h3>Example:</h3>
      <CodeHighlight
        content={`
.container {
    display: flex;
    justify-content: space-between;
}
`}
      />
      <ul>
        <li>
          <code>display: flex</code>: Turns an element into a flex container.
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
        structures.
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
      />
      <h2>
        7. <strong>Responsive Design with Media Queries</strong>
      </h2>
      <p>
        Media queries allow you to make your website responsive, adjusting
        styles for different screen sizes.
      </p>
      <h3>Example:</h3>
      <CodeHighlight
        content={`
@media (max-width: 600px) {
    body {
        background-color: lightcoral;
    }
}
`}
      />
      <p>
        This example changes the background color to light coral on screens that
        are 600px wide or smaller.
      </p>
      <h2>
        8. <strong>Complete Example</strong>
      </h2>
      <p>Here’s a simple HTML and CSS example that ties everything together:</p>
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
        Now you’re ready to start creating beautiful web pages using CSS! Feel
        free to experiment with different properties and layouts.
      </p>
      <NavigationLinks
        prevLesson={{
          slug: "/foundations/html",
          title: "Introduction to HTML",
        }}
        nextLesson={{
          slug: "/foundations/js",
          title: "Introduction to JavaScript",
        }}
      />
    </div>
  );
}
