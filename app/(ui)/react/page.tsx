import CodeHighlight from "@/app/components/CodeHighlight";
import ModuleWrapper from "@/app/components/ModuleWrapper";
import Link from "next/link";

export default function () {
  return (
    <ModuleWrapper>
      <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
        <h1>Introduction to React</h1>
        <p>
          React is a <strong>JavaScript library</strong> for building user
          interfaces, created and maintained by Meta (formerly Facebook). It is
          widely used for developing{" "}
          <strong>single-page applications (SPAs)</strong>, where the user
          interface is updated dynamically without needing to reload the entire
          page. React is popular because of its{" "}
          <strong>component-based architecture</strong>,{" "}
          <strong>virtual DOM</strong>, and <strong>declarative</strong> style,
          which makes building complex user interfaces simpler and more
          efficient.
        </p>
        <hr />
        <h2>What is React?</h2>
        <p>
          React is a <strong>JavaScript library</strong> for building user
          interfaces. It allows you to create{" "}
          <strong>reusable UI components</strong>, manage the{" "}
          <strong>state</strong> of your application, and render updates
          efficiently using a <strong>virtual DOM</strong>. React can be used to
          build entire front-end applications or integrated into existing
          projects.
        </p>
        <hr />
        <h2>Why Use React?</h2>
        <ul>
          <li>
            <strong>Component-Based</strong>: Build encapsulated components that
            manage their own state, making your UI easier to maintain.
          </li>
          <li>
            <strong>Declarative</strong>: React makes it easy to build
            interactive UIs. You design simple views for each state in your
            application, and React updates and renders the right components as
            data changes.
          </li>
          <li>
            <strong>Virtual DOM</strong>: React uses a virtual representation of
            the DOM, allowing it to update the UI efficiently without directly
            manipulating the browser&#39;s DOM.
          </li>
          <li>
            <strong>Ecosystem</strong>: With tools like React Router for
            navigation and Redux for state management, React offers a rich
            ecosystem that can scale with your application&#39;s needs.
          </li>
        </ul>
        <hr />
        <h2>Setting Up a React Project</h2>
        <p>
          To create a new React app, the two most popular ways are through
          NextJS or through Vite. Previously, you used
          <strong>Create React App (CRA)</strong>, but that has since been
          deprecated. Either Vite or NextJS are excellent options but for
          learning purposes, since these initial apps are relatively small, you
          can stick to Vite as it's more lightweight and is less opinionated.
        </p>
        <h3>Using Vite to create a new project</h3>
        <ol>
          <li>
            Make sure you have <strong>Node.js</strong> and <strong>npm</strong>{" "}
            installed. You can check by running:
            <CodeHighlight
              content={`
node -v
npm -v
`}
              sandboxOption={false}
            />
          </li>
          <li>
            Create a new React app using CRA:
            <CodeHighlight
              content={`
npm create vite@latest
`}
              sandboxOption={false}
            />
          </li>
          <li>
            For the options, enter any project name, select{" "}
            <strong>React</strong> for the framework and for the variant, select{" "}
            <strong>JavaScript</strong>. Eventually, we'll get to{" "}
            <strong>TypeScript</strong> but we'll keep things simple.
          </li>
          <li>
            After Vite finishes installation, Vite will output the commands to
            enter to run your new project.
          </li>
          <li>
            Open <code>http://localhost:3000</code> in your browser, and
            you&#39;ll see the default Vite welcome page.
          </li>
        </ol>
        <hr />
        <h2>React Components</h2>
        <p>
          <strong>Components</strong> are the building blocks of a React
          application. A React app is typically a collection of components that
          work together to create the user interface. There are two main types
          of components:
        </p>
        <ul>
          <li>
            <strong>Functional Components</strong>: Functions that return React
            elements (JSX).
          </li>
          <li>
            <strong>Class Components</strong>: ES6 classes that extend{" "}
            <code>React.Component</code> (less common with the introduction of
            hooks).
          </li>
        </ul>
        <h3>Example: Functional Component</h3>
        <CodeHighlight
          content={`
import React from 'react';

function Welcome() {
    return <h1>Hello, React!</h1>;
}

export default Welcome;
`}
          sandboxOption={false}
        />
        <h3>Example: Class Component</h3>
        <CodeHighlight
          content={`
import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return <h1>Hello, React!</h1>;
    }
}

export default Welcome;
`}
          sandboxOption={false}
        />
        <hr />
        <h2>JSX: JavaScript XML</h2>
        <p>
          <strong>JSX</strong> is a syntax extension for JavaScript that looks
          similar to HTML but is used with React to describe what the UI should
          look like. It makes the code easier to read and write, as it allows
          you to combine JavaScript logic with UI structure.
        </p>
        <h3>Example: Using JSX</h3>
        <CodeHighlight
          content={`
const element = <h1>Hello, world!</h1>;
`}
          sandboxOption={false}
        />
        <p>
          JSX allows you to write HTML-like code within JavaScript, making it
          easier to visualize the structure of your components.
        </p>
        <hr />
        <h2>State and Props</h2>
        <p>
          <strong>State</strong> and <strong>Props</strong> are essential
          concepts in React, allowing you to create dynamic and reusable
          components.
        </p>
        <ul>
          <li>
            <strong>Props</strong>: Short for &quot;properties,&quot; props are{" "}
            <strong>read-only</strong> data passed from a parent component to a
            child component.
          </li>
          <li>
            <strong>State</strong>: State is <strong>mutable</strong> and is
            managed within the component. State allows components to react to
            user inputs, form changes, or any other events.
          </li>
        </ul>
        <h3>Example: Using Props</h3>
        <CodeHighlight
          content={`
function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}

export default function App() {
    return <Greeting name="Alice" />;
}
`}
          sandboxOption={false}
        />
        <p>
          In this example, the <code>Greeting</code> component receives the{" "}
          <code>name</code> prop and displays &quot;Hello, Alice!&quot;.
        </p>
        <h3>
          Example: Using State with <code>useState</code> Hook
        </h3>
        <CodeHighlight
          content={`
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default Counter;
`}
          sandboxOption={false}
        />
        <p>
          Here, <code>useState</code> is a <strong>hook</strong> that lets you
          add state to functional components. The <code>count</code> variable
          holds the state, and <code>setCount</code> updates it.
        </p>
        <p>
          <em>
            (NOTE: before hooks was introduced in React 16.8, things were done
            through class based components and lifecycle methods were used.{" "}
            <Link href="/react/old">This module</Link> briefly goes over this
            and it's something to be aware of as you may encounter older cold
            out in the wild.
          </em>
        </p>
        <hr />
        <h2>Handling Events</h2>
        <p>
          React allows you to handle user input and browser events using{" "}
          <strong>event handlers</strong>. Event handlers in React are similar
          to those in plain JavaScript but use <strong>camelCase</strong> and{" "}
          <strong>JSX syntax</strong>.
        </p>
        <h3>Example: Handling a Click Event</h3>
        <CodeHighlight
          content={`
function App() {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return <button onClick={handleClick}>Click Me</button>;
}

export default App;
`}
          sandboxOption={false}
        />
        <p>
          In this example, the <code>handleClick</code> function is triggered
          when the button is clicked, showing an alert message.
        </p>
        <hr />
        <h2>Example: Building a Counter</h2>
        <p>Let&#39;s combine the concepts into a simple counter app:</p>
        <CodeHighlight
          content={`
import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default App;
`}
          sandboxOption={false}
          externalSandboxUrl={"https://codesandbox.io/p/sandbox/jlsf9p"}
        />
        <p>In this example:</p>
        <ul>
          <li>
            We use <code>useState</code> to manage the <code>count</code>.
          </li>
          <li>
            Two buttons call <code>increment</code> and <code>decrement</code>{" "}
            functions, updating the count.
          </li>
          <li>
            The current count is displayed in an <code>&lt;h1&gt;</code>{" "}
            element.
          </li>
        </ul>
        <hr />
        <h2>Conclusion</h2>
        <p>In this tutorial, we covered the basics of React:</p>
        <ul>
          <li>What React is and why it&#39;s popular.</li>
          <li>
            Setting up a React project using <strong>Create React App</strong>.
          </li>
          <li>
            Understanding <strong>components</strong>, <strong>JSX</strong>,{" "}
            <strong>state</strong>, and <strong>props</strong>.
          </li>
          <li>Handling events to make interactive components.</li>
        </ul>
        <p>
          With these foundational concepts, you can start building simple React
          applications. As you get comfortable with the basics, you can explore
          more advanced topics like <strong>React Router</strong>,{" "}
          <strong>context API</strong>, <strong>hooks</strong>, and{" "}
          <strong>state management</strong> libraries like{" "}
          <strong>Redux</strong>.
        </p>
      </div>
    </ModuleWrapper>
  );
}
