import CodeHighlight from "@/app/components/CodeHighlight";

export default function SQL() {
  return (
    <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
      <h1>Introduction to Structured Query Language (SQL)</h1>
      <p>
        SQL (Structured Query Language) is a standardized language used to
        manage and manipulate relational databases. It allows you to interact
        with databases, perform operations like creating tables, querying data,
        inserting records, updating entries, and deleting data. SQL is widely
        used in applications that need to store and retrieve structured data,
        such as e-commerce sites, financial systems, and inventory management
        systems.
      </p>
      <hr />
      <h2>What is SQL?</h2>
      <p>
        <strong>SQL (Structured Query Language)</strong> is a language
        specifically designed for managing data held in a relational database
        management system (RDBMS). It provides a way to define, manipulate, and
        query data. SQL is used for a variety of tasks, such as:
      </p>
      <ul>
        <li>Creating databases and tables.</li>
        <li>Inserting, updating, and deleting records.</li>
        <li>Retrieving data from one or more tables.</li>
        <li>Managing access permissions and security.</li>
      </ul>
      <p>
        A <strong>relational database</strong> organizes data into tables, which
        consist of rows (records) and columns (fields).
      </p>
      <hr />
      <h2>Basic SQL Syntax</h2>
      <p>
        In SQL, commands are written as statements. Most of these commands
        follow a simple structure:
      </p>
      <CodeHighlight
        content={`
SELECT column1, column2 FROM table_name WHERE condition;
`}
        sandboxOption={false}
      />
      <ul>
        <li>
          <strong>Keywords</strong> like <code>SELECT</code> and{" "}
          <code>FROM</code> are not case-sensitive, but it&apos;s a common
          convention to write them in uppercase.
        </li>
        <li>
          <strong>Column names</strong> and <strong>table names</strong> should
          match the exact case as they are defined in the database.
        </li>
      </ul>
      <hr />
      <h2>Common SQL Commands</h2>
      <p>Let&apos;s look at some of the most commonly used SQL commands:</p>
      <h3>CREATE</h3>
      <ul>
        <li>
          <strong>Create a Database</strong>:
          <CodeHighlight
            content={`
CREATE DATABASE my_database;
`}
            sandboxOption={false}
          />
        </li>
        <li>
          <strong>Create a Table</strong>:
          <CodeHighlight
            content={`
CREATE TABLE employees (
    id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age INT,
    salary DECIMAL(10, 2)
);
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <h3>SELECT</h3>
      <ul>
        <li>
          <strong>Select all columns</strong>:
          <CodeHighlight
            content={`
SELECT * FROM employees;
`}
            sandboxOption={false}
          />
        </li>
        <li>
          <strong>Select specific columns</strong>:
          <CodeHighlight
            content={`
SELECT first_name, salary FROM employees;
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <h3>INSERT</h3>
      <ul>
        <li>
          <strong>Insert a new record</strong>:
          <CodeHighlight
            content={`
INSERT INTO employees (id, first_name, last_name, age, salary)
VALUES (1, 'John', 'Doe', 30, 50000.00);
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <h3>UPDATE</h3>
      <ul>
        <li>
          <strong>Update an existing record</strong>:
          <CodeHighlight
            content={`
UPDATE employees
SET salary = 55000.00
WHERE id = 1;
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <h3>DELETE</h3>
      <ul>
        <li>
          <strong>Delete a record</strong>:
          <CodeHighlight
            content={`
DELETE FROM employees
WHERE id = 1;
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <hr />
      <h2>Filtering and Sorting Data</h2>
      <p>
        You can filter and sort data using clauses like <code>WHERE</code>,{" "}
        <code>ORDER BY</code>, and <code>LIMIT</code>.
      </p>
      <h3>WHERE</h3>
      <p>
        The <code>WHERE</code> clause is used to filter records that meet a
        specified condition:
      </p>
      <CodeHighlight
        content={`
SELECT * FROM employees
WHERE age > 25;
`}
        sandboxOption={false}
      />
      <h3>ORDER BY</h3>
      <p>
        The <code>ORDER BY</code> clause sorts the result-set in ascending or
        descending order:
      </p>
      <ul>
        <li>
          <strong>Ascending Order</strong> (default):
          <CodeHighlight
            content={`
SELECT * FROM employees
ORDER BY salary;
`}
            sandboxOption={false}
          />
        </li>
        <li>
          <strong>Descending Order</strong>:
          <CodeHighlight
            content={`
SELECT * FROM employees
ORDER BY salary DESC;
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <h3>LIMIT</h3>
      <p>
        The <code>LIMIT</code> clause is used to specify the number of records
        to return. The following example limits the number of results to 5 if
        there are more than 5 results:
      </p>
      <CodeHighlight
        content={`
SELECT * FROM employees
ORDER BY salary DESC
LIMIT 5;
`}
        sandboxOption={false}
      />

      <hr />
      <h2>Joining Tables</h2>
      <p>
        In relational databases, you often need to retrieve data from multiple
        tables. SQL provides several types of joins to combine tables based on
        related columns.
      </p>
      <h3>INNER JOIN</h3>
      <p>Returns rows that have matching values in both tables:</p>
      <CodeHighlight
        content={`
SELECT employees.first_name, departments.department_name
FROM employees
INNER JOIN departments ON employees.department_id = departments.id;
`}
        sandboxOption={false}
      />
      <h3>LEFT JOIN</h3>
      <p>
        Returns all rows from the left table and matched rows from the right
        table:
      </p>
      <CodeHighlight
        content={`
SELECT employees.first_name, departments.department_name
FROM employees
LEFT JOIN departments ON employees.department_id = departments.id;
`}
        sandboxOption={false}
      />
      <h3>RIGHT JOIN</h3>
      <p>
        Returns all rows from the right table and matched rows from the left
        table:
      </p>
      <CodeHighlight
        content={`
SELECT employees.first_name, departments.department_name
FROM employees
RIGHT JOIN departments ON employees.department_id = departments.id;
`}
        sandboxOption={false}
      />
      <hr />
      <h2>Aggregate Functions</h2>
      <p>
        Aggregate functions perform a calculation on a set of values and return
        a single value. Common aggregate functions include:
      </p>
      <ul>
        <li>
          <strong>COUNT</strong>: Counts the number of rows.
          <CodeHighlight
            content={`
SELECT COUNT(*) FROM employees;
`}
            sandboxOption={false}
          />
        </li>
        <li>
          <strong>SUM</strong>: Returns the sum of a numeric column.
          <CodeHighlight
            content={`
SELECT SUM(salary) FROM employees;
`}
            sandboxOption={false}
          />
        </li>
        <li>
          <strong>AVG</strong>: Returns the average value of a numeric column.
          <CodeHighlight
            content={`
SELECT AVG(salary) FROM employees;
`}
            sandboxOption={false}
          />
        </li>
        <li>
          <strong>MAX</strong> and <strong>MIN</strong>: Returns the maximum or
          minimum value.
          <CodeHighlight
            content={`
SELECT MAX(salary) FROM employees;
SELECT MIN(salary) FROM employees;
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <hr />
      <h2>Group By and Having</h2>
      <p>
        The <code>GROUP BY</code> statement is used to group rows that have the
        same values into summary rows. The <code>HAVING</code> clause is used to
        filter groups.
      </p>
      <ul>
        <li>
          <strong>Group By</strong>:
          <CodeHighlight
            content={`
SELECT department_id, COUNT(*) as employee_count
FROM employees
GROUP BY department_id;
`}
            sandboxOption={false}
          />
        </li>
        <li>
          <strong>Having</strong>:
          <CodeHighlight
            content={`
SELECT department_id, COUNT(*) as employee_count
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 5;
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <hr />
      <h2>Conclusion</h2>
      <p>
        SQL is a powerful and versatile language for managing data in relational
        databases. By understanding the basic syntax and commands, you can
        perform a wide range of database operations, from creating tables to
        filtering and joining data. Whether you are managing a small website or
        a large-scale application, SQL is an essential tool for data management.
      </p>
      <p>
        With practice, you will become comfortable writing complex queries to
        interact with databases and handle real-world data challenges.
      </p>
    </div>
  );
}
