import CodeHighlight from "@/app/components/CodeHighlight";

export default function Promises() {
  return (
    <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
      <h1>Promises</h1>
      <p>
        (Note: It's strongly encouraged to try out these examples in in either
        the console or run the examples in Node)
      </p>
      <p>
        In JavaScript, handling asynchronous operations is crucial for tasks
        like making API requests, reading files, or handling timers.
        Historically, <strong>callbacks</strong> were the go-to method for
        managing these operations. However, as applications grew more complex,{" "}
        <strong>JavaScript Promises</strong> emerged as a more robust and
        cleaner way to handle asynchronous tasks.
      </p>
      <p>
        In this tutorial, we will explore what <strong>promises</strong> are,
        how they work, how to use them, and why they are often preferred over
        callbacks.
      </p>
      <hr />
      <h2>What is a JavaScript Promise?</h2>
      <p>
        A <strong>Promise</strong> is an object that represents the eventual
        completion or failure of an asynchronous operation. It acts as a
        placeholder for a value that is not yet available, and allows you to
        attach handlers to handle the success or failure of that operation.
      </p>
      <p>A promise can be in one of three states:</p>
      <ul>
        <li>
          <strong>Pending</strong>: The initial state, neither fulfilled nor
          rejected.
        </li>
        <li>
          <strong>Fulfilled</strong>: The operation completed successfully.
        </li>
        <li>
          <strong>Rejected</strong>: The operation failed.
        </li>
      </ul>
      <h2>Basic Syntax of a Promise:</h2>
      <CodeHighlight
        content={`
const myPromise = new Promise((resolve, reject) => {
    // Perform some asynchronous task...
    let success = true;

    if (success) {
        resolve('The operation was successful!');
    } else {
        reject('The operation failed.');
    }
});
`}
        sandboxOption={false}
      />
      <ul>
        <li>
          <strong>
            <code>resolve()</code>
          </strong>{" "}
          is called when the operation succeeds.
        </li>
        <li>
          <strong>
            <code>reject()</code>
          </strong>{" "}
          is called when the operation fails.
        </li>
      </ul>
      <hr />
      <h2>Why Use Promises Over Callbacks?</h2>
      <p>
        Before promises, callbacks were commonly used to handle asynchronous
        tasks. However, they often led to <strong>callback hell</strong> or{" "}
        <strong>pyramid of doom</strong>, where nested callbacks made code hard
        to read and maintain. Promises solve many of the issues with callbacks:
      </p>
      <ol>
        <li>
          <strong>Avoiding Callback Hell</strong>: Promises use a chainable{" "}
          <code>then()</code> method, making the flow of asynchronous operations
          easier to read.
        </li>
        <li>
          <strong>Better Error Handling</strong>: With promises, you can use a
          single <code>catch()</code> method to handle errors, rather than
          passing error handlers through nested callbacks.
        </li>
        <li>
          <strong>Cleaner Code</strong>: Promises are more expressive, allowing
          you to write more readable code that looks closer to synchronous
          operations.
        </li>
      </ol>
      <h2>Example of Callback Hell:</h2>
      <CodeHighlight
        content={`
getData((response) => {
    parseData(response, (parsedData) => {
        saveData(parsedData, (saved) => {
            console.log('Data saved:', saved);
        }, (error) => {
            console.error('Error saving data:', error);
        });
    }, (error) => {
        console.error('Error parsing data:', error);
    });
}, (error) => {
    console.error('Error fetching data:', error);
});
`}
        sandboxOption={false}
      />
      <p>
        This becomes difficult to read and maintain, especially as more nested
        callbacks are added.
      </p>
      <h2>Example with Promises:</h2>
      <CodeHighlight
        content={`
getData()
    .then(parseData)
    .then(saveData)
    .then((saved) => {
        console.log('Data saved:', saved);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
`}
        sandboxOption={false}
      />
      <p>
        With promises, the flow of operations is more linear, and error handling
        is centralized using <code>catch()</code>.
      </p>
      <hr />
      <h1>Using Promises in JavaScript</h1>
      <h2>Creating and Using a Promise:</h2>
      <p>Here&apos;s a basic example of creating and using a promise:</p>
      <CodeHighlight
        content={`
const fetchData = new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
        if (success) {
            resolve('Data fetched successfully!');
        } else {
            reject('Error fetching data.');
        }
    }, 2000);
});

fetchData
    .then((message) => {
        console.log(message); // Runs if promise is resolved
    })
    .catch((error) => {
        console.error(error); // Runs if promise is rejected
    });
`}
        sandboxOption={false}
      />
      <p>In this example:</p>
      <ul>
        <li>
          <code>fetchData</code> simulates an asynchronous task using{" "}
          <code>setTimeout</code>.
        </li>
        <li>
          After 2 seconds, it either resolves with a success message or rejects
          with an error message.
        </li>
        <li>
          <code>then()</code> handles the success case, and <code>catch()</code>{" "}
          handles the error case.
        </li>
      </ul>
      <hr />
      <h2>Chaining Promises</h2>
      <p>
        One of the key features of promises is <strong>chaining</strong>. It
        allows you to perform a sequence of asynchronous operations without
        nesting them.
      </p>
      <h2>Example: Chaining Promises</h2>
      <CodeHighlight
        content={`
const addTwo = (num) => {
    return new Promise((resolve, reject) => {
        if (typeof num === 'number') {
            resolve(num + 2);
        } else {
            reject('Input must be a number');
        }
    });
};

addTwo(5)
    .then((result) => {
        console.log(result); // Output: 7
        return addTwo(result);
    })
    .then((result) => {
        console.log(result); // Output: 9
        return addTwo(result);
    })
    .then((result) => {
        console.log(result); // Output: 11
    })
    .catch((error) => {
        console.error(error);
    });
`}
        sandboxOption={false}
      />
      <p>In this example:</p>
      <ul>
        <li>
          The <code>addTwo</code> function returns a promise that resolves if
          the input is a number.
        </li>
        <li>
          By chaining <code>then()</code> methods, we add <code>2</code> to the
          result each time.
        </li>
        <li>
          If an error occurs at any point, it is caught by the{" "}
          <code>catch()</code> method.
        </li>
      </ul>
      <hr />
      <h2>
        Real-World Example: Fetching Data with <code>fetch</code> API
      </h2>
      <p>
        One common use case for promises is making HTTP requests using the{" "}
        <code>fetch</code> API. The <code>fetch</code> function returns a
        promise that resolves with the <code>Response</code> object when the
        request is successful.
      </p>
      <h2>
        Example: Using <code>fetch</code> with Promises
      </h2>
      <CodeHighlight
        content={`
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        console.log('Post:', data);
    })
    .catch((error) => {
        console.error('Fetch error:', error);
    });
`}
        sandboxOption={false}
      />
      <ul>
        <li>
          <code>fetch()</code> initiates an HTTP request and returns a promise.
        </li>
        <li>
          The <code>then()</code> method processes the response and converts it
          to JSON.
        </li>
        <li>
          The <code>catch()</code> method handles any errors that may occur
          during the fetch.
        </li>
      </ul>
      <hr />
      <h2>
        Parallel Promises with <code>Promise.all()</code>
      </h2>
      <p>
        The <code>Promise.all()</code> method allows you to run multiple
        promises in parallel and wait until all of them are resolved.
      </p>
      <h3>
        Example: Using <code>Promise.all()</code>
      </h3>
      <CodeHighlight
        content={`
const promise1 = Promise.resolve('First promise resolved');
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Second promise resolved after 2 seconds'), 2000));
const promise3 = Promise.resolve('Third promise resolved');

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log(results);
        // Output: ['First promise resolved', 'Second promise resolved after 2 seconds', 'Third promise resolved']
    })
    .catch((error) => {
        console.error('One of the promises failed:', error);
    });
`}
        sandboxOption={false}
      />
      <p>In this example:</p>
      <ul>
        <li>
          <code>Promise.all()</code> takes an array of promises and waits until
          all of them are resolved.
        </li>
        <li>
          If any promise rejects, <code>Promise.all()</code> immediately rejects
          with the reason of the first promise that failed.
        </li>
      </ul>
      <hr />
      <h2>
        Introduction to <code>async/await</code>
      </h2>
      <p>
        The <code>async</code> and <code>await</code> keywords, introduced in
        ES2017 (ES8), provide a more readable way to work with promises. They
        allow you to write asynchronous code that looks more like synchronous
        code, which can make your code easier to understand and maintain.
      </p>
      <ul>
        <li>
          <strong>
            <code>async</code>
          </strong>
          : Declares a function that always returns a promise.
        </li>
        <li>
          <strong>
            <code>await</code>
          </strong>
          : Pauses the execution of an <code>async</code> function until the
          promise is resolved.
        </li>
      </ul>
      <h3>
        Example: Basic <code>async/await</code>
      </h3>
      <CodeHighlight
        content={`
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
`}
        sandboxOption={false}
      />
      <p>
        <strong>Explanation</strong>:
      </p>
      <ul>
        <li>
          The <code>async</code> keyword before the function makes it an
          asynchronous function.
        </li>
        <li>
          <code>await</code> waits for the promise returned by{" "}
          <code>fetch()</code> to resolve.
        </li>
        <li>
          If an error occurs, it is caught in the <code>catch</code> block.
        </li>
      </ul>
      <h3>
        Why Use <code>async/await</code>?
      </h3>
      <ul>
        <li>
          <strong>Cleaner and More Readable</strong>: <code>async/await</code>{" "}
          allows you to write asynchronous code that looks more like synchronous
          code.
        </li>
        <li>
          <strong>Better Error Handling</strong>: With <code>try...catch</code>,
          error handling becomes easier and is centralized in one place.
        </li>
        <li>
          <strong>Improved Flow Control</strong>: By using <code>await</code>,
          you can pause the execution of your code until a promise is resolved,
          making it easier to work with dependent asynchronous operations.
        </li>
      </ul>
      <hr />
      <h2>
        Using <code>async/await</code> with API Calls
      </h2>

      <p>
        Here&apos;s an example of using <code>async/await</code> to fetch and
        display data from an API.
      </p>
      <CodeHighlight
        content={`
const getPost = async (postId) => {
    try {
        const response = await fetch(\`https://jsonplaceholder.typicode.com/posts/$\{postId}\`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const post = await response.json();
        console.log('Post:', post);
    } catch (error) {
        console.error('Error fetching post:', error);
    }
};

getPost(1);
`}
        sandboxOption={false}
      />
      <ul>
        <li>
          The <code>getPost</code> function uses <code>async</code> to declare
          an asynchronous function.
        </li>
        <li>
          <code>await</code> pauses the function execution until the{" "}
          <code>fetch</code> request completes and the response is parsed as
          JSON.
        </li>
        <li>
          If an error occurs during the fetch or JSON parsing, it&apos;s caught
          and logged using <code>catch</code>.
        </li>
      </ul>
      <hr />
      <h2>
        Error Handling with <code>async/await</code>
      </h2>
      <p>
        Handling errors in asynchronous operations is simpler with{" "}
        <code>async/await</code>. Using a <code>try...catch</code> block, you
        can easily manage errors without needing to attach multiple{" "}
        <code>.catch()</code> methods like with promises.
      </p>
      <h3>Example:</h3>
      <CodeHighlight
        content={`
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/invalidEndpoint');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

fetchData();
`}
        sandboxOption={false}
      />
      <p>In this example:</p>
      <ul>
        <li>
          The <code>try</code> block contains the asynchronous code that might
          fail.
        </li>
        <li>
          If the <code>fetch</code> request fails or the endpoint is incorrect,
          an error is thrown.
        </li>
        <li>
          The <code>catch</code> block handles the error, making it easy to
          manage failures.
        </li>
      </ul>
      <hr></hr>
      <h2>Summary</h2>
      <p>
        <strong>Promises</strong> are a significant improvement over{" "}
        <strong>callbacks</strong> for handling asynchronous code. Here&apos;s a
        recap of what you&apos;ve learned:
      </p>
      <ul>
        <li>
          <strong>Promises</strong> help avoid callback hell, making code easier
          to read and maintain.
        </li>
        <li>
          <strong>Chaining promises</strong> allows for sequential handling of
          asynchronous tasks.
        </li>
        <li>
          <strong>Centralized error handling</strong> with <code>catch()</code>{" "}
          makes it easier to manage errors.
        </li>
        <li>
          Real-world use cases include working with the <code>fetch</code> API
          for network requests.
        </li>
        <li>
          <strong>
            <code>Promise.all()</code>
          </strong>{" "}
          can be used for running multiple promises in parallel.
        </li>
        <li>
          <strong>
            <code>async/await</code>
          </strong>
          : A newer syntax that simplifies working with promises, making
          asynchronous code look more like synchronous code.
        </li>
      </ul>
      <p>
        By mastering promises, you&apos;ll be able to write cleaner, more
        manageable asynchronous JavaScript code. Next, you can explore{" "}
        <strong>
          <code>async/await</code>
        </strong>
        , which builds on promises to make asynchronous code look even more like
        synchronous code.
      </p>
    </div>
  );
}
