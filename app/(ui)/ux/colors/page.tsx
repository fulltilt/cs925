"use client";

import CodeEditor from "@/app/components/CodeEditor";
import CodeHighlight from "@/app/components/CodeHighlight";
import ModuleWrapperClient from "@/app/components/ModuleWrapperClient";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
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
          <h1>Colors</h1>
          <p>
            Colors play a vital role in web design, influencing aesthetics,
            brand perception, and user experience. Using the right colors can
            make a website visually appealing and help communicate its message
            effectively. This tutorial will cover the basics of color theory,
            different types of color codes used in web design, tools for
            choosing colors, and practical tips for applying colors in web
            design.
          </p>
          <hr />
          <h2>Why Colors Matter in Web Design</h2>
          <p>
            Colors can evoke emotions, convey messages, and influence user
            behavior. Effective use of colors can:
          </p>
          <ul>
            <li>
              <strong>Enhance usability</strong>: Colors can improve readability
              and guide users to important content.
            </li>
            <li>
              <strong>Establish branding</strong>: Colors help create a
              recognizable brand identity.
            </li>
            <li>
              <strong>Set the mood</strong>: Different colors convey different
              emotions and atmospheres.
            </li>
            <li>
              <strong>Improve accessibility</strong>: Choosing the right color
              contrast ensures that content is readable for everyone, including
              users with visual impairments.
            </li>
          </ul>
          <h2>Understanding Color Theory</h2>
          <p>
            Color theory is a framework for understanding how colors interact.
            It helps designers create balanced and visually pleasing color
            palettes. Here are some key concepts:
          </p>
          <ul>
            <li>
              <strong>Color Wheel</strong>: A circular arrangement of colors
              that shows the relationship between primary (red, blue, yellow),
              secondary (green, orange, purple), and tertiary colors.
            </li>
            <li>
              <strong>Complementary Colors</strong>: Colors opposite each other
              on the color wheel (e.g., red and green). They create a
              high-contrast, vibrant look when used together.
            </li>
            <li>
              <strong>Analogous Colors</strong>: Colors next to each other on
              the color wheel (e.g., blue, blue-green, green). They create a
              harmonious and cohesive look.
            </li>
            <li>
              <strong>Triadic Colors</strong>: Colors evenly spaced around the
              color wheel (e.g., red, blue, yellow). They offer a balanced yet
              colorful palette.
            </li>
            <li>
              <strong>Monochromatic Colors</strong>: Different shades, tints,
              and tones of a single color. This approach provides a clean,
              elegant look.
            </li>
          </ul>
          <h2>Types of Color Codes</h2>
          <p>
            In web design, colors can be represented in different ways using
            CSS. Here are the most common formats:
          </p>
          <h3>
            1.{" "}
            <strong>
              Hexadecimal (<code>#hex</code>)
            </strong>
          </h3>
          <p>
            Hex codes use a combination of six characters (0-9, A-F) to
            represent colors. They are the most commonly used in web design.
          </p>
          <CodeHighlight
            content={`
background-color: #3498db; /* Light blue */
color: #ffffff; /* White */
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
`,
              css: `
body {            
  background-color: #3498db; /* Light blue */
  color: #ffffff; /* White */
}
`,
              js: ``,
            }}
          />
          <h3>
            2.{" "}
            <strong>
              RGB (<code>rgb()</code>)
            </strong>
          </h3>
          <p>
            RGB stands for Red, Green, and Blue. Each value ranges from 0 to
            255, specifying the intensity of each color.
          </p>
          <CodeHighlight
            content={`
background-color: rgb(52, 152, 219); /* Light blue */
color: rgb(255, 255, 255); /* White */
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>`,
              css: `
body {
  background-color: rgb(52, 152, 219); /* Light blue */
  color: rgb(255, 255, 255); /* White */
}
`,
              js: ``,
            }}
          />
          <h3>
            3.{" "}
            <strong>
              RGBA (<code>rgba()</code>)
            </strong>
          </h3>
          <p>
            RGBA is similar to RGB but includes an alpha channel, which
            specifies the opacity (0 is fully transparent, 1 is fully opaque).
          </p>
          <CodeHighlight
            content={`
background-color: rgba(52, 152, 219, 0.5); /* 50% opacity */
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>`,
              css: `
body {
  background-color: rgba(52, 152, 219, 0.5); /* 50% opacity */
}
`,
              js: ``,
            }}
          />
          <h3>
            4.{" "}
            <strong>
              HSL (<code>hsl()</code>)
            </strong>
          </h3>
          <p>
            HSL stands for Hue, Saturation, and Lightness. It’s more intuitive
            for designers since it describes colors in terms of their tint and
            shade.
          </p>
          <CodeHighlight
            content={`
background-color: hsl(204, 70%, 53%); /* Light blue */
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>`,
              css: `
body {
  background-color: hsl(204, 70%, 53%); /* Light blue */
}
`,
              js: ``,
            }}
          />
          <h3>
            5.{" "}
            <strong>
              HSLA (<code>hsla()</code>)
            </strong>
          </h3>
          <p>
            HSLA includes an alpha channel for transparency, similar to{" "}
            <code>rgba</code>.
          </p>
          <CodeHighlight
            content={`
background-color: hsla(204, 70%, 53%, 0.5); /* Light blue with 50% opacity */
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>`,
              css: `
body {
  background-color: hsla(204, 70%, 53%, 0.5); /* Light blue with 50% opacity */
}
`,
              js: ``,
            }}
          />
          <h2>Tools for Choosing Colors</h2>
          <p>
            There are several online tools that help you choose and generate
            color palettes for web design:
          </p>
          <ul>
            <li>
              <strong>Adobe Color</strong>: Allows you to create and explore
              color schemes based on color theory.
            </li>
            <li>
              <strong>Coolors</strong>: A popular tool for generating color
              palettes quickly.
            </li>
            <li>
              <strong>Colorzilla</strong>: A browser extension that lets you
              pick colors from any website.
            </li>
            <li>
              <strong>Google Material Design Colors</strong>: Provides color
              guidelines and palettes for web design.
            </li>
          </ul>
          <h2>Using Colors in CSS</h2>
          <p>
            Colors can be applied to different parts of a web page using CSS.
            Here are some common properties:
          </p>
          <h3>
            1. <strong>Text Color</strong>
          </h3>
          <p>
            Set the color of text using the <code>color</code> property.
          </p>
          <CodeHighlight
            content={`
h1 {
    color: #2c3e50; /* Dark blue */
}

p {
    color: rgb(44, 62, 80); /* Dark blue */
}
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `
<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
`,
              css: `
h1 {
    color: #2c3e50; /* Dark blue */
}

p {
    color: rgb(44, 62, 80); /* Dark blue */
}
`,
              js: ``,
            }}
          />
          <h3>
            2. <strong>Background Color</strong>
          </h3>
          <p>
            Set the background color of an element using{" "}
            <code>background-color</code>.
          </p>
          <CodeHighlight
            content={`
body {
    background-color: #ecf0f1; /* Light gray */
}

button {
    background-color: #e74c3c; /* Red */
    color: white; /* White text */
}
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `
<button>Lorem ipsum</button>
`,
              css: `
body {
    background-color: #ecf0f1; /* Light gray */
}

button {
    background-color: #e74c3c; /* Red */
    color: white; /* White text */
}
`,
              js: ``,
            }}
          />
          <h3>
            3. <strong>Borders</strong>
          </h3>
          <p>
            Set the color of borders using the <code>border-color</code>{" "}
            property.
          </p>
          <CodeHighlight
            content={`
div {
    border: 2px solid #3498db; /* Light blue border */
}
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `
<div>Lorem ipsum dolor</div>
`,
              css: `
div {
    border: 2px solid #3498db; /* Light blue border */
}
`,
              js: ``,
            }}
          />
          <h3>
            4. <strong>Gradients</strong>
          </h3>
          <p>
            Create gradients using <code>linear-gradient</code> or{" "}
            <code>radial-gradient</code>.
          </p>
          <CodeHighlight
            content={`
button {
    background: linear-gradient(to right, #3498db, #9b59b6); /* Blue to purple gradient */
    color: white;
}
`}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            set_html_arg={set_html_arg}
            set_css_arg={set_css_arg}
            set_js_arg={set_js_arg}
            args={{
              html: `<button>Lorem ipsum</button>`,
              css: `
button {
    background: linear-gradient(to right, #3498db, #9b59b6); /* Blue to purple gradient */
    color: white;
}
`,
              js: ``,
            }}
          />
          <h2>Practical Tips for Using Colors in Web Design</h2>
          <h3>
            1. <strong>Use a Limited Color Palette</strong>
          </h3>
          <p>
            Limit your palette to 3-5 colors to keep your design clean and
            cohesive:
          </p>
          <ul>
            <li>
              <strong>Primary color</strong>: Main brand color.
            </li>
            <li>
              <strong>Secondary color</strong>: Used for accents and emphasis.
            </li>
            <li>
              <strong>Neutral colors</strong>: Grays, blacks, and whites for
              backgrounds and text.
            </li>
            <li>
              <strong>Accent colors</strong>: Highlights or call-to-action
              buttons.
            </li>
          </ul>
          <h3>
            2. <strong>Focus on Readability</strong>
          </h3>
          <p>
            Ensure that there’s enough contrast between text and background
            colors. Use tools like the{" "}
            <a href="https://webaim.org/resources/contrastchecker/">
              WebAIM Contrast Checker
            </a>{" "}
            to check your color contrast ratios.
          </p>
          <h3>
            3. <strong>Think About Accessibility</strong>
          </h3>
          <ul>
            <li>
              Use color to supplement information, not as the only indicator
              (e.g., use icons or labels for error messages, not just red).
            </li>
            <li>
              Include <code>:focus</code> and <code>:hover</code> styles to make
              interactive elements accessible to keyboard users.
            </li>
          </ul>
          <h3>
            4. <strong>Use Consistent Branding</strong>
          </h3>
          <p>
            Stick to colors that align with your brand’s identity. Use the same
            shades and tints across different sections of the website to
            maintain consistency.
          </p>
          <h3>
            5. <strong>Emphasize Calls to Action (CTAs)</strong>
          </h3>
          <p>
            Use contrasting colors for buttons and links to make CTAs stand out.
            For example, a bright orange button on a muted background will draw
            attention.
          </p>
          <h2>Conclusion</h2>
          <p>
            Color is a powerful tool in web design that can enhance the user
            experience, communicate messages, and create a memorable visual
            identity. By understanding color theory, using appropriate CSS
            properties, and applying practical design principles, you can create
            visually appealing and user-friendly websites. Experiment with
            different colors and see how they impact the mood and functionality
            of your design.
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
