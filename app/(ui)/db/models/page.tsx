import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Model() {
  return (
    <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
      <h1>Data Modeling and Normalization</h1>
      <p>
        Data modeling and normalization are fundamental concepts in database
        design that help to organize data efficiently, maintain integrity, and
        optimize performance. This tutorial will walk through what data modeling
        and normalization are, why they are important, and how to apply these
        concepts to create well-structured databases.
      </p>
      <hr />
      <h2>What is Data Modeling?</h2>
      <p>
        <strong>Data modeling</strong> is the process of creating a visual
        representation of the structure and relationships of data within a
        database. It helps to define how data is stored, accessed, and
        organized. Data models are used as blueprints for database design.
      </p>
      <p>A data model typically represents:</p>
      <ul>
        <li>
          <strong>Entities</strong> (real-world objects or concepts).
        </li>
        <li>
          <strong>Attributes</strong> (properties or details of entities).
        </li>
        <li>
          <strong>Relationships</strong> (how entities are related to one
          another).
        </li>
      </ul>
      <hr />
      <h2>Why is Data Modeling Important?</h2>
      <p>Data modeling is critical because it:</p>
      <ul>
        <li>
          <strong>Organizes Data</strong>: Ensures that data is structured in a
          logical and consistent way.
        </li>
        <li>
          <strong>Improves Data Quality</strong>: Reduces redundancy and
          increases data integrity.
        </li>
        <li>
          <strong>Facilitates Understanding</strong>: Provides a clear
          structure, making it easier for developers and stakeholders to
          understand the system.
        </li>
        <li>
          <strong>Optimizes Queries</strong>: Enables efficient query design and
          improves database performance.
        </li>
        <li>
          <strong>Supports Scalability</strong>: Allows for easier modification
          and growth as application needs change.
        </li>
      </ul>
      <hr />
      <h2>Types of Data Models</h2>
      <p>
        Data modeling is typically broken down into three levels, each serving a
        different purpose:
      </p>
      <h3>Conceptual Data Model</h3>
      <ul>
        <li>Focuses on high-level concepts and relationships.</li>
        <li>Does not include details about how data will be stored.</li>
        <li>Often represented as Entity-Relationship (ER) diagrams.</li>
        <li>
          Example: A <code>Customer</code> entity might be related to{" "}
          <code>Orders</code>.
        </li>
      </ul>
      <h3>Logical Data Model</h3>
      <ul>
        <li>
          More detailed than a conceptual model, focusing on the structure of
          the data.
        </li>
        <li>Defines entities, attributes, primary keys, and relationships.</li>
        <li>Independent of a specific database management system (DBMS).</li>
        <li>
          Example: A <code>Customer</code> entity with <code>customer_id</code>{" "}
          (primary key), <code>name</code>, <code>email</code>, etc.
        </li>
      </ul>
      <h3>Physical Data Model</h3>
      <ul>
        <li>
          Represents how the database will be implemented on a specific DBMS.
        </li>
        <li>
          Includes table names, column data types, indexes, constraints, and
          more.
        </li>
        <li>
          Example: Defining a <code>customers</code> table with fields like{" "}
          <code>customer_id INT PRIMARY KEY</code>,{" "}
          <code>name VARCHAR(100)</code>, etc.
        </li>
      </ul>
      <hr />
      <h2>What is Data Normalization?</h2>
      <p>
        <strong>Normalization</strong> is the process of organizing data to
        minimize redundancy and dependency. It involves dividing a database into
        smaller tables and defining relationships between them. The goal is to
        ensure data integrity and make databases more efficient to update.
      </p>
      <hr />
      <h2>Normalization Forms Explained</h2>
      <p>
        Normalization is typically applied in a series of steps called{" "}
        <strong>normal forms</strong>. Each normal form addresses a specific
        type of data redundancy and builds on the previous one:
      </p>
      <h3>First Normal Form (1NF)</h3>
      <ul>
        <li>Ensures that each column contains atomic (indivisible) values.</li>
        <li>
          Each column should have a unique name, and each row should be unique.
        </li>
        <li>
          <p>Example:</p>
          <ul>
            <li>
              <p>
                A table containing a list of phone numbers in a single column
                should be split into multiple rows.
              </p>
              <p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Phone Numbers</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John</TableCell>
                      <TableCell>123-456, 987-654</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </p>
              <br />
              <p>Becomes:</p>
              <br />
              <p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Phone Numbers</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John</TableCell>
                      <TableCell>123-456</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>John</TableCell>
                      <TableCell>987-654</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </p>
            </li>
          </ul>
        </li>
      </ul>
      <h3>Second Normal Form (2NF)</h3>
      <ul>
        <li>Must be in 1NF.</li>
        <li>
          Remove partial dependencies—non-key attributes should depend on the
          entire primary key.
        </li>
        <li>Applies to tables with a composite primary key.</li>
        <li>
          <p>
            Example: A table with <code>order_id</code> and{" "}
            <code>product_name</code> might be split into <code>Orders</code>{" "}
            and <code>Products</code> tables.
          </p>
          <br />
          <p> Original table:</p>
          <p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Laptop</TableCell>
                  <TableCell>1200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Mouse</TableCell>
                  <TableCell>20</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </p>
          <br />
          <p> Split into:</p>
          <br />
          <p>
            <strong>Orders</strong>:
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer Name</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>John Doe</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </p>
          <p>
            <br />
            <strong>Products</strong>:
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Laptop</TableCell>
                  <TableCell>1200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mouse</TableCell>
                  <TableCell>20</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </p>
        </li>
      </ul>
      <h3>Third Normal Form (3NF)</h3>
      <ul>
        <li>Must be in 2NF.</li>
        <li>
          Remove transitive dependencies—non-key attributes should not depend on
          other non-key attributes.
        </li>
        <li>
          <p>
            Example: A table with <code>student_id</code>,{" "}
            <code>student_name</code>, and <code>department_name</code> might be
            split into <code>Students</code> and <code>Departments</code>.
          </p>
          <br />
          <p> Original table:</p>
          <p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student Id</TableHead>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Department Name</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Alice</TableCell>
                  <TableCell>Computer Science</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </p>
          <br />
          <p> Split into:</p>
          <br />
          <p>
            <strong>Students</strong>:
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student Id</TableHead>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Department</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Alice</TableCell>
                  <TableCell>101</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </p>
          <p>
            <br />
            <strong>Departments</strong>:
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Department Id</TableHead>
                  <TableHead>Department Name</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>101</TableCell>
                  <TableCell>Computer Science</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </p>
        </li>
      </ul>
      <h3>Boyce-Codd Normal Form (BCNF)</h3>
      <ul>
        <li>A more strict version of 3NF.</li>
        <li>
          Ensures that every determinant is a candidate key, eliminating any
          remaining anomalies.
        </li>
      </ul>
      <hr />
      <h2>Example: Data Modeling and Normalization</h2>
      <p>Let&#39;s walk through an example:</p>
      <p>
        <strong>Step 1: Conceptual Model</strong>{" "}
      </p>
      <ul>
        <li>
          Entities: <code>Customer</code>, <code>Order</code>,{" "}
          <code>Product</code>
        </li>
        <li>
          Relationships:
          <ul>
            <li>
              A <code>Customer</code> can place multiple <code>Orders</code>.
            </li>
            <li>
              An <code>Order</code> can contain multiple <code>Products</code>.
            </li>
          </ul>
        </li>
      </ul>
      <p>
        <strong>Step 2: Logical Model</strong>{" "}
      </p>
      <ul>
        <li>
          <code>Customer</code> Table: <code>customer_id</code>,{" "}
          <code>name</code>, <code>email</code>
        </li>
        <li>
          <code>Order</code> Table: <code>order_id</code>,{" "}
          <code>order_date</code>, <code>customer_id</code> (foreign key)
        </li>
        <li>
          <code>Product</code> Table: <code>product_id</code>,{" "}
          <code>product_name</code>, <code>price</code>
        </li>
        <li>
          <code>OrderDetails</code> Table: <code>order_id</code> (foreign key),{" "}
          <code>product_id</code> (foreign key), <code>quantity</code>
        </li>
      </ul>
      <p>
        <strong>Step 3: Applying Normalization</strong>{" "}
      </p>
      <ul>
        <li>
          Ensure that <code>OrderDetails</code> is in 1NF by making sure{" "}
          <code>product_id</code> and <code>quantity</code> are atomic.
        </li>
        <li>
          Ensure 2NF by storing <code>product_name</code> and <code>price</code>{" "}
          in the <code>Product</code> table, not <code>OrderDetails</code>.
        </li>
        <li>
          Ensure 3NF by splitting off attributes like{" "}
          <code>department_name</code> in a <code>Departments</code> table if
          needed.
        </li>
      </ul>
      <hr />
      <h2>Denormalization: When to Use It</h2>
      <p>
        <strong>Denormalization</strong> involves combining tables to reduce the
        number of joins needed for queries. It can improve read performance at
        the cost of increased storage and potential data redundancy.
      </p>
      <ul>
        <li>
          <p>
            <strong>When to Use</strong>:
          </p>
          <ul>
            <li>
              For <strong>read-heavy applications</strong> where joins are
              costly.
            </li>
            <li>
              When <strong>performance</strong> is more critical than storage.
            </li>
            <li>
              For <strong>caching</strong> frequently accessed data.
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>Example</strong>: If a <code>User</code> table and{" "}
            <code>Address</code> table are joined often, consider storing the
            address directly in the <code>User</code> table for faster reads.
          </p>
        </li>
      </ul>
      <hr />
      <h2>Best Practices for Data Modeling and Normalization</h2>
      <ul>
        <li>
          <strong>Start with a conceptual model</strong> to understand entities
          and relationships before diving into details.
        </li>
        <li>
          <strong>Normalize to 3NF</strong>, and then denormalize where
          performance gains are needed.
        </li>
        <li>
          <strong>Use primary keys and foreign keys</strong> to enforce
          relationships and ensure data integrity.
        </li>
        <li>
          <strong>Index columns</strong> that are frequently queried to improve
          performance.
        </li>
        <li>
          <strong>Review and refine</strong> your model as application
          requirements evolve.
        </li>
      </ul>
      <hr />
      <h2>Conclusion</h2>
      <p>
        Data modeling and normalization are essential for creating databases
        that are efficient, maintainable, and scalable. By understanding
        entities, relationships, and the principles of normalization, you can
        design databases that ensure data consistency while avoiding unnecessary
        redundancy. With this tutorial, you should be equipped with the
        knowledge to create well-structured databases that serve the needs of
        your application.
      </p>
    </div>
  );
}
