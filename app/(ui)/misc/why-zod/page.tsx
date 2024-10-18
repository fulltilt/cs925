import CodeHighlight from "@/app/components/CodeHighlight";
import Link from "next/link";

export default function WhyZod() {
  return (
    <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
      <h1>Data Validation in Zod</h1>
      <p>
        <strong>Zod</strong> is a TypeScript-first schema declaration and
        validation library. It&apos;s used for defining and validating objects,
        arrays, and other data types in a concise and readable way. Unlike other
        validation libraries, Zod uses{" "}
        <strong>TypeScript&#39;s type inference</strong> to generate static
        types from schemas, which makes it very popular for projects that use
        TypeScript.
      </p>
      <p>
        Using <strong>Zod</strong> for validation offers several advantages over
        writing custom validation logic yourself. These benefits include{" "}
        <strong>conciseness</strong>, <strong>readability</strong>,{" "}
        <strong>reusability</strong>, and{" "}
        <strong>better integration with TypeScript</strong>. Below, we&#39;ll
        explore some common scenarios where Zod is a better choice and why.
      </p>
      <hr />
      <h2>Conciseness and Readability</h2>
      <p>
        Zod allows you to define complex validation rules in a{" "}
        <strong>declarative</strong> and <strong>concise</strong> way, making
        your code more readable and easier to maintain.
      </p>
      <h3>Example: Validating an Object Manually</h3>
      <p>
        Imagine you want to validate a user object with the following structure:
      </p>
      <ul>
        <li>
          <code>name</code>: string, required
        </li>
        <li>
          <code>age</code>: number, must be at least 18
        </li>
        <li>
          <code>email</code>: string, must be a valid email
        </li>
      </ul>
      <p>
        <strong>Manual Validation</strong>:
      </p>
      <CodeHighlight
        content={`
function validateUser(data) {
    const errors = {};

    if (typeof data.name !== 'string') {
        errors.name = 'Name must be a string';
    }

    if (typeof data.age !== 'number' || data.age < 18) {
        errors.age = 'Age must be a number and at least 18';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof data.email !== 'string' || !emailPattern.test(data.email)) {
        errors.email = 'Email must be a valid email address';
    }

    return Object.keys(errors).length ? { success: false, errors } : { success: true, data };
}

const user = {
    name: 'Alice',
    age: 30,
    email: 'alice@example.com'
};

console.log(validateUser(user));
`}
        sandboxOption={false}
      />
      <p>This approach involves:</p>
      <ul>
        <li>Writing custom logic for each field.</li>
        <li>
          Manually defining{" "}
          <Link href="misc/regex" target="_blank">
            regular expressions
          </Link>{" "}
          for patterns (like email).
        </li>
        <li>A longer, less readable, and more error-prone implementation.</li>
      </ul>
      <p>
        <strong>Using Zod</strong>:
      </p>
      <CodeHighlight
        content={`
import { z } from 'zod';

const userSchema = z.object({
    name: z.string(),
    age: z.number().min(18, 'Age must be at least 18'),
    email: z.string().email('Email must be a valid email address')
});

try {
    const validatedUser = userSchema.parse(user);
    console.log('Valid data:', validatedUser);
} catch (error) {
    console.error('Validation error:', error.errors);
}
`}
        sandboxOption={false}
      />
      <ul>
        <li>
          Zod provides a <strong>one-liner</strong> to define each rule, making
          it <strong>more concise</strong>.
        </li>
        <li>
          You get a <strong>clear schema definition</strong> that’s easy to
          understand at a glance.
        </li>
        <li>
          Zod’s <code>parse</code> method provides{" "}
          <strong>detailed error messages</strong> out of the box.
        </li>
      </ul>
      <h2>Reusability and Consistency</h2>
      <p>
        When writing custom validation logic, it can become repetitive if you
        need to validate the same data shape in different parts of your
        application.
      </p>
      <h3>Example: Reusable Schemas with Zod</h3>
      <p>
        <strong>Using Zod</strong>:
      </p>
      <CodeHighlight
        content={`
const userSchema = z.object({
    name: z.string(),
    age: z.number().min(18),
    email: z.string().email()
});

// Reuse the same schema in different functions
function createUser(data) {
    return userSchema.parse(data);
}

function updateUser(data) {
    return userSchema.partial().parse(data); // Allows partial updates with the same schema
}
`}
        sandboxOption={false}
      />
      <ul>
        <li>
          <strong>Reusability</strong>: You can define a schema once and reuse
          it across multiple functions.
        </li>
        <li>
          <strong>Partial Validation</strong>: Zod&#39;s <code>.partial()</code>{" "}
          method allows creating a version of the schema where all fields are
          optional, useful for updates.
        </li>
      </ul>
      <p>
        <strong>Manual Validation</strong>:
      </p>
      <p>
        With custom logic, you’d need to repeat the validation rules in every
        function or write complex functions to share validation logic,
        increasing the risk of <strong>inconsistent validation</strong>.
      </p>
      <hr />
      <h2>Type Safety with TypeScript</h2>
      <p>
        Zod is <strong>TypeScript-first</strong>, meaning it can generate{" "}
        <strong>static types</strong> based on your schemas. This allows you to
        keep your validation logic and TypeScript types in sync, reducing bugs
        caused by mismatched types.
      </p>
      <h3>Example: Type Inference with Zod</h3>
      <p>
        <strong>Using Zod</strong>:
      </p>
      <CodeHighlight
        content={`
import { z } from 'zod';

const userSchema = z.object({
    name: z.string(),
    age: z.number(),
    email: z.string().email()
});

type User = z.infer<typeof userSchema>;

const createUser = (user: User) => {
    console.log(user.name, user.age, user.email);
};
`}
        sandboxOption={false}
      />
      <ul>
        <li>
          <strong>Type Inference</strong>:{" "}
          <code>z.infer&lt;typeof userSchema&gt;</code> automatically generates
          a <code>User</code> type from the schema.
        </li>
        <li>
          <strong>Type Safety</strong>: The <code>createUser</code> function is
          typed correctly, and TypeScript will show errors if you pass incorrect
          data.
        </li>
      </ul>
      <p>
        <strong>Manual Validation</strong>:
      </p>
      <p>
        When writing custom validation, you have to maintain separate TypeScript
        types and validation logic, which can easily become{" "}
        <strong>out of sync</strong>:
      </p>
      <CodeHighlight
        content={`
type User = {
    name: string;
    age: number;
    email: string;
};

function validateUser(data: any): data is User {
    return (
        typeof data.name === 'string' &&
        typeof data.age === 'number' &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
    );
}
`}
        sandboxOption={false}
      />
      <ul>
        <li>
          <strong>Redundancy</strong>: You have to define the <code>User</code>{" "}
          type and then manually ensure that your validation logic matches it.
        </li>
        <li>
          <strong>Error-Prone</strong>: If you change the <code>User</code>{" "}
          type, you need to remember to update the validation logic as well.
        </li>
      </ul>
      <hr />
      <h2>Better Error Handling</h2>
      <p>
        Zod provides detailed and <strong>structured error messages</strong>{" "}
        automatically, which makes it easier to debug and show specific error
        messages to users.
      </p>
      <h3>Example: Zod Error Messages</h3>
      <p>
        <strong>Using Zod</strong>:
      </p>
      <CodeHighlight
        content={`
try {
    userSchema.parse({ name: 123, age: 17, email: 'invalid-email' });
} catch (error) {
    console.error(error.errors);
    // [
    //   { path: ['name'], message: 'Expected string, received number' },
    //   { path: ['age'], message: 'Age must be at least 18' },
    //   { path: ['email'], message: 'Invalid email' }
    // ]
}
`}
        sandboxOption={false}
      />
      <ul>
        <li>
          <strong>Structured Errors</strong>: Zod errors include details like
          the path to the invalid field and the reason for failure.
        </li>
        <li>
          <strong>Custom Error Messages</strong>: You can easily customize error
          messages with methods like <code>.min()</code> or{" "}
          <code>.email()</code>.
        </li>
      </ul>
      <p>
        <strong>Manual Validation</strong>:
      </p>
      <p>
        With custom validation logic, generating similar detailed error messages
        requires additional code:
      </p>
      <CodeHighlight
        content={`
function validateUser(data) {
    const errors = [];

    if (typeof data.name !== 'string') {
        errors.push({ field: 'name', message: 'Name must be a string' });
    }

    if (typeof data.age !== 'number' || data.age < 18) {
        errors.push({ field: 'age', message: 'Age must be at least 18' });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof data.email !== 'string' || !emailPattern.test(data.email)) {
        errors.push({ field: 'email', message: 'Email must be valid' });
    }

    if (errors.length > 0) {
        throw new Error(JSON.stringify(errors));
    }

    return data;
}
`}
        sandboxOption={false}
      />
      <ul>
        <li>
          <strong>Manual Error Handling</strong>: You need to manually build the
          error structure.
        </li>
        <li>
          <strong>Extra Boilerplate</strong>: The custom validation code becomes
          longer and harder to maintain.
        </li>
      </ul>
      <hr />
      <h2>Extensibility and Built-In Features</h2>
      <p>
        Zod comes with many built-in methods for validation and transformation,
        which saves time and reduces the likelihood of bugs.
      </p>
      <h3>Example: Built-in Methods with Zod</h3>
      <p>
        <strong>Using Zod</strong>:
      </p>
      <CodeHighlight
        content={`
const passwordSchema = z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(20, 'Password cannot exceed 20 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one digit');

passwordSchema.parse('Passw0rd');
`}
        sandboxOption={false}
      />
      <ul>
        <li>
          Zod provides a rich set of methods like <code>.min()</code>,{" "}
          <code>.max()</code>, and <code>.regex()</code>.
        </li>
        <li>
          These methods are chainable and <strong>expressive</strong>, making
          complex validation requirements easy to implement.
        </li>
      </ul>
      <p>
        <strong>Manual Validation</strong>:
      </p>
      <p>
        Implementing the same password validation manually involves more code
        and can be prone to mistakes:
      </p>
      <CodeHighlight
        content={`
function validatePassword(password) {
    const errors = [];

    if (password.length < 8) {
        errors.push('Password must be at least 8 characters long');
    }
    if (password.length > 20) {
        errors.push('Password cannot exceed 20 characters');
    }
    if (!/[A-Z]/.test(password)) {
        errors.push('Password must contain at least one uppercase letter');
    }
    if (!/[0-9]/.test(password)) {
        errors.push('Password must contain at least one digit');
    }

    if (errors.length > 0) {
        throw new Error(errors.join(', '));
    }

    return password;
}
`}
        sandboxOption={false}
      />
      <ul>
        <li>You have to define each rule manually.</li>
        <li>Error messages need to be explicitly managed.</li>
      </ul>
      <hr />
      <h2>Conclusion</h2>
      <p>
        Zod is often <strong>preferable</strong> for validation because it:
      </p>
      <ul>
        <li>
          Reduces <strong>boilerplate</strong> and makes validation rules{" "}
          <strong>more readable</strong>.
        </li>
        <li>
          Ensures <strong>type safety</strong> when using TypeScript.
        </li>
        <li>
          Provides <strong>detailed error messages</strong> without extra
          effort.
        </li>
        <li>
          Offers <strong>reusability</strong> and <strong>extensibility</strong>{" "}
          with built-in validation methods.
        </li>
      </ul>
      <p>
        These features make Zod a great choice for developers who want to ensure
        the data they are ingesting is valid which is a very common source of
        bugs.
      </p>
    </div>
  );
}
