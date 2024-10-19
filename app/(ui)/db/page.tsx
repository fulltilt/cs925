import CodeHighlight from "@/app/components/CodeHighlight";

export default function DB() {
  return (
    <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
      <h1>Introductory Tutorial on Databases</h1>
      <p>
        Databases are a fundamental part of software applications, allowing us
        to store, retrieve, and manipulate data efficiently. They are used in
        almost every type of software—from web applications to mobile apps, and
        even embedded systems. Understanding the basics of databases is crucial
        for developers to build scalable and data-driven applications. This
        tutorial will provide an introduction to databases, types of databases,
        and basic concepts like SQL, NoSQL, and database operations.
      </p>
      <hr />
      <h2>What is a Database?</h2>
      <p>
        A <strong>database</strong> is a structured collection of data that is
        stored and organized in a way that makes it easy to access, manage, and
        update. Think of it like a digital filing cabinet where data can be
        stored in an organized manner.
      </p>
      <p>Databases are used to store various types of data, such as:</p>
      <ul>
        <li>User information (e.g., username, email, password)</li>
        <li>Product data for e-commerce applications</li>
        <li>Transaction records for financial applications</li>
        <li>Inventory data for warehouses</li>
      </ul>
      <p>
        Databases allow us to perform operations like inserting new data,
        retrieving existing data, updating records, and deleting data that is no
        longer needed.
      </p>
      <hr />
      <h2>Types of Databases</h2>
      <p>
        There are many types of databases, but they mainly fall into two
        categories: <strong>Relational Databases</strong> and{" "}
        <strong>NoSQL Databases</strong>.
      </p>
      <h3>Relational Databases (SQL)</h3>
      <ul>
        <li>
          <strong>Definition</strong>: Relational databases use a structured
          format, typically tables, to store data. Data is organized into rows
          and columns, similar to a spreadsheet.
        </li>
        <li>
          <strong>Examples</strong>: MySQL, PostgreSQL, SQLite, Microsoft SQL
          Server.
        </li>
        <li>
          <strong>Structured Query Language (SQL)</strong>: SQL is used to
          interact with relational databases. It allows you to perform various
          operations like selecting data, inserting records, and updating
          values.
        </li>
        <li>
          <strong>Use Cases</strong>: Relational databases are best when data
          relationships are well-defined and require complex queries. Examples
          include e-commerce websites, financial applications, and inventory
          management systems.
        </li>
      </ul>
      <h3>NoSQL Databases</h3>
      <ul>
        <li>
          <strong>Definition</strong>: NoSQL databases are designed for more
          flexible data models and do not rely on a fixed table structure like
          SQL databases. They are useful for storing unstructured or
          semi-structured data.
        </li>
        <li>
          <strong>Types of NoSQL Databases</strong>:
          <ul>
            <li>
              <strong>Document Databases</strong>: Store data as JSON-like
              documents (e.g., MongoDB).
            </li>
            <li>
              <strong>Key-Value Stores</strong>: Store data as key-value pairs
              (e.g., Redis).
            </li>
            <li>
              <strong>Column-Family Stores</strong>: Store data in columns
              instead of rows (e.g., Apache Cassandra).
            </li>
            <li>
              <strong>Graph Databases</strong>: Store data as nodes and edges
              (e.g., Neo4j).
            </li>
          </ul>
        </li>
        <li>
          <strong>Use Cases</strong>: NoSQL databases are ideal for real-time
          applications, content management systems, and applications that need
          to scale horizontally (e.g., social media platforms).
        </li>
      </ul>
      <hr />
      <h2>Basic Database Concepts</h2>
      <p>
        Understanding a few key concepts is essential when working with
        databases:
      </p>
      <h3>Tables and Collections</h3>
      <ul>
        <li>
          <strong>Tables</strong> (SQL): In relational databases, data is stored
          in tables. Each table represents an entity (e.g., &quot;Users&quot;,
          &quot;Products&quot;).
        </li>
        <li>
          <strong>Collections</strong> (NoSQL): In document databases like
          MongoDB, collections are used instead of tables. A collection is a
          group of related documents (similar to a table).
        </li>
      </ul>
      <h3>Records, Rows, and Documents</h3>
      <ul>
        <li>
          <strong>Records/Rows</strong> (SQL): A record (or row) in a table
          represents a single entity or data point. For example, in a
          &quot;Users&quot; table, a record might represent a single user.
        </li>
        <li>
          <strong>Documents</strong> (NoSQL): In document-based NoSQL databases,
          data is stored in documents. Each document can have a different
          structure but is often represented as JSON or BSON objects.
        </li>
      </ul>
      <h3>Keys and Indexes</h3>
      <ul>
        <li>
          <strong>Primary Key</strong>: A unique identifier for each record in a
          table (e.g., <code>user_id</code>).
        </li>
        <li>
          <strong>Foreign Key</strong>: A field in one table that refers to the
          primary key of another table, establishing relationships between
          tables.
        </li>
        <li>
          <strong>Index</strong>: A database index is used to speed up the
          retrieval of records. It’s similar to an index in a book that allows
          you to quickly find a specific topic.
        </li>
      </ul>
      <hr />
      <h2>Common Database Operations</h2>
      <p>
        Most databases support the following basic operations, often referred to
        as <strong>CRUD</strong>:
      </p>
      <ul>
        <li>
          <strong>Create</strong>: Add new data to the database (e.g., adding a
          new user).
        </li>
        <li>
          <strong>Read</strong>: Retrieve existing data from the database (e.g.,
          querying all products).
        </li>
        <li>
          <strong>Update</strong>: Modify existing data in the database (e.g.,
          updating a user’s profile).
        </li>
        <li>
          <strong>Delete</strong>: Remove data from the database (e.g., deleting
          an outdated record).
        </li>
      </ul>
      <h3>SQL vs. NoSQL Queries</h3>
      <ul>
        <li>
          <strong>SQL Query Example</strong> (for a relational database like
          MySQL):
          <CodeHighlight
            content={`
SELECT * FROM users WHERE age > 18;
`}
            sandboxOption={false}
          />
        </li>
        <li>
          <strong>NoSQL Query Example</strong> (for a document database like
          MongoDB):
          <CodeHighlight
            content={`
db.users.find({ age: { $gt: 18 } });
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <p>
        SQL databases use structured queries with a specific syntax, whereas
        NoSQL databases often use more flexible query languages or methods.
      </p>
      <hr />
      <h2>Popular Databases</h2>
      <p>Here are some commonly used databases in the industry:</p>
      <ul>
        <li>
          <strong>MySQL</strong>: An open-source SQL database known for its
          reliability and performance.
        </li>
        <li>
          <strong>PostgreSQL</strong>: A powerful, open-source SQL database that
          supports complex queries and transactions.
        </li>
        <li>
          <strong>MongoDB</strong>: A popular NoSQL database that stores data as
          JSON-like documents.
        </li>
        <li>
          <strong>SQLite</strong>: A lightweight, self-contained SQL database
          often used for mobile and desktop applications.
        </li>
        <li>
          <strong>Redis</strong>: A key-value store known for its speed and is
          often used for caching.
        </li>
        <li>
          <strong>Firebase</strong>: A NoSQL cloud database used for real-time
          applications, especially in mobile development.
        </li>
      </ul>
      <hr />
      <h2>Choosing the Right Database</h2>
      <p>
        The choice between SQL and NoSQL databases depends on your
        application&#39;s requirements:
      </p>
      <ul>
        <li>
          <strong>Use SQL</strong> if:
          <ul>
            <li>You need complex queries and transactions.</li>
            <li>The data has a well-defined structure and relationships.</li>
            <li>Data integrity is crucial (e.g., banking systems).</li>
          </ul>
        </li>
        <li>
          <strong>Use NoSQL</strong> if:
          <ul>
            <li>You need to store unstructured or semi-structured data.</li>
            <li>
              The application requires high scalability (e.g., social media).
            </li>
            <li>You want a flexible schema that can change over time.</li>
          </ul>
        </li>
      </ul>
      <hr />
      <h2>Conclusion</h2>
      <p>
        Databases are crucial for managing and storing data in modern
        applications. Whether you choose a relational database like MySQL or a
        NoSQL database like MongoDB, understanding the strengths and weaknesses
        of each can help you make better decisions for your projects. By
        mastering CRUD operations, database queries, and data models, you can
        design efficient and scalable applications that handle data effectively.
      </p>
    </div>
  );
}
