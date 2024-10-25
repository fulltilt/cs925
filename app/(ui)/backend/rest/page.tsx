import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CodeHighlight from "@/app/components/CodeHighlight";
import ModuleWrapper from "@/app/components/ModuleWrapper";

export default function () {
  return (
    <ModuleWrapper>
      <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
        <h1>RESTful API Design</h1>
        <p>
          A <strong>RESTful API</strong> (Representational State Transfer) is an
          architectural style for designing networked applications. It leverages
          HTTP methods (such as GET, POST, PUT, DELETE) to perform operations on
          resources. RESTful APIs are easy to understand, scalable, and commonly
          used in modern web development to enable communication between client
          and server applications.
        </p>
        <p>
          In this guide, we will explore the principles of RESTful API design,
          best practices, and how to implement a simple RESTful API.{" "}
        </p>
        <hr />
        <h2>What is a RESTful API?</h2>
        <p>
          A RESTful API is a set of rules and conventions for building and
          interacting with web services. It relies on HTTP methods, follows a
          stateless communication model, and focuses on resources represented as
          URLs. RESTful APIs are designed to be:
        </p>
        <ul>
          <li>
            <strong>Stateless</strong>: Each API call from a client contains all
            the information needed to process the request, without relying on
            the server’s previous interactions.
          </li>
          <li>
            <strong>Cacheable</strong>: Responses can be cached to improve
            efficiency and reduce latency.
          </li>
          <li>
            <strong>Uniform Interface</strong>: Resources are accessed through a
            consistent interface, typically using HTTP methods.
          </li>
          <li>
            <strong>Layered System</strong>: The client does not need to know if
            it is connected directly to the server or through intermediate
            layers.
          </li>
        </ul>
        <h2>Core Principles of RESTful API Design</h2>
        <h3>
          1. <strong>Resources and Resource Representation</strong>
        </h3>
        <ul>
          <li>
            <strong>Resources</strong> are the key elements in RESTful APIs,
            like users, orders, or products.
          </li>
          <li>
            Each resource is identified by a <strong>URL</strong>. For example,
            a user resource might be accessed at{" "}
            <code>https://api.example.com/users</code>.
          </li>
          <li>
            <strong>Representation</strong> of a resource is typically in JSON
            format, though other formats like XML are possible.
          </li>
        </ul>
        <h3>
          2. <strong>Statelessness</strong>
        </h3>
        <ul>
          <li>
            RESTful APIs are stateless, meaning each request from the client
            contains all the necessary information. The server doesn’t store any
            client context between requests.
          </li>
          <li>
            This simplifies the server and makes it easier to scale, as the
            server doesn’t need to maintain sessions.
          </li>
        </ul>
        <h3>
          3. <strong>Client-Server Separation</strong>
        </h3>
        <ul>
          <li>
            The client and server should be independent. The server focuses on
            processing requests and sending responses, while the client is
            responsible for the user experience.
          </li>
        </ul>
        <h3>
          4. <strong>Uniform Interface</strong>
        </h3>
        <ul>
          <li>
            RESTful APIs use a uniform and predictable interface, making it
            easier for developers to understand how to interact with different
            resources.
          </li>
        </ul>
        <h2>HTTP Methods and CRUD Operations</h2>
        <p>
          RESTful APIs use HTTP methods to perform actions on resources. Each
          HTTP method maps to a CRUD (Create, Read, Update, Delete) operation:
        </p>
        <ul>
          <li>
            <strong>GET</strong>: Retrieves a resource or a list of resources.
          </li>
          <li>
            <strong>POST</strong>: Creates a new resource.
          </li>
          <li>
            <strong>PUT</strong>: Updates an existing resource or creates a
            resource if it doesn’t exist.
          </li>
          <li>
            <strong>PATCH</strong>: Partially updates a resource.
          </li>
          <li>
            <strong>DELETE</strong>: Deletes a resource.
          </li>
        </ul>
        <h3>Example: User Resource</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>HTTP Method</TableHead>
              <TableHead>URL</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <code>GET</code>
              </TableCell>
              <TableCell>
                <code>/users</code>
              </TableCell>
              <TableCell>Retrieve all users</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <code>GET</code>
              </TableCell>
              <TableCell>
                <code>/users/1</code>
              </TableCell>
              <TableCell>Retrieve user with ID 1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <code>POST</code>
              </TableCell>
              <TableCell>
                <code>/users</code>
              </TableCell>
              <TableCell>Create a new user</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <code>PUT</code>
              </TableCell>
              <TableCell>
                <code>/users/1</code>
              </TableCell>
              <TableCell>Update user with ID 1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <code>PATCH</code>
              </TableCell>
              <TableCell>
                <code>/users/1</code>
              </TableCell>
              <TableCell>Partially update user</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <code>DELETE</code>
              </TableCell>
              <TableCell>
                <code>/users/1</code>
              </TableCell>
              <TableCell>Delete user with ID 1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <h2>Designing Resource URLs</h2>
        <p>
          The design of URLs is crucial in RESTful API design as they represent
          resources. Follow these conventions:
        </p>
        <h3>
          1. <strong>Use Nouns for Resources</strong>
        </h3>
        <ul>
          <li>
            Resource names should be nouns, representing entities. For example,
            use <code>/users</code> for a collection of user resources rather
            than <code>/getUsers</code> or <code>/createUser</code>.
          </li>
        </ul>
        <h3>
          2. <strong>Use Plural Nouns for Collections</strong>
        </h3>
        <ul>
          <li>
            Use plural nouns for collections. For example, <code>/users</code>{" "}
            for multiple users and <code>/users/1</code> for a specific user.
          </li>
        </ul>
        <h3>
          3. <strong>Nested Resources</strong>
        </h3>
        <ul>
          <li>
            Use nested URLs for related resources. For example, if a user has
            posts, you might access the posts with:
            <ul>
              <li>
                <code>/users/1/posts</code> for all posts by user 1.
              </li>
              <li>
                <code>/users/1/posts/2</code> for a specific post by user 1.
              </li>
            </ul>
          </li>
        </ul>
        <h3>
          4. <strong>Avoid Verbs in URLs</strong>
        </h3>
        <ul>
          <li>
            The action is defined by the HTTP method, so avoid using verbs in
            the URL like <code>/createUser</code> or <code>/deleteUser</code>.
          </li>
        </ul>
        <h2>Handling Query Parameters and Pagination</h2>
        <h3>
          1. <strong>Query Parameters</strong>
        </h3>
        <ul>
          <li>
            Use query parameters to filter, sort, or search resources:
            <ul>
              <li>
                <code>GET /users?role=admin</code> for filtering users with the
                role of <code>admin</code>.
              </li>
              <li>
                <code>GET /products?category=electronics&amp;sort=price</code>{" "}
                to filter by category and sort.
              </li>
            </ul>
          </li>
        </ul>
        <h3>
          2. <strong>Pagination</strong>
        </h3>
        <ul>
          <li>
            When dealing with large datasets, use pagination to limit the number
            of results:
            <ul>
              <li>
                <code>GET /users?page=2&amp;limit=10</code> retrieves the second
                page with 10 users per page.
              </li>
              <li>
                Use headers like <code>Link</code> to provide information about
                the next or previous page.
              </li>
            </ul>
          </li>
        </ul>
        <h2>Status Codes and Error Handling</h2>
        <p>
          Use standard HTTP status codes to indicate the outcome of an API
          request:
        </p>
        <ul>
          <li>
            <strong>200 OK</strong>: Request was successful.
          </li>
          <li>
            <strong>201 Created</strong>: A new resource was created
            successfully.
          </li>
          <li>
            <strong>400 Bad Request</strong>: Client error due to invalid data.
          </li>
          <li>
            <strong>401 Unauthorized</strong>: Authentication is required.
          </li>
          <li>
            <strong>403 Forbidden</strong>: Client is authenticated but does not
            have access.
          </li>
          <li>
            <strong>404 Not Found</strong>: Resource does not exist.
          </li>
          <li>
            <strong>500 Internal Server Error</strong>: Server encountered an
            error.
          </li>
        </ul>
        <h3>Example: Sending Error Responses</h3>
        <CodeHighlight
          content={`
{
  "status": 400,
  "message": "Invalid request",
  "errors": [
    {
      "field": "email",
      "error": "Email is required"
    }
  ]
}
`}
          sandboxOption={false}
        />
        <h2>Versioning Your API</h2>
        <p>
          API versioning allows you to make changes to your API without breaking
          existing clients:
        </p>
        <ul>
          <li>
            <strong>URL Versioning</strong>: Include the version in the URL:{" "}
            <code>GET /v1/users</code>.
          </li>
          <li>
            <strong>Header Versioning</strong>: Specify the version in the
            request header: <code>Accept: application/vnd.example.v1+json</code>
            .
          </li>
        </ul>
        <p>
          URL versioning is the most common approach, as it’s easy to understand
          and implement.
        </p>
        <h2>Security Considerations</h2>
        <p>
          RESTful APIs should implement security measures to protect data and
          ensure proper access control:
        </p>
        <ul>
          <li>
            <strong>Authentication</strong>: Use tokens like{" "}
            <strong>JWT (JSON Web Tokens)</strong> or OAuth to verify the
            identity of clients.
          </li>
          <li>
            <strong>HTTPS</strong>: Always use HTTPS to encrypt data between the
            client and server.
          </li>
          <li>
            <strong>CORS</strong>: Use Cross-Origin Resource Sharing (CORS) to
            restrict access to your API from specific domains.
          </li>
        </ul>
        <h2>Best Practices for RESTful API Design</h2>
        <ul>
          <li>
            <strong>Use Consistent Naming Conventions</strong>: Keep your
            resource names consistent to avoid confusion.
          </li>
          <li>
            <strong>Use JSON as the Response Format</strong>: JSON is widely
            used and easy to work with in most programming languages.
          </li>
          <li>
            <strong>Document Your API</strong>: Use tools like{" "}
            <strong>Swagger</strong> or <strong>Postman</strong> to document
            your API and provide clear examples for users.
          </li>
          <li>
            <strong>Include API Rate Limiting</strong>: Protect your API from
            abuse by limiting the number of requests per client.
          </li>
          <li>
            <strong>Avoid Overfetching/Underfetching</strong>: Design your
            endpoints to return only the necessary data, not too much or too
            little.
          </li>
        </ul>
        <h2>Conclusion</h2>
        <p>
          Designing a RESTful API involves defining clear resources, using
          appropriate HTTP methods, and following conventions for resource URLs,
          status codes, and error handling. By adhering to REST principles and
          best practices, you can build APIs that are easy to use, scalable, and
          maintainable.
        </p>
        <p>
          Whether you’re creating an API for a web application, mobile app, or
          microservice, following RESTful conventions ensures a better developer
          experience and a smoother client-server interaction.
        </p>
      </div>
    </ModuleWrapper>
  );
}
