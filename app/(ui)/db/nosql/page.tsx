import CodeHighlight from "@/app/components/CodeHighlight";

export default function () {
  return (
    <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
      <h1>Introduction to NoSQL</h1>
      <p>
        NoSQL databases have become popular for their ability to handle large
        amounts of unstructured or semi-structured data, offering flexibility
        and scalability that traditional SQL databases might not provide. They
        are widely used in modern web applications, big data, real-time
        analytics, and IoT (Internet of Things).
      </p>
      <p>
        This tutorial will provide an introduction to NoSQL databases, their
        types, common use cases, and how to perform basic operations using a
        NoSQL database like MongoDB.
      </p>
      <hr />
      <h2>What is NoSQL?</h2>
      <p>
        <strong>NoSQL</strong> (Not Only SQL) databases are a category of
        databases that provide a mechanism for storage and retrieval of data
        that is modeled differently from the tabular relations used in
        relational databases (SQL databases). They are designed to store,
        retrieve, and manage data that is not necessarily structured as tables
        with rows and columns.
      </p>
      <p>NoSQL databases are designed to handle:</p>
      <ul>
        <li>
          <strong>Unstructured Data</strong>: Data that doesn&apos;t fit well
          into tables, such as user comments, social media posts, or product
          reviews.
        </li>
        <li>
          <strong>Scalability</strong>: Scaling horizontally by adding more
          servers to handle increased traffic and data.
        </li>
        <li>
          <strong>Real-Time Processing</strong>: Applications that require low
          latency, like chat applications and gaming leaderboards.
        </li>
      </ul>
      <hr />
      <h2>Types of NoSQL Databases</h2>
      <p>
        NoSQL databases can be broadly classified into four types, each suited
        for different types of data and use cases:
      </p>
      <h3>Document Databases</h3>
      <ul>
        <li>
          <strong>Definition</strong>: Store data as documents, usually in JSON
          or BSON format. Each document contains key-value pairs and can have a
          nested structure.
        </li>
        <li>
          <strong>Example</strong>: MongoDB, CouchDB.
        </li>
        <li>
          <strong>Use Case</strong>: Content management systems, user profiles,
          catalogs.
        </li>
        <li>
          <strong>Example Document</strong>:
          <CodeHighlight
            content={`
{
    "user_id": 12345,
    "name": "John Doe",
    "email": "john@example.com",
    "orders": [
        { "order_id": 1, "product": "Laptop", "amount": 1200 },
        { "order_id": 2, "product": "Mouse", "amount": 20 }
    ]
}
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <h3>Key-Value Stores</h3>
      <ul>
        <li>
          <strong>Definition</strong>: Store data as key-value pairs, similar to
          a dictionary or hash map.
        </li>
        <li>
          <strong>Example</strong>: Redis, DynamoDB.
        </li>
        <li>
          <strong>Use Case</strong>: Caching, session management, real-time
          analytics.
        </li>
        <li>
          <strong>Example</strong>:
          <CodeHighlight
            content={`
{
    "user:12345": {
        "name": "John Doe",
        "email": "john@example.com"
    }
}
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <h3>Column-Family Stores</h3>
      <ul>
        <li>
          <strong>Definition</strong>: Store data in a column-oriented way,
          where each row can have different columns. It allows for fast access
          to large datasets.
        </li>
        <li>
          <strong>Example</strong>: Apache Cassandra, HBase.
        </li>
        <li>
          <strong>Use Case</strong>: Time-series data, large-scale event
          logging, sensor data.
        </li>
        <li>
          <strong>Example</strong>:
          <CodeHighlight
            content={`
row_key: user_id
-------------------------------
| name      | age | email          |
| John Doe  | 30  | john@example.com |
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <h3>Graph Databases</h3>
      <ul>
        <li>
          <strong>Definition</strong>: Use graph structures with nodes
          (entities) and edges (relationships) to represent and store data.
        </li>
        <li>
          <strong>Example</strong>: Neo4j, Amazon Neptune.
        </li>
        <li>
          <strong>Use Case</strong>: Social networks, recommendation engines,
          fraud detection.
        </li>
        <li>
          <strong>Example</strong>:
          <CodeHighlight
            content={`
(John)-[:FRIENDS_WITH]->(Jane)
(John)-[:LIKES]->(Product1)
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <hr />
      <h2>When to Use NoSQL?</h2>
      <p>NoSQL databases are ideal in scenarios where:</p>
      <ul>
        <li>
          <strong>Data is unstructured or semi-structured</strong>: When data
          doesn&apos;t fit into the rigid structure of tables.
        </li>
        <li>
          <strong>Scalability is critical</strong>: Horizontal scaling is needed
          for large-scale applications with lots of users or data.
        </li>
        <li>
          <strong>High-speed read/write operations</strong>: Real-time
          applications, such as chat apps or gaming leaderboards.
        </li>
        <li>
          <strong>Flexible schema</strong>: If the data model needs to evolve
          quickly without major changes to the database schema.
        </li>
      </ul>
      <hr />
      <h2>Basic Concepts of NoSQL</h2>
      <h3>Collections and Documents (Document Databases)</h3>
      <ul>
        <li>
          <strong>Collection</strong>: Similar to a table in SQL. It holds
          multiple documents.
        </li>
        <li>
          <strong>Document</strong>: A record stored in a collection, usually in
          JSON format.
        </li>
      </ul>
      <h3>Keys and Values (Key-Value Stores)</h3>
      <ul>
        <li>
          <strong>Key</strong>: A unique identifier for a record.
        </li>
        <li>
          <strong>Value</strong>: The data associated with the key.
        </li>
      </ul>
      <h3>Columns and Rows (Column-Family Stores)</h3>
      <ul>
        <li>
          <strong>Row</strong>: A unique identifier for a set of data.
        </li>
        <li>
          <strong>Column</strong>: Stores attributes or properties of the row.
        </li>
      </ul>
      <h3>Nodes and Relationships (Graph Databases)</h3>
      <ul>
        <li>
          <strong>Node</strong>: Represents entities like users or products.
        </li>
        <li>
          <strong>Edge</strong>: Represents relationships between nodes.
        </li>
      </ul>
      <hr />
      <h2>Basic Operations with NoSQL</h2>
      <h3>Inserting Data</h3>
      <ul>
        <li>
          <strong>MongoDB</strong>:
          <CodeHighlight
            content={`
db.users.insertOne({
    name: "John Doe",
    age: 30,
    email: "john@example.com"
});
`}
            sandboxOption={false}
          />
        </li>
        <li>
          <strong>Redis</strong>:
          <CodeHighlight
            content={`
SET user:12345 "John Doe"
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <h3>Querying Data</h3>
      <ul>
        <li>
          <strong>MongoDB</strong>:
          <CodeHighlight
            content={`
db.users.find({ age: { $gt: 25 } });
`}
            sandboxOption={false}
          />
        </li>
        <li>
          <strong>Redis</strong>:
          <CodeHighlight
            content={`
GET user:12345
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <h3>Updating Data</h3>
      <ul>
        <li>
          <strong>MongoDB</strong>:
          <CodeHighlight
            content={`
db.users.updateOne(
    { name: "John Doe" },
    { $set: { age: 31 } }
);
`}
            sandboxOption={false}
          />
        </li>
        <li>
          <strong>Redis</strong>:
          <CodeHighlight
            content={`
SET user:12345 "John Doe Updated"
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <h3>Deleting Data</h3>
      <ul>
        <li>
          <strong>MongoDB</strong>:
          <CodeHighlight
            content={`
db.users.deleteOne({ name: "John Doe" });
`}
            sandboxOption={false}
          />
        </li>
        <li>
          <strong>Redis</strong>:
          <CodeHighlight
            content={`
DEL user:12345
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <hr />
      <h2>Example with MongoDB</h2>
      <p>
        Here&#39;s a quick example of how to use MongoDB, a popular
        document-based NoSQL database:
      </p>
      <ol>
        <li>
          <strong>Set up MongoDB</strong>: Install MongoDB locally or use a
          service like MongoDB Atlas.
        </li>
        <li>
          <strong>Connect to MongoDB</strong>: Using the MongoDB shell or a
          client like <code>mongoose</code> in Node.js.
        </li>
        <li>
          <strong>Insert a Document</strong>:
          <CodeHighlight
            content={`
db.users.insertOne({
    name: "Jane Doe",
    age: 28,
    email: "jane@example.com"
});
`}
            sandboxOption={false}
          />
        </li>
        <li>
          <strong>Query for Users over 25</strong>:
          <CodeHighlight
            content={`
db.users.find({ age: { $gt: 25 } });
`}
            sandboxOption={false}
          />
        </li>
        <li>
          <strong>Update a User&#39;s Age</strong>:
          <CodeHighlight
            content={`
db.users.updateOne(
    { name: "Jane Doe" },
    { $set: { age: 29 } }
);
`}
            sandboxOption={false}
          />
        </li>
        <li>
          <strong>Delete a User</strong>:
          <CodeHighlight
            content={`
db.users.deleteOne({ name: "Jane Doe" });
`}
            sandboxOption={false}
          />
        </li>
      </ol>
      <hr />
      <h2>Pros and Cons of NoSQL</h2>
      <h3>Pros</h3>
      <ul>
        <li>
          <strong>Scalability</strong>: Easy to scale horizontally by adding
          more servers.
        </li>
        <li>
          <strong>Flexible Data Models</strong>: Adaptable schema allows you to
          change the structure of your data without downtime.
        </li>
        <li>
          <strong>High Performance</strong>: Optimized for read/write
          operations, making them suitable for high-traffic applications.
        </li>
        <li>
          <strong>Variety of Data Types</strong>: Can handle unstructured and
          semi-structured data.
        </li>
      </ul>
      <h3>Cons</h3>
      <ul>
        <li>
          <strong>Lack of Standardization</strong>: Each NoSQL database has its
          own query language and features.
        </li>
        <li>
          <strong>Consistency Trade-offs</strong>: Some NoSQL databases trade
          consistency for availability and partition tolerance (as per the CAP
          theorem).
        </li>
        <li>
          <strong>Complexity in Relationships</strong>: Representing
          relationships can be more complex than in relational databases (e.g.,
          requiring manual management in document databases).
        </li>
      </ul>
      <hr />
      <h2>Conclusion</h2>
      <p>
        NoSQL databases offer a versatile alternative to traditional SQL
        databases, making them suitable for applications with dynamic schemas,
        large-scale data, and real-time requirements. Whether you are building a
        social media platform, IoT application, or a content management system,
        understanding the strengths and weaknesses of NoSQL databases will help
        you choose the right tool for your project.
      </p>
      <p>
        With this tutorial, you should have a basic understanding of NoSQL
        databases and the common operations you can perform with them. Happy
        coding, and explore the flexibility and power of NoSQL in your next
        project!
      </p>
    </div>
  );
}
