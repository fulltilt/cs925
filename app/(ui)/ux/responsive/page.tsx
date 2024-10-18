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
        <h1>Responsive Web Design</h1>
        <p>
          <strong>Responsive Web Design</strong> (RWD) is an approach that
          ensures your web pages look good and function well on a variety of
          devices, from small screens like smartphones to larger screens like
          desktop monitors. The goal is to provide a consistent and optimized
          user experience across different screen sizes, resolutions, and
          orientations.
        </p>
        <p>
          This tutorial will introduce you to the core concepts and techniques
          of responsive web design, covering <strong>media queries</strong>,{" "}
          <strong>flexible layouts</strong>, <strong>responsive images</strong>,
          and more.
        </p>
        <hr />
        <h2>What is Responsive Web Design?</h2>
        <p>
          Responsive Web Design is a design approach where a website is built to{" "}
          <strong>adapt</strong> to the user&#39;s screen size and device
          orientation, providing a seamless browsing experience. Rather than
          creating separate designs for different devices, RWD allows a single
          layout to adjust itself using <strong>fluid grids</strong>,{" "}
          <strong>media queries</strong>, and <strong>flexible images</strong>.
        </p>
        <h2>Why is Responsive Design Important?</h2>
        <ul>
          <li>
            <strong>Increased Mobile Traffic</strong>: More users are accessing
            websites on mobile devices than ever before. Responsive design
            ensures that your website looks good on any screen.
          </li>
          <li>
            <strong>Improved User Experience</strong>: Consistent navigation and
            content layout across devices help users interact more comfortably
            with your site.
          </li>
          <li>
            <strong>SEO Benefits</strong>: Google prioritizes mobile-friendly
            websites in search rankings, so responsive design can improve your
            website’s visibility.
          </li>
          <li>
            <strong>Cost-Efficient</strong>: Instead of maintaining separate
            websites for mobile and desktop, you only have one site to manage.
          </li>
        </ul>
        <hr />
        <h2>Fluid Grid Layouts</h2>
        <p>
          A <strong>fluid grid layout</strong> allows web elements to resize
          proportionally, rather than relying on fixed widths. Instead of using
          fixed pixels (<code>px</code>),{" "}
          <strong>percentage-based units</strong> (<code>%</code>) are used for
          widths, allowing elements to scale relative to their parent container.
        </p>
        <h3>Example: Fluid Grid with Percentage Widths</h3>
        <CodeHighlight
          content={`
.container {
    width: 100%; /* Container spans full width */
    display: flex;
    flex-wrap: wrap; /* Items wrap to a new row if needed */
}

.item {
    flex: 1 1 45%; /* Takes 45% of the width of the container */
    margin: 2%; /* Adds space between items */
    box-sizing: border-box; /* Includes padding in width calculations */
}
`}
          sandboxOption={false}
        />
        <CodeHighlight
          content={`
<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
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
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
</div>
`,
            css: `
.container {
    width: 100%; /* Container spans full width */
    display: flex;
    flex-wrap: wrap; /* Items wrap to a new row if needed */
}

.item {
    flex: 1 1 45%; /* Takes 45% of the width of the container */
    margin: 2%; /* Adds space between items */
    box-sizing: border-box; /* Includes padding in width calculations */
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
            Using <code>flex</code> with percentage widths and{" "}
            <code>flex-wrap</code> ensures that the items adjust to the
            available width and wrap when necessary.
          </li>
          <li>
            The <code>box-sizing: border-box</code> property ensures padding and
            borders are included in the element&#39;s width, preventing
            overflow.
          </li>
        </ul>
        <hr />
        <h2>Media Queries</h2>
        <p>
          <strong>Media queries</strong> allow you to apply CSS styles based on
          the properties of the user’s device, such as screen width, height,
          resolution, and orientation. They are fundamental to creating
          responsive layouts.
        </p>
        <h3>Example: Media Queries for Different Screen Sizes</h3>
        <CodeHighlight
          content={`
/* Default styles for mobile-first design */
body {
    font-size: 16px;
}

.container {
    display: flex;
    flex-direction: column;
}

/* For tablets and larger devices */
@media (min-width: 768px) {
    .container {
        flex-direction: row; /* Display items in a row on larger screens */
    }
}

/* For desktops and larger devices */
@media (min-width: 1024px) {
    .item {
        flex: 1 1 30%; /* More items can fit in a row */
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
            <strong>Mobile-First Approach</strong>: Start with styles optimized
            for small screens, then use <code>min-width</code> media queries to
            adjust styles for larger screens.
          </li>
          <li>
            <strong>Flexible Layouts</strong>: As the screen width increases,
            the layout changes from a vertical column to a horizontal row.
          </li>
        </ul>
        <hr />
        <h2>Flexible Images</h2>
        <p>
          Images need to scale properly to maintain a responsive design. This is
          achieved using <strong>max-width</strong> and <strong>height</strong>{" "}
          properties.
        </p>
        <h3>
          Example: Responsive Images (with sandbox open, resize window to see
          image rescale)
        </h3>
        <CodeHighlight
          content={`
img {
    max-width: 100%; /* Image will scale down to fit its container */
    height: auto; /* Maintains aspect ratio */
}
`}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          set_html_arg={set_html_arg}
          set_css_arg={set_css_arg}
          set_js_arg={set_js_arg}
          args={{
            html: `
<img src="/tree.jpg"/>
`,
            css: `
img {
    max-width: 100%; /* Image will scale down to fit its container */
    height: auto; /* Maintains aspect ratio */
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
            <code>max-width: 100%</code> ensures that the image scales down if
            the container is smaller than the image’s natural size, but it
            won&#39;t scale up beyond its original size.
          </li>
          <li>
            <code>height: auto</code> ensures that the image maintains its
            aspect ratio while resizing.
          </li>
        </ul>
        <hr />
        <h2>Using Flexbox and CSS Grid for Responsiveness</h2>
        <p>
          Both <strong>Flexbox</strong> and <strong>CSS Grid</strong> are
          powerful layout tools that are well-suited for creating responsive
          layouts.
        </p>
        <h3>Example: Using Flexbox for Responsive Navigation</h3>
        <CodeHighlight
          content={`
.navbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.menu-item {
    flex: 1 1 auto;
    padding: 10px;
}

@media (max-width: 600px) {
    .navbar {
        flex-direction: column; /* Stacks items vertically on smaller screens */
    }
}
`}
          sandboxOption={false}
        />
        <h3>Example: Using CSS Grid for Responsive Layouts</h3>
        <CodeHighlight
          content={`
.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
    gap: 10px;
}

@media (min-width: 768px) {
    .grid-container {
        grid-template-columns: repeat(4, 1fr); /* 4 columns for larger screens */
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
            <strong>Flexbox</strong> is great for aligning items along a single
            axis (row or column).
          </li>
          <li>
            <strong>CSS Grid</strong> allows for more complex, two-dimensional
            layouts.
          </li>
          <li>
            Combining both gives you flexibility and control over how elements
            adjust across screen sizes.
          </li>
        </ul>
        <hr />
        <h2>Best Practices</h2>
        <ul>
          <li>
            <strong>Use a Mobile-First Approach</strong>: Start with styles for
            the smallest screens and add styles for larger screens using media
            queries.
          </li>
          <li>
            <strong>Minimize Content for Small Screens</strong>: Focus on the
            most important content for mobile users and add more as the screen
            size increases.
          </li>
          <li>
            <strong>Test on Real Devices</strong>: Always test your design on
            multiple devices and screen sizes.
          </li>
          <li>
            <strong>
              Use <code>em</code> or <code>rem</code> for Font Sizes
            </strong>
            : These units scale better across different devices compared to
            fixed <code>px</code> units.
          </li>
        </ul>
        <hr />
        <h2>Conclusion</h2>
        <p>
          Responsive Web Design is essential in today&#39;s world where users
          access websites from a wide range of devices. By using fluid layouts,
          media queries, and responsive images, you can create websites that
          adapt to any screen size.
        </p>
        <p>
          With tools like <strong>Flexbox</strong> and <strong>CSS Grid</strong>
          , you can further control the layout in a flexible way, making it easy
          to design layouts that adjust beautifully from mobile to desktop. This
          approach ensures that users have a smooth experience, no matter how
          they access your site.
        </p>
        <p>
          Embrace the flexibility of responsive web design, and you&#39;ll be
          able to build websites that look and work great everywhere!
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
