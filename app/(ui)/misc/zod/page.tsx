import CodeHighlight from "@/app/components/CodeHighlight";
import Link from "next/link";

export default function Zod() {
  return (
    <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
      <h2>Tutorial: Zod Schema Validation in JavaScript and TypeScript</h2>
      <p>
        In a <Link href="/misc/why-zod">prior module</Link>, we went over what
        Zod is and why you should use it. In this module we will go over the
        basics on how to use it.
      </p>

      <hr />
      <h2>Installation</h2>
      <p>To get started with Zod, install it using npm or yarn:</p>
      <CodeHighlight
        content={`
npm install zod
`}
        sandboxOption={false}
      />

      <hr />
      <h2>Basic Zod Schemas</h2>
      <p>
        Zod provides functions to create schemas for different data types like
        strings, numbers, booleans, etc. You can define a schema and then{" "}
        <strong>parse</strong> or <strong>validate</strong> data against that
        schema.
      </p>
      <p>
        <em>
          (NOTE: A big reason why Zod is highly recommended is in their{" "}
          <Link href="https://mtsknn.fi/blog/parse-dont-just-validate/">
            "parse, don't just validate"
          </Link>{" "}
          credo. Basically what that means is, validation is important but with
          parsing, you not only get validation but you also can transform the
          data into a more appropriate shape for your uses.)
        </em>
      </p>
      <h3>Example: Basic Schemas</h3>
      <CodeHighlight
        content={`
import { z } from 'zod';

// String schema
const stringSchema = z.string();

// Number schema
const numberSchema = z.number();

// Boolean schema
const booleanSchema = z.boolean();
`}
        sandboxOption={false}
      />
      <p>You can use these schemas to validate values:</p>
      <CodeHighlight
        content={`
stringSchema.parse('hello'); // 'hello'
numberSchema.parse(42);      // 42
booleanSchema.parse(true);   // true

// Throws an error if the validation fails
stringSchema.parse(123);     // Throws ZodError: Expected string, received number
`}
        sandboxOption={false}
      />
      <hr />
      <h2>Validating Objects</h2>
      <p>
        Zod makes it easy to define schemas for <strong>objects</strong> with
        specific fields. You can define an object schema using{" "}
        <code>z.object()</code>.
      </p>
      <h3>Example: Validating an Object Schema</h3>
      <CodeHighlight
        content={`
import { z } from 'zod';

// Define an object schema
const userSchema = z.object({
    name: z.string(),
    age: z.number(),
    email: z.string().email(), // Validate as a valid email address
});

const userData = {
    name: 'Alice',
    age: 30,
    email: 'alice@example.com'
};

userSchema.parse(userData); // No error, data is valid

// Throws an error if the validation fails
userSchema.parse({
    name: 'Bob',
    age: 'not a number',
    email: 'invalid email'
}); // Throws ZodError
`}
        sandboxOption={false}
      />
      <hr />
      <h2>Parsing and Safe Parsing</h2>
      <ul>
        <li>
          <code>parse()</code>: Throws an error if the data is invalid.
        </li>
        <li>
          <code>safeParse()</code>: Returns an object with <code>success</code>{" "}
          and <code>error</code> fields, allowing you to handle validation
          results more gracefully.
        </li>
      </ul>
      <h3>
        Example: Using <code>safeParse()</code>
      </h3>
      <CodeHighlight
        content={`
const result = userSchema.safeParse({
    name: 'Charlie',
    age: 25,
    email: 'charlie@example.com'
});

if (result.success) {
    console.log('Valid data:', result.data);
} else {
    console.error('Validation error:', result.error);
}
`}
        sandboxOption={false}
      />
      <p>
        <strong>Output</strong>:
      </p>
      <ul>
        <li>
          If the data is valid, <code>result.data</code> will contain the
          validated data.
        </li>
        <li>
          If the data is invalid, <code>result.error</code> will contain details
          about why the validation failed.
        </li>
      </ul>
      <hr />
      <h2>Validating Arrays</h2>
      <p>
        Zod allows you to define schemas for <strong>arrays</strong> of values
        using <code>z.array()</code>.
      </p>
      <h3>Example: Validating an Array of Strings</h3>
      <CodeHighlight
        content={`
const stringArraySchema = z.array(z.string());

stringArraySchema.parse(['apple', 'banana', 'cherry']); // Valid

// Throws an error if the array contains a non-string value
stringArraySchema.parse(['apple', 42, 'cherry']); // Throws ZodError
`}
        sandboxOption={false}
      />
      <h3>Example: Array of Objects</h3>
      <CodeHighlight
        content={`
const userArraySchema = z.array(userSchema);

userArraySchema.parse([
    { name: 'Alice', age: 30, email: 'alice@example.com' },
    { name: 'Bob', age: 25, email: 'bob@example.com' }
]); // Valid

userArraySchema.parse([
    { name: 'Charlie', age: 'not a number', email: 'charlie@example.com' }
]); // Throws ZodError
`}
        sandboxOption={false}
      />
      <hr />
      <h2>Optional and Nullable Types</h2>
      <p>
        Zod allows you to define fields as <strong>optional</strong> or{" "}
        <strong>nullable</strong> using <code>.optional()</code> and{" "}
        <code>.nullable()</code>.
      </p>
      <h3>Example: Optional and Nullable Fields</h3>
      <CodeHighlight
        content={`
const productSchema = z.object({
    name: z.string(),
    price: z.number(),
    description: z.string().optional(), // Optional field
    stock: z.number().nullable() // Nullable field
});

productSchema.parse({
    name: 'Laptop',
    price: 1000,
    description: 'A high-end laptop',
    stock: null
}); // Valid

productSchema.parse({
    name: 'Laptop',
    price: 1000
}); // Valid even without the description and stock
`}
        sandboxOption={false}
      />
      <hr />
      <h2>Transforming Data</h2>
      <p>
        Zod allows you to <strong>transform</strong> data after validation using{" "}
        <code>.transform()</code>.
      </p>
      <h3>Example: Transforming Data</h3>
      <CodeHighlight
        content={`
const trimmedStringSchema = z.string().transform((val) => val.trim());

const result = trimmedStringSchema.parse('   hello world   ');
console.log(result); // 'hello world'
`}
        sandboxOption={false}
      />
      <p>
        This can be useful for normalizing data, like trimming strings or
        converting values before using them in your application.
      </p>
      <hr />
      <h2>Custom Error Messages</h2>
      <p>
        Zod allows you to specify <strong>custom error messages</strong> for
        more user-friendly validation errors.
      </p>
      <h3>Example: Custom Error Messages</h3>
      <CodeHighlight
        content={`
const passwordSchema = z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .max(20, 'Password cannot exceed 20 characters');

passwordSchema.parse('short'); // Throws ZodError: Password must be at least 6 characters long
`}
        sandboxOption={false}
      />
      <p>
        You can customize error messages for individual validations to make the
        feedback more meaningful.
      </p>
      <hr />
      <h2>Zod with TypeScript</h2>
      <p>
        One of Zod&apos;s biggest advantages is its tight integration with
        TypeScript. It can <strong>infer types</strong> from your schemas,
        making it easy to type your data throughout your application.
      </p>
      <h3>Example: Using Zod with TypeScript</h3>
      <CodeHighlight
        content={`
import { z } from 'zod';

const personSchema = z.object({
    name: z.string(),
    age: z.number()
});

// Infer the TypeScript type from the Zod schema
type Person = z.infer<typeof personSchema>;

const person: Person = {
    name: 'Alice',
    age: 30
};

personSchema.parse(person); // Valid
`}
        sandboxOption={false}
      />
      <p>In this example:</p>
      <ul>
        <li>
          <code>z.infer&lt;typeof personSchema&gt;</code> automatically infers
          the type <code>Person</code> based on the structure defined in{" "}
          <code>personSchema</code>.
        </li>
        <li>
          This type can be used for typing variables, function parameters, or
          state in React.
        </li>
      </ul>
      <hr />
      <h2>Conclusion</h2>
      <p>
        Zod provides a powerful yet simple way to <strong>validate</strong> and{" "}
        <strong>transform</strong> data in both JavaScript and TypeScript
        projects. It enables you to define schemas that ensure your data
        conforms to the expected shape and provides detailed error messages when
        validation fails.
      </p>
      <p>Key takeaways:</p>
      <ul>
        <li>
          Use <code>z.object()</code> for defining schemas for objects.
        </li>
        <li>
          Use <code>.parse()</code> for strict validation and{" "}
          <code>safeParse()</code> for handling validation results gracefully.
        </li>
        <li>
          Define optional fields with <code>.optional()</code> and nullable
          fields with <code>.nullable()</code>.
        </li>
        <li>
          Leverage TypeScript&apos;s type inference with <code>z.infer</code>{" "}
          for type safety.
        </li>
      </ul>
      <p>
        By using Zod, you can maintain cleaner, more reliable code, especially
        when working with APIs or complex data structures. Happy coding! 🎉
      </p>
    </div>
  );
}
