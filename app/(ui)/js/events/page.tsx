import CodeHighlight from "@/app/components/CodeHighlight";
import ModuleWrapper from "@/app/components/ModuleWrapper";

export default function Events() {
  return (
    <ModuleWrapper>
      <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
        <h1>Event Handlers</h1>
        <p>
          JavaScript <strong>event handlers</strong> are a fundamental part of
          creating interactive web pages. They allow you to respond to user
          actions like clicks, keyboard inputs, mouse movements, and more.
          Understanding how to use event handlers is key to building dynamic and
          interactive websites.
        </p>
        <p>
          In this tutorial, we&#39;ll cover what events are, how to add event
          listeners, and common types of event handlers with examples.
        </p>
        <hr />
        <h2>What are JavaScript Events?</h2>
        <p>
          <strong>JavaScript events</strong> are actions or occurrences that
          happen in the browser, which JavaScript can respond to. Events are
          usually triggered by user actions like:
        </p>
        <ul>
          <li>Clicking a button</li>
          <li>Hovering over an element</li>
          <li>Pressing a key</li>
          <li>Submitting a form</li>
          <li>Resizing the window</li>
        </ul>
        <p>
          JavaScript allows you to <strong>attach event handlers</strong> to
          elements to listen for these actions and respond accordingly.
        </p>
        <hr />
        <h2>Adding Event Listeners</h2>
        <p>
          To respond to events, you need to add <strong>event listeners</strong>{" "}
          to HTML elements. Event listeners specify what function should run
          when a particular event occurs on an element.
        </p>
        <h3>Inline Event Handlers</h3>
        <p>
          You can attach an event handler directly in your HTML using an inline
          event attribute:
        </p>
        <CodeHighlight
          content={`
<button onclick="alert('Button clicked!')">Click Me</button>
`}
          sandboxOption={false}
        />
        <p>
          However, this approach is generally not recommended for larger
          projects because it mixes JavaScript with HTML and can become
          difficult to maintain.
        </p>
        <h3>
          Using <code>addEventListener()</code>
        </h3>
        <p>
          The preferred way is to use JavaScript’s{" "}
          <strong>
            <code>addEventListener()</code>
          </strong>{" "}
          method. This method allows you to keep your JavaScript separate from
          your HTML and makes it easier to manage complex interactions.
        </p>
        <p>
          <strong>Syntax:</strong>
        </p>
        <CodeHighlight
          content={`
element.addEventListener(event, function, useCapture);
`}
          sandboxOption={false}
        />
        <ul>
          <li>
            <strong>
              <code>event</code>
            </strong>
            : The event type (e.g., <code>&#39;click&#39;</code>,{" "}
            <code>&#39;keydown&#39;</code>).
          </li>
          <li>
            <strong>
              <code>function</code>
            </strong>
            : The function to run when the event occurs.
          </li>
          <li>
            <strong>
              <code>useCapture</code>
            </strong>{" "}
            (optional): A boolean that indicates whether the event should be
            captured or bubbled (default is <code>false</code>).
          </li>
        </ul>
        <h3>Example: Adding a Click Event Listener</h3>
        <CodeHighlight
          content={`
<button id="myButton">Click Me</button>

<script>
    const button = document.getElementById('myButton');
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
</script>
`}
          sandboxOption={false}
        />
        <p>In this example:</p>
        <ul>
          <li>
            We select the button using <code>getElementById</code>.
          </li>
          <li>
            We add a <code>click</code> event listener to the button that
            triggers an <code>alert</code> when clicked.
          </li>
        </ul>
        <hr />
        <h2>Common Types of Events</h2>
        <p>Here are some common event types you might use:</p>
        <ul>
          <li>
            <strong>Mouse Events</strong>: <code>click</code>,{" "}
            <code>dblclick</code>, <code>mouseover</code>, <code>mouseout</code>
            , <code>mousedown</code>, <code>mouseup</code>
          </li>
          <li>
            <strong>Keyboard Events</strong>: <code>keydown</code>,{" "}
            <code>keyup</code>, <code>keypress</code>
          </li>
          <li>
            <strong>Form Events</strong>: <code>submit</code>,{" "}
            <code>change</code>, <code>input</code>, <code>focus</code>,{" "}
            <code>blur</code>
          </li>
          <li>
            <strong>Window Events</strong>: <code>resize</code>,{" "}
            <code>scroll</code>, <code>load</code>, <code>unload</code>
          </li>
        </ul>
        <hr />
        <h2>Event Object and Properties</h2>
        <p>
          When an event occurs, the <strong>event object</strong> is
          automatically passed to the event handler function. This object
          contains useful information about the event, such as which key was
          pressed or which element triggered the event.
        </p>
        <h3>Example: Accessing the Event Object</h3>
        <CodeHighlight
          content={`
<button id="myButton">Click Me</button>

<script>
    const button = document.getElementById('myButton');
    button.addEventListener('click', (event) => {
        console.log(event); // Logs the event object
        console.log('Button text:', event.target.textContent); // Logs the button's text
    });
</script>
`}
          sandboxOption={false}
        />
        <p>In this example:</p>
        <ul>
          <li>
            The <code>event</code> object is passed to the callback function.
          </li>
          <li>
            Using <code>event.target</code>, we can access the element that
            triggered the event (in this case, the button).
          </li>
        </ul>
        <hr />
        <h2>Removing Event Listeners</h2>
        <p>
          You can remove an event listener using the{" "}
          <strong>
            <code>removeEventListener()</code>
          </strong>{" "}
          method. This is useful if you want to disable an event after a certain
          condition is met.
        </p>
        <p>
          <strong>Syntax:</strong>
        </p>
        <CodeHighlight
          content={`
element.removeEventListener(event, function);
`}
          sandboxOption={false}
        />
        <p>
          <strong>Note</strong>: The function passed to{" "}
          <code>removeEventListener()</code> must be the <strong>same</strong>{" "}
          function object that was used in <code>addEventListener()</code>.
        </p>
        <h3>Example: Removing a Click Event Listener</h3>
        <CodeHighlight
          content={`
<button id="myButton">Click Me</button>

<script>
    const button = document.getElementById('myButton');
    function handleClick() {
        alert('Button clicked!');
        button.removeEventListener('click', handleClick);
    }

    button.addEventListener('click', handleClick);
</script>
`}
          sandboxOption={false}
        />
        <p>In this example:</p>
        <ul>
          <li>
            After the first click, the event listener is removed, so subsequent
            clicks will not trigger the alert.
          </li>
        </ul>
        <hr />
        <h2>Event Propagation: Capturing and Bubbling</h2>
        <p>
          Event propagation determines how events flow through the DOM. There
          are two phases:
        </p>
        <ul>
          <li>
            <strong>Capturing</strong>: The event travels from the root of the
            DOM down to the target element.
          </li>
          <li>
            <strong>Bubbling</strong>: The event travels back up from the target
            element to the root.
          </li>
        </ul>
        <p>
          By default, event listeners are set to <strong>bubble</strong>, but
          you can set the <code>useCapture</code> parameter to <code>true</code>{" "}
          to listen during the capturing phase.
        </p>
        <h3>Example: Event Bubbling</h3>
        <CodeHighlight
          content={`
<div id="parent">
    <button id="child">Click Me</button>
</div>

<script>
    const parent = document.getElementById('parent');
    const child = document.getElementById('child');

    parent.addEventListener('click', () => {
        console.log('Parent clicked');
    });

    child.addEventListener('click', (event) => {
        console.log('Child clicked');
        event.stopPropagation(); // Prevents the event from bubbling up
    });
</script>
`}
          sandboxOption={false}
        />
        <p>In this example:</p>
        <ul>
          <li>
            Clicking the button logs <code>&#39;Child clicked&#39;</code> and
            prevents the event from reaching the parent.
          </li>
        </ul>
        <hr />
        <h2>Examples of Common Event Handlers</h2>
        <h3>Click Events</h3>
        <CodeHighlight
          content={`
<button id="clickButton">Click Me</button>

<script>
    document.getElementById('clickButton').addEventListener('click', () => {
        console.log('Button was clicked!');
    });
</script>
`}
          sandboxOption={false}
        />
        <p>
          This logs a message to the console whenever the button is clicked.
        </p>
        <h3>Keyboard Events</h3>
        <CodeHighlight
          content={`
<input type="text" id="textInput" placeholder="Type something...">

<script>
    const input = document.getElementById('textInput');

    input.addEventListener('keydown', (event) => {
        console.log(\`Key pressed: $\{event.key}\`);
    });
</script>
`}
          sandboxOption={false}
        />
        <p>
          This logs the key pressed by the user while typing in the input field.
        </p>
        <h3>Form Events</h3>
        <CodeHighlight
          content={`
<form id="myForm">
    <input type="text" name="username" placeholder="Username">
    <button type="submit">Submit</button>
</form>

<script>
    const form = document.getElementById('myForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the form from submitting
        console.log('Form submitted!');
    });
</script>
`}
          sandboxOption={false}
        />
        <p>
          This prevents the form from submitting and logs a message instead.
        </p>
        <hr />
        <h2>Summary</h2>
        <p>In this tutorial, you learned about:</p>
        <ul>
          <li>
            <strong>JavaScript Events</strong>: Actions or occurrences in the
            browser.
          </li>
          <li>
            <strong>Event Listeners</strong>: Using{" "}
            <code>addEventListener()</code> to handle events.
          </li>
          <li>
            <strong>Event Object</strong>: Accessing information about the
            event.
          </li>
          <li>
            <strong>Removing Event Listeners</strong>: Using{" "}
            <code>removeEventListener()</code> to disable events.
          </li>
          <li>
            <strong>Event Propagation</strong>: How events flow through the DOM.
          </li>
        </ul>
        <p>
          By mastering event handlers, you can build interactive web pages that
          respond to user actions in real-time, providing a richer user
          experience.
        </p>
      </div>
    </ModuleWrapper>
  );
}
