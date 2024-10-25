import CodeHighlight from "@/app/components/CodeHighlight";
import ModuleWrapper from "@/app/components/ModuleWrapper";

export default function Tailwind() {
  return (
    <ModuleWrapper>
      <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
        <h1>Tailwind CSS</h1>
        <p>
          Tailwind CSS is a utility-first CSS framework that enables rapid UI
          development by providing a comprehensive set of low-level utility
          classes. Unlike traditional CSS frameworks like Bootstrap, Tailwind
          doesn’t come with predefined components. Instead, it offers utility
          classes that you use directly in your HTML to style elements, allowing
          for a highly customizable design process.
        </p>
        <p>
          This tutorial will guide you through the basics of Tailwind, why it’s
          a great choice for web development, and how to get started with it.
        </p>
        <hr />
        <h2>What is Tailwind CSS?</h2>
        <p>
          Tailwind CSS is a utility-first framework that enables you to build
          custom user interfaces by applying pre-defined classes directly to
          your HTML. Instead of writing custom CSS rules, you can use utility
          classes like <code>bg-blue-500</code> for background colors,{" "}
          <code>p-4</code> for padding, <code>flex</code> for display
          properties, and more.
        </p>
        <ul>
          <li>
            <strong>Utility-First</strong>: Tailwind focuses on providing small,
            single-purpose utility classes that can be combined to build complex
            designs.
          </li>
          <li>
            <strong>Highly Customizable</strong>: It comes with a configuration
            file (<code>tailwind.config.js</code>) that allows you to customize
            every aspect of the framework to match your design requirements.
          </li>
          <li>
            <strong>Rapid Development</strong>: With Tailwind, you can build
            layouts and components quickly by applying classes directly in your
            HTML without switching between files.
          </li>
        </ul>
        <h2>Why Use Tailwind CSS?</h2>
        <p>
          Tailwind CSS has gained popularity among developers due to its unique
          approach to styling. Here are some reasons why you might choose
          Tailwind for your next project:
        </p>
        <h3>
          1. <strong>Speed of Development</strong>
        </h3>
        <ul>
          <li>
            <strong>Less Context Switching</strong>: Tailwind allows you to
            style elements directly in your HTML, reducing the need to jump back
            and forth between your HTML and CSS files.
          </li>
          <li>
            <strong>Pre-defined Utilities</strong>: With utility classes like{" "}
            <code>text-center</code>, <code>m-4</code>, and <code>border</code>,
            you don’t have to write custom CSS for common styles.
          </li>
        </ul>
        <h3>
          2. <strong>Design Consistency</strong>
        </h3>
        <ul>
          <li>
            Tailwind&#39;s utility classes help ensure consistency in your
            design. For example, using classes like <code>mt-4</code>{" "}
            (margin-top) or <code>bg-gray-200</code> ensures that spacing,
            colors, and fonts are consistent throughout your project.
          </li>
          <li>
            Using Tailwind’s configuration file, you can define custom colors,
            fonts, and spacing that match your brand, making it easy to maintain
            a unified design system.
          </li>
        </ul>
        <h3>
          3. <strong>Customizability</strong>
        </h3>
        <ul>
          <li>
            Tailwind doesn’t impose any design decisions. You can create your
            own components and designs using utility classes. This makes it
            ideal for building unique, custom-tailored designs without being
            constrained by predefined components.
          </li>
          <li>
            Tailwind&#39;s utility classes can be customized using the{" "}
            <code>tailwind.config.js</code> file, allowing you to adjust
            breakpoints, colors, spacing, and more.
          </li>
        </ul>
        <h3>
          4. <strong>Responsive Design</strong>
        </h3>
        <ul>
          <li>
            Tailwind has built-in support for responsive design with classes
            like <code>sm:</code>, <code>md:</code>, <code>lg:</code>, and{" "}
            <code>xl:</code> that make it easy to create designs that adapt to
            different screen sizes.
          </li>
        </ul>
        <h2>Setting Up Tailwind CSS</h2>
        <p>To start using Tailwind CSS, follow these steps:</p>
        <h3>
          1. <strong>Install Tailwind via npm</strong>
        </h3>
        <CodeHighlight
          content={`
npm install -D tailwindcss
npx tailwindcss init
`}
          sandboxOption={false}
        />
        <p>
          This command creates a <code>tailwind.config.js</code> file in your
          project, which you can use to customize your Tailwind setup.
        </p>
        <h3>
          2. <strong>Create a CSS File</strong>
        </h3>
        <p>
          Create a <code>styles.css</code> file and include the following:
        </p>
        <CodeHighlight
          content={`
@tailwind base;
@tailwind components;
@tailwind utilities;
`}
          sandboxOption={false}
        />
        <h3>
          3. <strong>Build Tailwind CSS</strong>
        </h3>
        <p>
          Add a build script in your <code>package.json</code>:
        </p>
        <CodeHighlight
          content={`
"scripts": {
  "build:css": "npx tailwindcss -i ./src/styles.css -o ./dist/styles.css --watch"
}
`}
          sandboxOption={false}
        />
        <p>
          Run the following command to generate your{" "}
          <code>dist/styles.css</code> file:
        </p>
        <CodeHighlight
          content={`
npm run build:css
`}
          sandboxOption={false}
        />
        <p>
          Now, you can link the generated CSS file (<code>dist/styles.css</code>
          ) in your HTML file.
        </p>
        <h2>Using Utility Classes in Tailwind</h2>
        <p>
          With Tailwind installed, you can start using utility classes directly
          in your HTML:
        </p>
        <CodeHighlight
          content={`
<div class="bg-blue-500 text-white p-4 rounded-lg">
  <h1 class="text-2xl font-bold">Hello, Tailwind!</h1>
  <p class="text-sm">This is a simple example using Tailwind CSS.</p>
</div>
`}
          sandboxOption={false}
        />
        <ul>
          <li>
            <strong>
              <code>bg-blue-500</code>
            </strong>
            : Sets the background color to a shade of blue.
          </li>
          <li>
            <strong>
              <code>text-white</code>
            </strong>
            : Sets the text color to white.
          </li>
          <li>
            <strong>
              <code>p-4</code>
            </strong>
            : Adds padding of 1rem (16px) around the element.
          </li>
          <li>
            <strong>
              <code>rounded-lg</code>
            </strong>
            : Rounds the corners of the element.
          </li>
        </ul>
        <h2>Responsive Design with Tailwind</h2>
        <p>
          Tailwind makes it easy to create responsive designs using breakpoint
          prefixes:
        </p>
        <CodeHighlight
          content={`
<div class="bg-green-400 p-4 md:p-8 lg:p-16">
  <h2 class="text-xl md:text-2xl lg:text-3xl">Responsive Design with Tailwind</h2>
  <p class="text-base md:text-lg">Adjusts size and padding based on screen size.</p>
</div>
`}
          sandboxOption={false}
        />
        <ul>
          <li>
            <strong>
              <code>md:p-8</code>
            </strong>
            : Applies <code>p-8</code> (2rem padding) when the screen is{" "}
            <code>768px</code> or wider.
          </li>
          <li>
            <strong>
              <code>lg:p-16</code>
            </strong>
            : Applies <code>p-16</code> (4rem padding) when the screen is{" "}
            <code>1024px</code> or wider.
          </li>
          <li>
            <strong>
              <code>md:text-2xl</code>
            </strong>{" "}
            and{" "}
            <strong>
              <code>lg:text-3xl</code>
            </strong>
            : Adjust the text size for medium and large screens.
          </li>
        </ul>
        <h2>Customizing Tailwind</h2>
        <p>
          To customize Tailwind’s utility classes, edit the{" "}
          <code>tailwind.config.js</code> file:
        </p>
        <CodeHighlight
          content={`
module.exports = {
  theme: {
    extend: {
      colors: {
        customBlue: '#1c92d2',
        customGreen: '#f2e863',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
      },
    },
  },
}
`}
          sandboxOption={false}
        />
        <p>In this example:</p>
        <ul>
          <li>
            <strong>
              <code>customBlue</code>
            </strong>{" "}
            and{" "}
            <strong>
              <code>customGreen</code>
            </strong>{" "}
            add custom colors to the palette.
          </li>
          <li>
            <strong>
              <code>72</code>
            </strong>{" "}
            and{" "}
            <strong>
              <code>84</code>
            </strong>{" "}
            add custom spacing options.
          </li>
        </ul>
        <p>You can now use these in your classes:</p>
        <CodeHighlight
          content={`
<div class="bg-customBlue p-72">Custom Spacing and Color</div>
`}
          sandboxOption={false}
        />
        <h2>Pros and Cons of Tailwind CSS</h2>
        <h3>
          <strong>Pros</strong>:
        </h3>
        <ul>
          <li>
            <strong>Rapid Prototyping</strong>: Tailwind enables you to quickly
            build and iterate on designs.
          </li>
          <li>
            <strong>Design Freedom</strong>: Unlike other frameworks, you’re not
            limited by predefined components.
          </li>
          <li>
            <strong>Consistency</strong>: The use of utility classes promotes a
            consistent design language.
          </li>
          <li>
            <strong>Responsive Design</strong>: It’s easy to adapt your designs
            for different screen sizes using Tailwind&#39;s responsive classes.
          </li>
        </ul>
        <h3>
          <strong>Cons</strong>:
        </h3>
        <ul>
          <li>
            <strong>Verbose HTML</strong>: Tailwind’s approach can lead to HTML
            that is cluttered with classes, making it harder to read.
          </li>
          <li>
            <strong>Learning Curve</strong>: Understanding how to compose
            designs using utility classes might be challenging for beginners who
            are used to traditional CSS.
          </li>
          <li>
            <strong>Dependency on Configuration</strong>: For customizations,
            you need to work within the <code>tailwind.config.js</code> file,
            which can become complex.
          </li>
        </ul>
        <h2>Conclusion</h2>
        <p>
          Tailwind CSS offers a powerful and flexible approach to styling that
          enables developers to build custom designs rapidly. Its utility-first
          approach encourages consistency and provides a highly customizable way
          to style your projects. With responsive utilities, easy configuration,
          and a focus on speed, Tailwind has become a favorite among developers
          looking for a modern alternative to traditional CSS frameworks.
        </p>
        <p>
          Whether you’re a beginner or a seasoned developer, Tailwind CSS can
          streamline your workflow and empower you to create stunning,
          responsive websites with ease.
        </p>
      </div>
    </ModuleWrapper>
  );
}
