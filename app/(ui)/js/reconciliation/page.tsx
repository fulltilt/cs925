import CodeHighlight from "@/app/components/CodeHighlight";
import ModuleWrapper from "@/app/components/ModuleWrapper";

export default function Reconciliation1() {
  return (
    <ModuleWrapper>
      <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
        <h1>DOM Reconciliation with Vanilla JavaScript</h1>
        <p>
          <em>
            (NOTE: this is a more advanced and isn&apos;t necessary to learn as
            a beginner but it&apos;s good to know what modern day frameworks are
            doing under the hood.)
          </em>
        </p>
        <p>
          Unlike modern JavaScript frameworks like React, vanilla JavaScript
          doesn&#39;t have built-in support for Virtual DOM or reconciliation.
          However, we can implement a basic version of reconciliation ourselves
          to understand how it works under the hood. This involves managing
          changes to the DOM in a more efficient way, rather than directly
          manipulating the DOM every time something changes.
        </p>
        <h2>
          1. <strong>What is the DOM?</strong>
        </h2>
        <p>
          The DOM (Document Object Model) is the representation of an HTML
          document as a tree structure. Each element in the document (like{" "}
          <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>,{" "}
          <code>&lt;ul&gt;</code>, etc.) becomes a node in this tree. JavaScript
          can be used to manipulate these nodes to dynamically update content,
          change attributes, and more.
        </p>
        <h2>
          2. <strong>What is DOM Reconciliation?</strong>
        </h2>
        <p>
          DOM reconciliation refers to the process of efficiently updating the
          DOM when there are changes in the data or state of an application.
          Instead of re-rendering the entire DOM tree when something changes,
          reconciliation involves:
        </p>
        <ul>
          <li>
            Creating a lightweight representation of the UI (similar to a
            Virtual DOM).
          </li>
          <li>Comparing the old and new states.</li>
          <li>
            Applying only the changes to the real DOM, minimizing the number of
            updates.
          </li>
        </ul>
        <h2>
          3. <strong>Why Use Reconciliation in Vanilla JavaScript?</strong>
        </h2>
        <p>
          Directly updating the real DOM can be slow, especially for large
          applications with many elements. Reconciliation can:
        </p>
        <ul>
          <li>
            <strong>Minimize DOM Manipulations</strong>: Reducing the number of
            direct DOM updates results in fewer reflows and repaints.
          </li>
          <li>
            <strong>Improve Performance</strong>: By changing only what&#39;s
            necessary, the UI remains smooth and responsive.
          </li>
        </ul>
        <h2>
          4.{" "}
          <strong>
            Implementing a Simple Virtual DOM in Vanilla JavaScript
          </strong>
        </h2>
        <p>
          To understand reconciliation, let&#39;s build a basic example of a
          Virtual DOM and a diffing algorithm in vanilla JavaScript.
        </p>
        <h3>
          a. <strong>Representing the Virtual DOM</strong>
        </h3>
        <p>We&#39;ll create a simple structure to represent a Virtual DOM:</p>
        <CodeHighlight
          content={`
function createElement(type, props, ...children) {
    return {
        type,
        props: props || {},
        children: children.flat()
    };
}
`}
        />
        <p>This function creates a virtual representation of a DOM element:</p>
        <CodeHighlight
          content={`
const vDOM = createElement(
    "div",
    { id: "app", className: "container" },
    createElement("h1", null, "My Virtual DOM"),
    createElement("ul", null, 
        createElement("li", null, "Item 1"),
        createElement("li", null, "Item 2")
    )
);
`}
        />
        <p>
          This <code>vDOM</code> object is a simple JavaScript object
          representing the structure of the UI.
        </p>
        <h3>
          b. <strong>Rendering the Virtual DOM to the Real DOM</strong>
        </h3>
        <p>
          Next, we need a function to convert this Virtual DOM into real DOM
          elements:
        </p>
        <CodeHighlight
          content={`
function renderElement(vNode) {
    if (typeof vNode === "string") {
        return document.createTextNode(vNode);
    }

    const { type, props, children } = vNode;
    const element = document.createElement(type);

    // Set properties
    Object.keys(props).forEach(key => {
        element[key] = props[key];
    });

    // Append children
    children.map(renderElement).forEach(child => {
        element.appendChild(child);
    });

    return element;
}
`}
        />
        <p>
          This function takes a virtual node (like our <code>vDOM</code>) and
          recursively creates real DOM elements from it.
        </p>
        <h3>
          c. <strong>Mounting the Virtual DOM</strong>
        </h3>
        <p>Now, we can render our virtual DOM and mount it to the page:</p>
        <CodeHighlight
          content={`
const $root = document.getElementById('root');
$root.appendChild(renderElement(vDOM));
`}
        />
        <p>
          This will render our Virtual DOM structure into the actual HTML DOM,
          displaying an <code>&lt;h1&gt;</code> and an unordered list.
        </p>
        <h2>
          5. <strong>Diffing and Patching: Updating the Real DOM</strong>
        </h2>
        <p>
          The next step is to compare two versions of the Virtual DOM (diffing)
          and apply only the differences (patching).
        </p>
        <h3>
          a. <strong>Diffing Algorithm</strong>
        </h3>
        <p>
          The diffing function will compare two virtual nodes and determine the
          differences:
        </p>
        <CodeHighlight
          content={`
function diff(oldVNode, newVNode) {
    if (!newVNode) {
        return () => null; // Remove node
    }

    if (!oldVNode) {
        return () => renderElement(newVNode); // Add new node
    }

    if (typeof oldVNode !== typeof newVNode || oldVNode.type !== newVNode.type) {
        return () => renderElement(newVNode); // Replace node
    }

    if (typeof newVNode === "string") {
        if (oldVNode !== newVNode) {
            return $node => {
                $node.textContent = newVNode;
                return $node;
            };
        } else {
            return $node => $node; // No changes
        }
    }

    const patchProps = diffProps(oldVNode.props, newVNode.props);
    const patchChildren = diffChildren(oldVNode.children, newVNode.children);

    return $node => {
        patchProps($node);
        patchChildren($node);
        return $node;
    };
}

function diffProps(oldProps, newProps) {
    const patches = [];

    // Set new or changed props
    for (const [key, value] of Object.entries(newProps)) {
        patches.push($node => {
            $node[key] = value;
            return $node;
        });
    }

    // Remove old props
    for (const key in oldProps) {
        if (!(key in newProps)) {
            patches.push($node => {
                $node[key] = null;
                return $node;
            });
        }
    }

    return $node => patches.forEach(patch => patch($node));
}

function diffChildren(oldChildren, newChildren) {
    const childPatches = [];
    const additionalPatches = [];

    oldChildren.forEach((oldChild, i) => {
        childPatches.push(diff(oldChild, newChildren[i]));
    });

    for (const additionalChild of newChildren.slice(oldChildren.length)) {
        additionalPatches.push($node => {
            $node.appendChild(renderElement(additionalChild));
            return $node;
        });
    }

    return $parent => {
        $parent.childNodes.forEach((child, i) => {
            childPatches[i](child);
        });

        additionalPatches.forEach(patch => patch($parent));

        return $parent;
    };
}
`}
        />
        <h3>
          b. <strong>Patching the Real DOM</strong>
        </h3>
        <p>Now, we can update the real DOM using the generated patches:</p>
        <CodeHighlight
          content={`
function patch($parent, oldVNode, newVNode) {
    const patchFn = diff(oldVNode, newVNode);
    patchFn($parent);
}
`}
        />
        <p>
          This function will apply the necessary changes to the DOM, making it
          reflect the new state without re-rendering everything.
        </p>
        <h2>
          6. <strong>Putting It All Together: Example</strong>
        </h2>
        <p>Here’s how it all comes together:</p>
        <ol>
          <li>
            <strong>Initial Render</strong>:
          </li>
        </ol>
        <CodeHighlight
          content={`
let vDOM = createElement("div", null, "Hello, world!");
const $root = document.getElementById("root");
let $app = renderElement(vDOM);
$root.appendChild($app);

`}
        />
        <ol>
          <li>
            <strong>Update State</strong>:
          </li>
        </ol>
        <CodeHighlight
          content={`
const newVDOM = createElement("div", null, "Hello, Virtual DOM!");
patch($root, vDOM, newVDOM);
vDOM = newVDOM;

`}
        />
        <p>
          The <code>patch</code> function will only update the text inside the{" "}
          <code>&lt;div&gt;</code> without replacing the entire DOM node.
        </p>
        <h2>
          7. <strong>Summary: Key Steps in Reconciliation</strong>
        </h2>
        <ol>
          <li>
            <strong>Create Virtual DOM</strong>: Represent UI as a JavaScript
            object.
          </li>
          <li>
            <strong>Render Virtual DOM</strong>: Convert the Virtual DOM to real
            DOM elements.
          </li>
          <li>
            <strong>Diff and Patch</strong>: Compare old and new Virtual DOMs
            and update the real DOM accordingly.
          </li>
          <li>
            <strong>Only Apply Changes</strong>: Minimize real DOM manipulations
            for better performance.
          </li>
        </ol>
        <hr />
        <h2>Recap</h2>
        <ul>
          <li>
            <strong>Virtual DOM</strong> helps create a lightweight
            representation of the UI in JavaScript.
          </li>
          <li>
            <strong>Diffing</strong> allows us to compare two versions of the
            Virtual DOM to find changes.
          </li>
          <li>
            <strong>Patching</strong> applies the minimal changes to the real
            DOM, improving performance.
          </li>
        </ul>
        <p>
          This is the foundation of how frameworks like React achieve fast,
          efficient updates. But understanding the concept with vanilla
          JavaScript gives insight into what&#39;s happening behind the scenes.
        </p>
      </div>
    </ModuleWrapper>
  );
}
