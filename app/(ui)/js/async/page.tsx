import CodeHighlight from "@/app/components/CodeHighlight";
import ModuleWrapper from "@/app/components/ModuleWrapper";

export default function Async() {
  return (
    <ModuleWrapper>
      <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
        <h1>Introduction to Asynchronous JavaScript</h1>
        <p>
          JavaScript is a <strong>single-threaded</strong> language, meaning it
          can only execute one task at a time. However, modern web applications
          often need to perform multiple operations simultaneously, like
          fetching data from a server, handling user interactions, or loading
          images. This is where <strong>asynchronous JavaScript</strong> comes
          into play.
        </p>
        <p>
          Asynchronous programming allows JavaScript to perform time-consuming
          tasks (like network requests or file reading) without blocking other
          operations. In this tutorial, you will learn the basics of
          asynchronous JavaScript, including <strong>callbacks</strong>,{" "}
          <strong>promises</strong>, and <strong>async/await</strong>.
        </p>
        <hr />
        <h2>Key Concepts of Asynchronous Programming</h2>
        <ul>
          <li>
            <strong>Synchronous Code</strong>: Executes line by line, one after
            the other. If a task takes a long time, it blocks the following
            tasks from executing.
          </li>
          <li>
            <strong>Asynchronous Code</strong>: Allows other tasks to continue
            while waiting for a long-running task to complete. This makes
            applications more efficient and responsive.
          </li>
        </ul>
        <hr />
        <h2>1. Callbacks</h2>
        <p>
          A <strong>callback</strong> is a function that is passed as an
          argument to another function and is executed after some operation has
          completed.
        </p>
        <h3>Example: Synchronous vs. Asynchronous</h3>
        <CodeHighlight
          content={`
// Synchronous example
console.log('Start');
console.log('This runs second');
console.log('End');
`}
          sandboxOption={false}
        />
        <p>
          <strong>Output</strong>:
        </p>
        <CodeHighlight
          content={`
Start
This runs second
End
`}
          sandboxOption={false}
        />
        <p>The code above executes in order, one line after another.</p>
        <h3>Example: Asynchronous with Callbacks</h3>
        <CodeHighlight
          content={`
console.log('Start');

setTimeout(() => {
    console.log('This runs after 2 seconds');
}, 2000);

console.log('End');
`}
          sandboxOption={false}
        />
        <p>
          <strong>Output</strong>:
        </p>
        <CodeHighlight
          content={`
Start
End
This runs after 2 seconds
`}
          sandboxOption={false}
        />
        <p>
          Here, <code>setTimeout</code> is an asynchronous function that takes a
          callback and a delay time (in milliseconds). It allows the program to
          continue running while the <code>setTimeout</code> function waits.
        </p>
        <h2>2. Promises</h2>
        <p>
          A <strong>Promise</strong> is an object that represents the eventual
          completion or failure of an asynchronous operation. Promises provide a
          cleaner way to work with asynchronous code than callbacks, especially
          when dealing with multiple operations.
        </p>
        <h3>Creating a Promise</h3>
        <CodeHighlight
          content={`
const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve('The operation was successful!');
    } else {
        reject('The operation failed.');
    }
});

myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });
`}
          sandboxOption={false}
        />
        <p>
          <strong>Explanation</strong>:
        </p>
        <ul>
          <li>
            The <code>Promise</code> constructor takes a function with two
            parameters: <code>resolve</code> (for successful completion) and{" "}
            <code>reject</code> (for failure).
          </li>
          <li>
            <code>then()</code> is called when the promise is resolved.
          </li>
          <li>
            <code>catch()</code> is called when the promise is rejected.
          </li>
        </ul>
        <h3>
          Example: Using <code>fetch</code> with Promises
        </h3>
        <CodeHighlight
          content={`
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
`}
          sandboxOption={false}
        />
        <p>
          <strong>Explanation</strong>:
        </p>
        <ul>
          <li>
            <code>fetch</code> returns a promise. When the promise resolves, it
            passes the response to the first <code>then()</code>.
          </li>
          <li>
            The response is converted to JSON using <code>response.json()</code>
            .
          </li>
          <li>
            The second <code>then()</code> logs the data to the console.
          </li>
          <li>
            <code>catch()</code> handles any errors that might occur during the
            fetch.
          </li>
        </ul>
        <hr />
        <h2>3. Async/Await</h2>
        <p>
          <code>async</code> and <code>await</code> provide a cleaner, more
          readable way to write asynchronous code compared to using{" "}
          <code>.then()</code> and <code>.catch()</code>.
        </p>
        <h3>
          Example: Using <code>async</code> and <code>await</code>
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
            The <code>async</code> keyword is used to declare an asynchronous
            function.
          </li>
          <li>
            Inside an <code>async</code> function, you can use the{" "}
            <code>await</code> keyword to pause the function execution until a
            promise is resolved.
          </li>
          <li>
            <code>try...catch</code> is used to handle any errors that occur
            during the asynchronous operation.
          </li>
        </ul>
        <h3>
          Benefits of <code>async/await</code>:
        </h3>
        <ul>
          <li>Makes code easier to read and understand.</li>
          <li>
            Helps avoid <strong>callback hell</strong> (nested callbacks).
          </li>
          <li>
            Easier error handling using <code>try...catch</code>.
          </li>
        </ul>
        <hr />
        <h2>4. Using Asynchronous JavaScript with APIs</h2>
        <p>
          One of the most common use cases for asynchronous JavaScript is
          interacting with <strong>APIs</strong> (Application Programming
          Interfaces). With APIs, you can fetch data from a server without
          reloading the page, which is a cornerstone of modern web applications.
        </p>
        <h3>Example: Fetching Data from an API</h3>
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
        <p>
          In this example, the <code>getPost</code> function takes a{" "}
          <code>postId</code> and fetches data from a placeholder API using{" "}
          <code>fetch</code> and <code>async/await</code>. It handles errors
          using <code>try...catch</code>.
        </p>
        <hr />
        <h2>
          5. Practical Example: Fetching Data and Displaying It on a Webpage
        </h2>
        <p>
          Let’s create a simple web page that displays a list of posts from an
          API using <code>async/await</code>.
        </p>
        <h3>
          Step 1: Create <code>index.html</code>
        </h3>
        <CodeHighlight
          content={`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Asynchronous JavaScript Example</title>
</head>
<body>
    <h1>Posts</h1>
    <div id="posts"></div>
    <script src="script.js"></script>
</body>
</html>
`}
          sandboxOption={false}
        />
        <h3>
          Step 2: Create <code>script.js</code>
        </h3>
        <CodeHighlight
          content={`
const postsContainer = document.getElementById('posts');

const fetchPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = \`
                <h2>$\{post.title}</h2>
                <p>$\{post.body}</p>
            \`;
            postsContainer.appendChild(postElement);
        });
    } catch (error) {
        postsContainer.innerHTML = \`<p>Error fetching posts: $\{error.message}</p>\`;
    }
};

fetchPosts();
`}
          sandboxOption={false}
        />
        <h3>Step 3: Run the Web Page</h3>
        <ol>
          <li>
            Create a folder and save <code>index.html</code> and{" "}
            <code>script.js</code> inside it.
          </li>
          <li>
            Open <code>index.html</code> in your browser.
          </li>
          <li>
            You should see a list of posts fetched from the API and displayed on
            the page.
          </li>
        </ol>
        <hr />
        <h2>Summary</h2>
        <p>In this tutorial, you learned about:</p>
        <ul>
          <li>
            <strong>Callbacks</strong>: Passing functions to handle asynchronous
            operations.
          </li>
          <li>
            <strong>Promises</strong>: Handling asynchronous operations more
            cleanly than callbacks.
          </li>
          <li>
            <strong>Async/Await</strong>: A modern way to write asynchronous
            code, making it easier to read and write.
          </li>
          <li>
            <strong>Practical Examples</strong>: Fetching data from an API and
            displaying it on a web page.
          </li>
        </ul>
        <p>
          Asynchronous JavaScript is a powerful tool that enables you to build
          responsive and efficient web applications. With practice, you’ll
          become more comfortable using these concepts to handle complex
          asynchronous operations.
        </p>
      </div>
    </ModuleWrapper>
  );
}
