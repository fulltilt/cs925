"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

export default function DevTools() {
  const [toggler, setToggler] = useState(false);

  return (
    <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
      <h1>Accessing Browser Developer Tools Console</h1>
      <p>
        Accessing the JavaScript Console in different browsers allows you to
        test JavaScript code, debug websites, and view messages from the web
        page&#39;s scripts. Here are the instructions to access the console in{" "}
        <strong>Google Chrome</strong>, <strong>Safari</strong>, and{" "}
        <strong>Mozilla Firefox</strong>.
      </p>

      <button onClick={() => setToggler(!toggler)}>
        <img src="/devtools.png" />
      </button>
      <FsLightbox toggler={toggler} sources={["/devtools.png"]} />

      <hr />
      <h2>
        1. <strong>Accessing the Console in Google Chrome</strong>
      </h2>
      <p>
        <strong>Method 1: Using the Keyboard Shortcut</strong>
      </p>
      <ul>
        <li>
          <strong>Windows/Linux</strong>: Press <code>Ctrl + Shift + J</code>
        </li>
        <li>
          <strong>Mac</strong>: Press <code>Cmd + Option + J</code>
        </li>
      </ul>
      <p>
        <strong>Method 2: Using the Developer Tools Menu</strong>
      </p>
      <ol>
        <li>
          Click on the <strong>three dots</strong> in the top-right corner of
          Chrome to open the menu.
        </li>
        <li>
          Navigate to <strong>More Tools</strong> &gt;{" "}
          <strong>Developer Tools</strong>.
        </li>
        <li>
          Click on the <strong>Console</strong> tab at the top of the Developer
          Tools pane.
        </li>
      </ol>
      <p>
        <strong>Method 3: Right-Click Method</strong>
      </p>
      <ol>
        <li>Right-click on any element on the webpage.</li>
        <li>
          Select <strong>Inspect</strong> from the context menu.
        </li>
        <li>
          This opens the <strong>Elements</strong> panel. Click on the{" "}
          <strong>Console</strong> tab at the top.
        </li>
      </ol>
      <hr />
      <h2>
        2. <strong>Accessing the Console in Safari</strong>
      </h2>
      <p>
        <strong>Step 1: Enable the Develop Menu</strong>
      </p>
      <ul>
        <li>
          If you haven&#39;t enabled the Develop menu in Safari, you need to do
          this first:
          <ol>
            <li>
              Go to <strong>Safari</strong> &gt; <strong>Settings</strong> (or{" "}
              <strong>Preferences</strong>).
            </li>
            <li>
              Click on the <strong>Advanced</strong> tab.
            </li>
            <li>
              Check the box for <strong>Show Develop menu in menu bar</strong>.
            </li>
          </ol>
        </li>
      </ul>
      <p>
        <strong>Step 2: Open the Console</strong>
      </p>
      <ul>
        <li>
          <strong>Method 1: Using the Keyboard Shortcut</strong>
          <ul>
            <li>
              <strong>Mac</strong>: Press <code>Cmd + Option + C</code>
            </li>
          </ul>
        </li>
        <li>
          <strong>Method 2: Using the Develop Menu</strong>
          <ol>
            <li>
              Go to the <strong>Develop</strong> menu in the Safari menu bar.
            </li>
            <li>
              Select <strong>Show JavaScript Console</strong>.
            </li>
          </ol>
        </li>
      </ul>
      <p>
        <strong>Method 3: Right-Click Method</strong>
      </p>
      <ul>
        <li>Right-click on any element on the webpage.</li>
        <li>
          Select <strong>Inspect Element</strong>.
        </li>
        <li>
          Click on the <strong>Console</strong> tab in the Developer Tools pane.
        </li>
      </ul>
      <hr />
      <h2>
        3. <strong>Accessing the Console in Mozilla Firefox</strong>
      </h2>
      <p>
        <strong>Method 1: Using the Keyboard Shortcut</strong>
      </p>
      <ul>
        <li>
          <strong>Windows/Linux</strong>: Press <code>Ctrl + Shift + K</code>
        </li>
        <li>
          <strong>Mac</strong>: Press <code>Cmd + Option + K</code>
        </li>
      </ul>
      <p>
        <strong>Method 2: Using the Firefox Menu</strong>
      </p>
      <ol>
        <li>
          Click on the <strong>hamburger menu</strong> (three horizontal lines)
          in the top-right corner of Firefox.
        </li>
        <li>
          Select <strong>Web Developer</strong> &gt;{" "}
          <strong>Web Console</strong>.
        </li>
      </ol>
      <p>
        <strong>Method 3: Right-Click Method</strong>
      </p>
      <ol>
        <li>Right-click on any element on the webpage.</li>
        <li>
          Select <strong>Inspect Element</strong> or <strong>Inspect</strong>.
        </li>
        <li>
          This opens the <strong>Inspector</strong> panel. Click on the{" "}
          <strong>Console</strong> tab at the top.
        </li>
      </ol>
      <hr />
      <h2>Summary</h2>
      <p>
        Each of these methods allows you to access the JavaScript console in{" "}
        <strong>Chrome</strong>, <strong>Safari</strong>, and{" "}
        <strong>Firefox</strong> easily:
      </p>
      <ul>
        <li>
          Chrome: <code>Ctrl + Shift + J</code> (Windows/Linux),{" "}
          <code>Cmd + Option + J</code> (Mac)
        </li>
        <li>
          Safari: <code>Cmd + Option + C</code> (after enabling the Develop
          menu)
        </li>
        <li>
          Firefox: <code>Ctrl + Shift + K</code> (Windows/Linux),{" "}
          <code>Cmd + Option + K</code> (Mac)
        </li>
      </ul>
      <p>
        With these, you can start testing JavaScript snippets, debug scripts,
        and interact with web pages directly through the console.
      </p>
    </div>
  );
}
