import CodeHighlight from "@/app/components/CodeHighlight";

export default function ZodHookForm() {
  return (
    <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
      <h1>Form Validation with Zod and React Hook Form</h1>
      <p>
        <strong>React Hook Form</strong> (RHF) and <strong>Zod</strong> are
        powerful libraries that, when used together, can make form validation in
        React applications simple and effective.{" "}
      </p>
      <ul>
        <li>
          <strong>React Hook Form</strong>: A library that simplifies form
          handling in React, making it easy to integrate with React&#39;s hooks.
          It minimizes re-renders, making forms more performant.
        </li>
        <li>
          <strong>Zod</strong>: A TypeScript-first schema validation library
          that is used to create, parse, and validate schemas.
        </li>
      </ul>
      <p>
        In this tutorial, we&#39;ll learn how to use{" "}
        <strong>React Hook Form</strong> with <strong>Zod</strong> to build and
        validate forms efficiently.
      </p>
      <hr />
      <h2>Adding Zod and React Hook Form</h2>
      <p>
        Before we start, make sure you have a React project set up and install
        the required dependencies:
      </p>
      <CodeHighlight
        content={`
npm install react-hook-form zod @hookform/resolvers
`}
        sandboxOption={false}
      />
      <ul>
        <li>
          <code>react-hook-form</code>: For form handling.
        </li>
        <li>
          <code>zod</code>: For creating schemas and validation.
        </li>
        <li>
          <code>@hookform/resolvers</code>: Provides a way to use Zod with React
          Hook Form.
        </li>
      </ul>
      <hr />
      <h2>Creating a Form with React Hook Form</h2>
      <p>
        Start by creating a simple form using <strong>React Hook Form</strong>.
        We&#39;ll start with a form that has <code>name</code>,{" "}
        <code>email</code>, and <code>password</code> fields.
      </p>
      <CodeHighlight
        content={`
import React from 'react';
import { useForm } from 'react-hook-form';

function SignupForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name:</label>
                <input {...register('name')} />
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input type="email" {...register('email')} />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label>Password:</label>
                <input type="password" {...register('password')} />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignupForm;
`}
        sandboxOption={false}
      />
      <p>
        <strong>Explanation</strong>:
      </p>
      <ul>
        <li>
          <code>useForm()</code> initializes the form with <code>register</code>
          , <code>handleSubmit</code>, and <code>formState</code>.
        </li>
        <li>
          <code>register</code> is used to bind input fields to the form.
        </li>
        <li>
          <code>handleSubmit</code> handles the form submission.
        </li>
        <li>
          <code>errors</code> is used to access validation errors.
        </li>
      </ul>
      <hr />
      <h2>Integrating Zod for Validation</h2>
      <p>
        Now let&#39;s integrate <strong>Zod</strong> to define validation rules
        for our form fields. We’ll use the <code>zodResolver</code> function
        from <code>@hookform/resolvers</code> to connect Zod with React Hook
        Form.
      </p>
      <CodeHighlight
        content={`
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters long'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
});

function SignupForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name:</label>
                <input {...register('name')} />
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input type="email" {...register('email')} />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label>Password:</label>
                <input type="password" {...register('password')} />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignupForm;
`}
        sandboxOption={false}
      />
      <p>
        <strong>Explanation</strong>:
      </p>
      <ul>
        <li>
          <strong>Zod Schema</strong>: We define a schema using{" "}
          <code>z.object()</code> with <code>name</code>, <code>email</code>,
          and <code>password</code> validation rules.
        </li>
        <li>
          <strong>zodResolver</strong>: This function connects Zod with React
          Hook Form, allowing validation errors from Zod to be used by React
          Hook Form.
        </li>
        <li>
          The form now uses the schema to validate each input, and error
          messages are displayed when validation fails.
        </li>
      </ul>
      <hr />
      <h2>Handling Validation Errors</h2>
      <p>
        With the setup above, the <code>errors</code> object provided by React
        Hook Form will contain validation errors based on the Zod schema.
      </p>
      <p>For example:</p>
      <ul>
        <li>
          If a user submits an empty <code>name</code> field,{" "}
          <code>errors.name.message</code> will contain &quot;Name must be at
          least 2 characters long.&quot;
        </li>
        <li>
          If the <code>email</code> is not in a valid format,{" "}
          <code>errors.email.message</code> will contain &quot;Invalid email
          address.&quot;
        </li>
        <li>
          If the <code>password</code> is less than 6 characters,{" "}
          <code>errors.password.message</code> will contain &quot;Password must
          be at least 6 characters long.&quot;
        </li>
      </ul>
      <p>
        You can customize the error messages directly in the Zod schema, which
        makes it easy to maintain.
      </p>
      <hr />
      <h2>Full Code Example</h2>
      <p>
        Here is the complete code for the signup form with validation using{" "}
        <strong>Zod</strong> and <strong>React Hook Form</strong>:
      </p>
      <CodeHighlight
        content={`
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters long'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
});

function SignupForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name:</label>
                <input {...register('name')} />
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input type="email" {...register('email')} />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label>Password:</label>
                <input type="password" {...register('password')} />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignupForm;
`}
        sandboxOption={false}
        externalSandboxUrl="https://codesandbox.io/p/sandbox/quirky-bird-q547n5"
      />
      <p>
        This complete example provides a functional signup form with form
        validation:
      </p>
      <ul>
        <li>
          Validates <code>name</code>, <code>email</code>, and{" "}
          <code>password</code> fields.
        </li>
        <li>Displays appropriate error messages.</li>
        <li>Logs the form data to the console if validation passes.</li>
      </ul>
      <hr />
      <h2>Conclusion</h2>
      <p>
        Using <strong>Zod</strong> with <strong>React Hook Form</strong> allows
        you to define validation rules in a clean, TypeScript-friendly way, and
        integrate those rules seamlessly into your forms. With this approach,
        you get:
      </p>
      <ul>
        <li>
          Clear and readable validation rules using Zod&#39;s schema syntax.
        </li>
        <li>Minimal boilerplate with React Hook Form&#39;s hook-based API.</li>
        <li>
          Centralized error handling that leverages Zod&#39;s validation
          capabilities.
        </li>
      </ul>
      <p>
        This setup is particularly useful for larger forms or applications where
        form validation rules need to be defined, reused, and maintained in a
        type-safe manner. By combining the strengths of both libraries, you can
        build powerful and user-friendly forms in React.
      </p>
    </div>
  );
}
