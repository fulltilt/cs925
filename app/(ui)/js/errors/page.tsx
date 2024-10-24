import CodeHighlight from "@/app/components/CodeHighlight";

export default function ErrorHandling() {
  return (
    <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
      <h1>Error Handling</h1>
      <p>
        JavaScript <strong>error handling</strong> is crucial for building
        robust and resilient applications. It allows you to anticipate and
        manage runtime errors, ensuring that your program doesn&#39;t crash
        unexpectedly and that you can provide a better experience for users.
      </p>
      <p>
        In this tutorial, we&#39;ll explore various error-handling techniques in
        JavaScript, including using <code>try...catch</code>, custom error
        creation, handling asynchronous errors, and best practices for error
        handling.
      </p>
      <hr />
      <h2>Why Is Error Handling Important?</h2>
      <p>Error handling is important because:</p>
      <ul>
        <li>
          It <strong>prevents your application from crashing</strong>{" "}
          unexpectedly when an error occurs.
        </li>
        <li>
          It helps you <strong>identify bugs</strong> during development by
          providing error messages.
        </li>
        <li>
          It allows you to provide <strong>graceful user feedback</strong>, such
          as showing an error message instead of a blank screen.
        </li>
        <li>
          It ensures <strong>data integrity</strong> by handling issues like
          network failures or invalid input.
        </li>
      </ul>
      <hr />
      <h2>JavaScript Error Types</h2>
      <p>
        Before diving into handling errors, let&#39;s briefly review the common
        types of errors you may encounter in JavaScript:
      </p>
      <ul>
        <li>
          <strong>SyntaxError</strong>: Incorrect syntax in code (e.g., missing
          a closing parenthesis).
        </li>
        <li>
          <strong>ReferenceError</strong>: Accessing a variable that hasn&#39;t
          been declared.
        </li>
        <li>
          <strong>TypeError</strong>: Performing an invalid operation on a data
          type (e.g., calling a method on <code>undefined</code>).
        </li>
        <li>
          <strong>RangeError</strong>: A value that is not within the expected
          range.
        </li>
        <li>
          <strong>URIError</strong>: Errors in URI functions like{" "}
          <code>decodeURI()</code>.
        </li>
      </ul>
      <hr />
      <h2>
        Using <code>try...catch</code>
      </h2>
      <p>
        The <code>try...catch</code> statement is the primary way to handle
        errors in JavaScript. It allows you to <strong>try</strong> a block of
        code, and if an error occurs, <strong>catch</strong> it and handle it
        gracefully.
      </p>
      <h3>Syntax</h3>
      <CodeHighlight
        content={`
try {
    // Code that may throw an error
} catch (error) {
    // Code to handle the error
}
`}
        sandboxOption={false}
      />
      <h3>
        Example: Basic <code>try...catch</code>
      </h3>
      <CodeHighlight
        content={`
try {
    const result = 10 / userInput; // userInput is undefined
} catch (error) {
    console.error('An error occurred:', error.message);
}
`}
        sandboxOption={false}
      />
      <p>In this example:</p>
      <ul>
        <li>
          If <code>userInput</code> is undefined, a <code>ReferenceError</code>{" "}
          is thrown.
        </li>
        <li>
          The <code>catch</code> block captures the error and logs a message.
        </li>
      </ul>
      <h3>Example: Handling Different Error Types</h3>
      <CodeHighlight
        content={`
try {
    undefinedFunction(); // This will throw a ReferenceError
} catch (error) {
    if (error instanceof ReferenceError) {
        console.error('ReferenceError:', error.message);
    } else {
        console.error('An unexpected error occurred:', error.message);
    }
}
`}
        sandboxOption={false}
      />
      <p>
        This example checks for a specific error type using{" "}
        <code>instanceof</code>, allowing you to handle different errors in
        different ways.
      </p>
      <hr />
      <h2>4. Throwing Custom Errors</h2>
      <p>
        JavaScript allows you to <strong>throw your own errors</strong> using
        the <code>throw</code> statement. This is useful when you want to create
        specific error conditions or validate inputs.
      </p>
      <h3>Example: Throwing a Custom Error</h3>
      <CodeHighlight
        content={`
function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero.');
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.error('Error:', error.message);
}
`}
        sandboxOption={false}
      />
      <p>In this example:</p>
      <ul>
        <li>
          A custom error is thrown if <code>b</code> is <code>0</code>.
        </li>
        <li>
          The <code>try...catch</code> block catches the error and displays the
          message <code>&quot;Cannot divide by zero.&quot;</code>.
        </li>
      </ul>
      <h3>Creating Custom Error Classes</h3>
      <p>
        You can also create custom error classes for more descriptive error
        handling:
      </p>
      <CodeHighlight
        content={`
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

try {
    throw new ValidationError('Invalid input.');
} catch (error) {
    console.error(error.name + ':', error.message);
}
`}
        sandboxOption={false}
      />
      <p>
        This allows you to distinguish between different types of custom errors
        using their <code>name</code> property.
      </p>
      <hr />
      <h2>5. Handling Asynchronous Errors</h2>
      <p>
        Asynchronous operations, such as network requests or file reading, can
        also produce errors. JavaScript provides different ways to handle these
        errors depending on whether you&#39;re using <strong>callbacks</strong>,{" "}
        <strong>Promises</strong>, or <strong>async/await</strong>.
      </p>
      <h3>Errors in Promises</h3>
      <p>
        For promises, use the <code>.catch()</code> method to handle errors:
      </p>
      <CodeHighlight
        content={`
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error.message);
    });
`}
        sandboxOption={false}
      />
      <p>In this example:</p>
      <ul>
        <li>
          If the <code>fetch()</code> request fails, the error is caught and
          handled using <code>.catch()</code>.
        </li>
      </ul>
      <h3>
        Errors with <code>async/await</code>
      </h3>
      <p>
        For <code>async/await</code>, you can use <code>try...catch</code> to
        handle errors:
      </p>
      <CodeHighlight
        content={`
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchData();
`}
        sandboxOption={false}
      />
      <p>
        This example wraps the asynchronous code in a <code>try...catch</code>{" "}
        block, making error handling easier to read compared to{" "}
        <code>.catch()</code> chaining.
      </p>
      <hr />
      <h2>
        The <code>finally</code> Block
      </h2>
      <p>
        The <code>finally</code> block is optional and runs{" "}
        <strong>regardless of whether an error occurred</strong>. It’s useful
        for cleaning up resources or performing actions that should occur no
        matter the outcome.
      </p>
      <h3>
        Example: Using <code>finally</code>
      </h3>
      <CodeHighlight
        content={`
try {
    const result = divide(10, 2);
    console.log('Result:', result);
} catch (error) {
    console.error('Error:', error.message);
} finally {
    console.log('This code runs no matter what.');
}
`}
        sandboxOption={false}
      />
      <p>
        In this example, the <code>finally</code> block will execute whether or
        not an error is caught, making it a good place for cleanup operations
        like closing a database connection.
      </p>
      <hr />
      <h2>7. Best Practices for Error Handling</h2>
      <ul>
        <li>
          <strong>
            Use <code>try...catch</code> only when necessary
          </strong>
          : Avoid wrapping every line of code in <code>try...catch</code> as it
          can make your code hard to read.
        </li>
        <li>
          <strong>Provide meaningful error messages</strong>: Use descriptive
          messages to help identify the source of the error.
        </li>
        <li>
          <strong>Avoid swallowing errors</strong>: Don’t leave catch blocks
          empty, as this makes it difficult to debug issues.
        </li>
        <li>
          <strong>Handle specific error types</strong>: Use{" "}
          <code>instanceof</code> to catch specific error types when necessary.
        </li>
        <li>
          <strong>Clean up resources</strong>: Use <code>finally</code> to
          release resources like network connections or temporary files.
        </li>
        <li>
          <strong>Centralize error handling</strong>: In larger applications,
          consider using a centralized error-handling function or middleware
          (e.g., in Express.js for server-side code).
        </li>
      </ul>
      <hr />
      <h2>8. Conclusion</h2>
      <p>
        In this tutorial, you learned how to handle errors in JavaScript using:
      </p>
      <ul>
        <li>
          <strong>
            <code>try...catch</code>
          </strong>{" "}
          for synchronous errors.
        </li>
        <li>
          <strong>Custom errors</strong> to validate input or enforce
          conditions.
        </li>
        <li>
          <strong>Error handling with Promises</strong> and{" "}
          <strong>
            <code>async/await</code>
          </strong>{" "}
          for asynchronous operations.
        </li>
        <li>
          The{" "}
          <strong>
            <code>finally</code>
          </strong>{" "}
          block to perform cleanup tasks.
        </li>
        <li>
          <strong>Best practices</strong> for effective error handling.
        </li>
      </ul>
      <p>
        By mastering error handling, you can create more resilient applications
        and improve the user experience. Remember to handle those errors
        gracefully!
      </p>
    </div>
  );
}
