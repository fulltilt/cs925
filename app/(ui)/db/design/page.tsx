import CodeHighlight from "@/app/components/CodeHighlight";
import ModuleWrapper from "@/app/components/ModuleWrapper";

export default function () {
  return (
    <ModuleWrapper>
      <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
        <h1>Database Design Principles</h1>
        <p>
          Designing a database is a critical part of building a robust,
          efficient, and scalable software system. A well-designed database
          ensures that data is organized, stored, and retrieved efficiently,
          which directly affects the performance and maintainability of an
          application. This guide covers the fundamental principles of database
          design, focusing on relational databases, but many of the concepts
          also apply to NoSQL databases.
        </p>
        <hr />
        <h2>Why Database Design is Important</h2>
        <p>
          Database design is crucial because it directly affects how efficiently
          data can be stored, accessed, and modified. A poorly designed database
          can lead to issues such as:
        </p>
        <ul>
          <li>
            <strong>Slow queries</strong> due to inefficient data retrieval.
          </li>
          <li>
            <strong>Data redundancy</strong>, leading to inconsistencies.
          </li>
          <li>
            <strong>Difficulty in maintaining</strong> the database as the
            system evolves.
          </li>
          <li>
            <strong>Scalability challenges</strong> as the system grows.
          </li>
        </ul>
        <p>
          A well-designed database ensures data integrity, minimizes redundancy,
          and enables efficient querying, making it easier to maintain and scale
          over time.
        </p>
        <hr />
        <h2>Core Principles of Database Design</h2>
        <h3>Data Integrity</h3>
        <ul>
          <li>Ensuring the accuracy and consistency of data is paramount.</li>
          <li>
            Use constraints like <strong>primary keys</strong>,{" "}
            <strong>foreign keys</strong>, <strong>unique constraints</strong>,
            and <strong>check constraints</strong> to maintain integrity.
          </li>
          <li>
            Ensure that data relationships are respected (e.g., a{" "}
            <code>user_id</code> in an orders table should refer to a valid
            user).
          </li>
        </ul>
        <h3>Data Redundancy</h3>
        <ul>
          <li>
            Reducing unnecessary data duplication saves storage space and
            minimizes the chances of data inconsistency.
          </li>
          <li>
            For example, avoid storing a customer&#39;s address multiple times;
            instead, store it in a separate table and reference it where needed.
          </li>
        </ul>
        <h3>Data Normalization</h3>
        <ul>
          <li>
            Organize data to reduce redundancy and improve data integrity.
          </li>
          <li>
            This involves dividing large tables into smaller ones and defining
            relationships between them.
          </li>
        </ul>
        <h3>Scalability and Performance</h3>
        <ul>
          <li>
            Consider how the database will perform under different workloads.
          </li>
          <li>
            Plan for future growth by designing the schema to handle more data
            and users.
          </li>
          <li>Use indexing and optimize queries for performance.</li>
        </ul>
        <hr />
        <h2>Steps to Design a Database</h2>
        <h3>Step 1: Understanding Requirements</h3>
        <ul>
          <li>Identify the data that needs to be stored.</li>
          <li>
            Understand the operations that will be performed frequently (e.g.,
            querying, updating).
          </li>
          <li>Discuss the reporting and analytics needs of the application.</li>
        </ul>
        <h3>Step 2: Defining Entities and Relationships</h3>
        <ul>
          <li>
            <strong>Entities</strong> represent real-world objects or concepts,
            such as <code>User</code>, <code>Order</code>, or{" "}
            <code>Product</code>.
          </li>
          <li>
            <strong>Relationships</strong> describe how these entities interact
            (e.g., a <code>User</code> can have multiple <code>Orders</code>).
          </li>
        </ul>
        <h3>Step 3: Creating Entity-Relationship (ER) Diagrams</h3>
        <ul>
          <li>ER diagrams help visualize entities and their relationships.</li>
          <li>
            Each entity becomes a table, and relationships are defined using
            foreign keys.
          </li>
          <li>
            Example:
            <ul>
              <li>
                <strong>User</strong> (user_id, name, email)
              </li>
              <li>
                <strong>Order</strong> (order_id, user_id, date, total_amount)
              </li>
              <li>
                Relationship: One-to-Many between <code>User</code> and{" "}
                <code>Order</code>.
              </li>
            </ul>
          </li>
        </ul>
        <h3>Step 4: Defining Tables and Columns</h3>
        <ul>
          <li>
            Define tables for each entity and the columns they will contain.
          </li>
          <li>
            Assign appropriate data types (e.g., <code>INT</code>,{" "}
            <code>VARCHAR</code>, <code>DATE</code>).
          </li>
        </ul>
        <h3>Step 5: Choosing Primary Keys</h3>
        <ul>
          <li>
            A <strong>primary key</strong> is a unique identifier for each
            record in a table.
          </li>
          <li>
            It ensures that each row is unique and can be referenced in other
            tables.
          </li>
          <li>
            Example: <code>user_id</code> in a <code>User</code> table,{" "}
            <code>order_id</code> in an <code>Order</code> table.
          </li>
        </ul>
        <hr />
        <h2>Normalization</h2>
        <p>
          Normalization is the process of organizing data to reduce redundancy
          and improve integrity. It involves breaking down tables and ensuring
          dependencies make sense.
        </p>
        <h3>First Normal Form (1NF)</h3>
        <ul>
          <li>Ensure each column contains atomic (indivisible) values.</li>
          <li>Each column must have a unique name.</li>
          <li>
            Example: Avoid storing multiple phone numbers in a single field;
            instead, create a <code>PhoneNumbers</code> table.
          </li>
        </ul>
        <h3>Second Normal Form (2NF)</h3>
        <ul>
          <li>Must be in 1NF.</li>
          <li>
            Remove partial dependencies—every non-key column should depend on
            the whole primary key.
          </li>
          <li>
            Example: In an <code>Order</code> table with <code>order_id</code>{" "}
            and <code>product_name</code>, move <code>product_name</code> to a{" "}
            <code>Products</code> table.
          </li>
        </ul>
        <h3>Third Normal Form (3NF)</h3>
        <ul>
          <li>Must be in 2NF.</li>
          <li>
            Remove transitive dependencies—non-key columns should not depend on
            other non-key columns.
          </li>
          <li>
            Example: If <code>Orders</code> table has <code>city</code> and{" "}
            <code>zip_code</code>, move <code>city</code> to a{" "}
            <code>ZipCodes</code> table.
          </li>
        </ul>
        <h3>Boyce-Codd Normal Form (BCNF)</h3>
        <ul>
          <li>
            An advanced version of 3NF, ensuring more strict requirements for
            functional dependencies.
          </li>
        </ul>
        <hr />
        <h2>Denormalization and When to Use It</h2>
        <ul>
          <li>
            <strong>Denormalization</strong> is the process of combining tables
            to reduce the number of joins in queries, improving read
            performance.
          </li>
          <li>
            It is used when performance is more critical than storage
            efficiency.
          </li>
          <li>
            Common in <strong>read-heavy</strong> applications where you need to
            reduce the complexity of queries.
          </li>
        </ul>
        <hr />
        <h2>Indexing for Performance</h2>
        <ul>
          <li>
            <strong>Indexing</strong> speeds up data retrieval by allowing the
            database to find rows without scanning the entire table.
          </li>
          <li>
            Types of indexes include <strong>primary</strong>,{" "}
            <strong>unique</strong>, and <strong>composite</strong> indexes.
          </li>
          <li>
            <strong>Example</strong>:
            <CodeHighlight
              content={`
CREATE INDEX idx_user_email ON users(email);
`}
              sandboxOption={false}
            />
          </li>
          <li>
            However, <strong>over-indexing</strong> can slow down write
            operations, so use indexes judiciously.
          </li>
        </ul>
        <hr />
        <h2>Best Practices for Database Design</h2>
        <ul>
          <li>
            <strong>Use Descriptive Names</strong>: Use clear and descriptive
            table and column names (e.g., <code>user_id</code>,{" "}
            <code>created_at</code>).
          </li>
          <li>
            <strong>Avoid Storing Calculated Data</strong>: Store raw data and
            calculate derived values in queries or application logic.
          </li>
          <li>
            <strong>Backup and Disaster Recovery</strong>: Plan for regular
            backups and a disaster recovery strategy.
          </li>
          <li>
            <strong>Documentation</strong>: Document the schema, relationships,
            and reasoning behind design decisions.
          </li>
          <li>
            <strong>Consider Data Security</strong>: Store sensitive data
            securely using encryption and follow the principle of least
            privilege for access control.
          </li>
        </ul>
        <hr />
        <h2>Conclusion</h2>
        <p>
          Good database design is a blend of theory and practice. It involves
          understanding the data model, applying normalization rules, and
          considering the application&#39;s performance needs. A well-structured
          database is the foundation of any scalable and efficient application,
          ensuring that data remains accurate, secure, and easily accessible.{" "}
        </p>
        <p>
          By following these principles and best practices, you can design a
          database that serves the needs of your application today while being
          flexible enough to grow with it in the future.
        </p>
      </div>
    </ModuleWrapper>
  );
}
