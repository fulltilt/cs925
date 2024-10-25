import CodeHighlight from "@/app/components/CodeHighlight";
import ModuleWrapper from "@/app/components/ModuleWrapper";

export default function Reconciliation2() {
  return (
    <ModuleWrapper>
      <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
        <h1>React DOM Reconciliation</h1>
        <p>
          DOM (Document Object Model) reconciliation is a process commonly
          associated with JavaScript frameworks like React. It helps manage the
          changes that occur in a web application&#39;s UI by efficiently
          updating the DOM. Understanding how DOM reconciliation works can
          improve performance and user experience by minimizing unnecessary
          updates. Let’s dive into the basics!
        </p>
        <h2>
          1. <strong>What is the DOM?</strong>
        </h2>
        <p>
          The DOM is a programming interface for HTML and XML documents. It
          represents the structure of a web page as a tree, where each element
          (e.g., paragraphs, divs, images) is a node in this tree. JavaScript
          can interact with this structure to create, delete, or modify elements
          dynamically.
        </p>
        <h2>
          2. <strong>What is DOM Reconciliation?</strong>
        </h2>
        <p>
          DOM reconciliation is the process of updating the UI in an efficient
          way when the underlying data changes. Instead of re-rendering the
          entire page when something changes, reconciliation optimizes updates
          to only modify the parts of the DOM that have actually changed.
        </p>
        <h2>
          3. <strong>Why is DOM Reconciliation Important?</strong>
        </h2>
        <p>
          Updating the real DOM is relatively slow because it involves directly
          interacting with the document. Frequent updates can degrade
          performance, especially for complex applications. Reconciliation aims
          to:
        </p>
        <ul>
          <li>
            <strong>Minimize Repaints and Reflows</strong>: Changes in the DOM
            can trigger re-layouts (reflows) and repaints in the browser, which
            are costly operations.
          </li>
          <li>
            <strong>Optimize User Experience</strong>: By updating only the
            necessary parts of the DOM, applications remain smooth and
            responsive.
          </li>
        </ul>
        <h2>
          4. <strong>Virtual DOM: A Key Concept in Reconciliation</strong>
        </h2>
        <p>
          Many modern JavaScript frameworks, like React, use a{" "}
          <strong>Virtual DOM</strong> (VDOM) as an intermediary between the UI
          and the real DOM.
        </p>
        <ul>
          <li>
            <strong>Virtual DOM</strong>: A lightweight representation of the
            real DOM that lives in memory. It is like a copy of the real DOM.
          </li>
          <li>
            <strong>Real DOM</strong>: The actual structure rendered by the
            browser.
          </li>
        </ul>
        <p>
          When state or props change in a component, React doesn’t immediately
          update the real DOM. Instead, it updates the Virtual DOM first,
          compares the new Virtual DOM with the old one (called{" "}
          <strong>diffing</strong>), and then applies only the changes (called{" "}
          <strong>patching</strong>) to the real DOM.
        </p>
        <h2>
          5. <strong>How Reconciliation Works: A Simple Example</strong>
        </h2>
        <p>Let’s break down the reconciliation process with an example:</p>
        <ol>
          <li>
            <strong>Initial Render</strong>:
            <ul className="ml-4">
              <li>
                Imagine a simple React component that renders a{" "}
                <code>&lt;div&gt;</code> containing a list of items.
              </li>
              <li>
                When this component is first rendered, the real DOM and the
                Virtual DOM are identical.
                <CodeHighlight
                  content={`
function App() {
    return (
        <div>
            <h1>My List</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    );
}
`}
                />
              </li>
            </ul>
          </li>
          <li>
            <strong>State Change</strong>:
            <ul className="ml-4">
              <li>
                If a new item is added to the list, React updates the Virtual
                DOM.
              </li>
              <li>
                For example, when you click a button to add <code>Item 4</code>:
                <CodeHighlight
                  content={`
function App() {
    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

    const addItem = () => {
        setItems([...items, \`Item \${items.length + 1}\`]);
    };

    return (
        <div>
            <h1>My List</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={addItem}>Add Item</button>
        </div>
    );
}
`}
                />
              </li>
            </ul>
          </li>
          <li>
            <strong>Virtual DOM Update</strong>:
            <ul className="ml-4">
              <li>
                React will create a new Virtual DOM representing the updated
                state.
              </li>
              <li>
                It now contains the additional{" "}
                <code>&lt;li&gt;Item 4&lt;/li&gt;</code>.
              </li>
            </ul>
          </li>
          <li>
            <strong>Diffing</strong>:
            <ul className="ml-4">
              <li>
                React compares the previous Virtual DOM with the updated Virtual
                DOM.
              </li>
              <li>
                It finds that the only change is the addition of{" "}
                <code>Item 4</code> in the <code>&lt;ul&gt;</code>.
              </li>
            </ul>
          </li>
          <li>
            <strong>Patching</strong>:
            <ul className="ml-4">
              <li>
                React updates the real DOM by adding a new{" "}
                <code>&lt;li&gt;</code> element for <code>Item 4</code>.
              </li>
              <li>
                Only this part of the DOM is updated, rather than re-rendering
                the entire <code>&lt;ul&gt;</code> or <code>&lt;div&gt;</code>.
              </li>
            </ul>
          </li>
        </ol>
        <h2>
          6. <strong>Key Algorithms in Reconciliation</strong>
        </h2>
        <p>
          Reconciliation is powered by certain algorithms, especially in
          frameworks like React:
        </p>
        <h3>
          a. <strong>Diffing Algorithm</strong>:
        </h3>
        <ul className="ml-4">
          <li>
            The diffing algorithm identifies what has changed between the
            previous and new versions of the Virtual DOM.
          </li>
          <li>It compares nodes one by one.</li>
          <li>
            If two nodes are of different types (e.g., an{" "}
            <code>&lt;h1&gt;</code> vs. a <code>&lt;p&gt;</code>), the entire
            subtree is re-rendered.
          </li>
          <li>
            If they are of the same type (e.g., <code>&lt;ul&gt;</code> vs.{" "}
            <code>&lt;ul&gt;</code>), it compares the attributes and children,
            and updates only what has changed.
          </li>
        </ul>
        <h3>
          b. <strong>Keys in Lists</strong>:
        </h3>
        <ul className="ml-4">
          <li>
            When rendering lists in frameworks like React, using{" "}
            <strong>keys</strong> is crucial.
          </li>
          <li>
            Keys help identify which items have changed, been added, or removed.
          </li>
          <li>
            A unique key makes list updates faster by preventing unnecessary
            re-renders.
          </li>
        </ul>
        <p>
          <strong>Example:</strong>
        </p>
        <CodeHighlight
          content={`
<ul>
    {items.map((item, index) => (
        <li key={item.id}>{item.name}</li>
    ))}
</ul>

`}
        />

        <p>
          Here, <code>key=&#10100;item.id&#10101;</code> helps React understand
          which items have changed, allowing it to minimize DOM updates.
        </p>

        <h2>
          7. <strong>Best Practices for Efficient Reconciliation</strong>
        </h2>
        <ul>
          <li>
            <strong>Use Keys Properly</strong>: Always use unique keys when
            rendering lists to avoid unnecessary re-renders.
          </li>
          <li>
            <strong>Minimize Component Re-renders</strong>: Make sure components
            only re-render when necessary, which can be achieved using{" "}
            <code>useMemo</code> or <code>React.memo</code> in React.
          </li>
          <li>
            <strong>Use Pure Components</strong>: In React, Pure Components
            automatically implement a shallow comparison, helping to reduce
            re-renders when props and state don’t change.
          </li>
        </ul>
        <h2>
          8. <strong>Visualization of Reconciliation Process</strong>
        </h2>
        <p>Here’s a simplified flow of the reconciliation process:</p>
        <CodeHighlight
          content={`
[ State Change or User Interaction ]
             ↓
   [ Update Virtual DOM ]
             ↓
   [ Diff Old and New Virtual DOM ]
             ↓
   [ Identify Changes ]
             ↓
   [ Update Real DOM (Patching) ]

`}
        />
        <p>
          This process ensures that only the parts of the DOM that have changed
          are updated, making the updates more efficient.
        </p>
        <hr />
        <h2>Recap:</h2>
        <ul>
          <li>
            <strong>DOM Reconciliation</strong> is about updating only the parts
            of the DOM that have changed, making the web page perform better.
          </li>
          <li>
            <strong>Virtual DOM</strong> acts as an in-memory representation,
            allowing frameworks to compare changes and update the real DOM
            efficiently.
          </li>
          <li>
            <strong>Diffing and patching</strong> ensure minimal updates to the
            real DOM.
          </li>
          <li>
            Using <strong>unique keys</strong> for lists and optimizing
            re-renders with hooks (like <code>React.memo</code>) can further
            enhance performance.
          </li>
        </ul>
        <p>
          This tutorial provides a basic understanding of how DOM reconciliation
          works, particularly in frameworks like React. It helps developers
          build more performant and responsive web applications. Happy coding!
        </p>
      </div>
    </ModuleWrapper>
  );
}
