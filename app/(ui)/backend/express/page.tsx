import CodeHighlight from "@/app/components/CodeHighlight";
import ModuleWrapper from "@/app/components/ModuleWrapper";

export default function Express() {
  return (
    <ModuleWrapper>
      <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
        <h1>Express.js</h1>
        <p>
          <strong>Express.js</strong> is a minimal, flexible, and robust web
          framework for Node.js that allows developers to create powerful and
          scalable server-side applications. It simplifies the process of
          building RESTful APIs, managing routes, handling requests and
          responses, and integrating middleware. Express is known for its
          simplicity, making it a popular choice for beginners and experienced
          developers alike.
        </p>
        <p>
          In this guide, we&apos;ll explore the basics of Express.js, how to set
          up a simple server, define routes, handle middleware, and create
          RESTful APIs.
        </p>
        <hr />
        <h2>What is Express.js?</h2>
        <p>
          Express.js is a web application framework built on top of Node.js,
          providing a set of features to build web applications and APIs:
        </p>
        <ul>
          <li>
            <strong>Minimalistic</strong>: Express doesn&apos;t dictate a
            specific project structure, giving developers flexibility in how
            they organize their code.
          </li>
          <li>
            <strong>Middleware Support</strong>: Middleware functions in Express
            are used to process requests before they reach the route handlers,
            allowing for modular and reusable code.
          </li>
          <li>
            <strong>Routing</strong>: Express makes it easy to define routes to
            handle HTTP methods like GET, POST, PUT, and DELETE.
          </li>
          <li>
            <strong>RESTful APIs</strong>: Express is often used to create REST
            APIs, where different routes correspond to different resources and
            actions.
          </li>
        </ul>
        <h2>Setting Up Express.js</h2>
        <p>
          To get started with Express.js, you need to have Node.js installed on
          your machine. Follow these steps to create a new project:
        </p>
        <h3>
          1. <strong>Initialize a Node.js Project</strong>
        </h3>
        <CodeHighlight
          content={`
mkdir my-express-app
cd my-express-app
npm init -y
`}
          sandboxOption={false}
        />
        <p>
          This creates a new directory, navigates into it, and initializes a new{" "}
          <code>package.json</code> file.
        </p>
        <h3>
          2. <strong>Install Express.js</strong>
        </h3>
        <CodeHighlight
          content={`
npm install express
`}
          sandboxOption={false}
        />
        <p>This command installs the Express.js library in your project.</p>
        <h2>Basic Structure of an Express Application</h2>
        <p>
          Let&apos;s create a basic server using Express.js. Create a new file
          called <code>index.js</code> in your project directory:
        </p>
        <CodeHighlight
          content={`
// index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(\`Server is running on http://localhost:$\{PORT}\`);
});
`}
          sandboxOption={false}
        />
        <ul>
          <li>
            <strong>
              <code>const express = require(&#39;express&#39;)</code>
            </strong>
            : Imports the Express library.
          </li>
          <li>
            <strong>
              <code>const app = express()</code>
            </strong>
            : Creates an instance of an Express application.
          </li>
          <li>
            <strong>
              <code>
                app.get(&#39;/&#39;, (req, res) =&gt; &#10100; ... &#10101;)
              </code>
            </strong>
            : Defines a route that listens for GET requests on the root URL (
            <code>/</code>).
          </li>
          <li>
            <strong>
              <code>app.listen(PORT, () =&gt; &#10100; ... &#10101;)</code>
            </strong>
            : Starts the server and listens on the specified port.
          </li>
        </ul>
        <p>Run your server:</p>
        <CodeHighlight
          content={`
node index.js
`}
          sandboxOption={false}
        />
        <p>
          You should see the message:{" "}
          <code>Server is running on http://localhost:3000</code>. Open{" "}
          <code>http://localhost:3000</code> in your browser, and you&apos;ll
          see the text &quot;Hello, World!&quot;.
        </p>
        <h2>Handling Routes</h2>
        <p>
          Express allows you to define routes for different HTTP methods (GET,
          POST, PUT, DELETE) using <code>app.get()</code>,{" "}
          <code>app.post()</code>, <code>app.put()</code>, and{" "}
          <code>app.delete()</code>.
        </p>
        <CodeHighlight
          content={`
// Define a GET route
app.get('/hello', (req, res) => {
  res.send('Hello from the GET route!');
});

// Define a POST route
app.post('/hello', (req, res) => {
  res.send('Hello from the POST route!');
});
`}
          sandboxOption={false}
        />
        <h3>Route Parameters</h3>
        <p>
          Route parameters allow you to capture values from the URL. They are
          defined using <code>:</code>.
        </p>
        <CodeHighlight
          content={`
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(\`User ID is: $\{userId}\`);
});
`}
          sandboxOption={false}
        />
        <p>
          In this example, accessing{" "}
          <code>http://localhost:3000/users/123</code> would display &quot;User
          ID is: 123&quot;.
        </p>
        <h2>Using Middleware</h2>
        <p>
          Middleware functions in Express can execute code, modify request and
          response objects, and end the request-response cycle. They are a core
          feature of Express and enable functionalities like authentication,
          logging, and error handling.
        </p>
        <h3>Example: Basic Middleware</h3>
        <CodeHighlight
          content={`
app.use((req, res, next) => {
  console.log(\`$\{req.method} request for '$\{req.url}'\`);
  next(); // Passes control to the next middleware function or route handler
});
`}
          sandboxOption={false}
        />
        <h3>Built-in Middleware</h3>
        <p>
          Express provides built-in middleware like <code>express.json()</code>{" "}
          and <code>express.urlencoded()</code> to parse incoming requests with
          JSON payloads and URL-encoded data.
        </p>
        <CodeHighlight
          content={`
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
`}
          sandboxOption={false}
        />

        <h2>Working with JSON Data</h2>
        <p>Express makes it easy to handle JSON data in your API:</p>
        <CodeHighlight
          content={`
app.post('/data', (req, res) => {
  const { name, age } = req.body;
  res.json({ message: \`Hello, $\{name}. You are $\{age} years old.\` });
});
`}
          sandboxOption={false}
        />
        <p>
          Make a POST request with a JSON body like{" "}
          <code>
            &#10100;&quot;name&quot;: &quot;John&quot;, &quot;age&quot;:
            30&#10101;
          </code>
          , and the server will respond with a JSON message.
        </p>
        <h2>Creating a RESTful API</h2>
        <p>
          Let&#39;s build a simple RESTful API for managing a list of books:
        </p>
        <CodeHighlight
          content={`
let books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
];

// GET all books
app.get('/books', (req, res) => {
  res.json(books);
});

// GET a specific book by ID
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('Book not found');
  res.json(book);
});

// POST a new book
app.post('/books', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT (update) a book
app.put('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('Book not found');
  
  book.title = req.body.title;
  book.author = req.body.author;
  res.json(book);
});

// DELETE a book
app.delete('/books/:id', (req, res) => {
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
  if (bookIndex === -1) return res.status(404).send('Book not found');
  
  const deletedBook = books.splice(bookIndex, 1);
  res.json(deletedBook);
});
`}
          sandboxOption={false}
        />
        <p>
          This API allows you to perform CRUD (Create, Read, Update, Delete)
          operations on a list of books.
        </p>
        <h2>Error Handling in Express</h2>
        <p>Express provides a mechanism to handle errors using middleware:</p>
        <CodeHighlight
          content={`
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
`}
          sandboxOption={false}
        />
        <p>
          Place this at the end of your routes to catch errors and display a
          friendly message.
        </p>
        <h2>Serving Static Files</h2>
        <p>
          You can serve static files like images, CSS, and JavaScript using the
          built-in <code>express.static</code> middleware:
        </p>
        <CodeHighlight
          content={`
app.use(express.static('public'));
`}
          sandboxOption={false}
        />
        <p>
          This serves files from the <code>public</code> directory at the root
          level, so <code>public/index.html</code> would be available at{" "}
          <code>http://localhost:3000/index.html</code>.
        </p>
        <h2>Conclusion</h2>
        <p>
          Express.js is a powerful and flexible framework that simplifies the
          process of building server-side applications with Node.js. Its
          minimalistic approach, combined with a rich set of features, allows
          developers to create web servers, RESTful APIs, and web applications
          quickly and easily. By mastering the basics of routing, middleware,
          and error handling, you can build scalable and efficient web
          applications.
        </p>
      </div>
    </ModuleWrapper>
  );
}
