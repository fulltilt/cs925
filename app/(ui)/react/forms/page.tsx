import CodeHighlight from "@/app/components/CodeHighlight";

export default function Forms() {
  return (
    <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
      <h2>Tutorial: Handling Form Data in React</h2>
      <p>
        React provides multiple ways to handle form data, with the two main
        approaches being <strong>controlled</strong> and{" "}
        <strong>uncontrolled components</strong>. Understanding these two
        methods helps you decide how to manage user input based on your app’s
        requirements. Additionally, we&#39;ll cover using the{" "}
        <strong>FormData</strong> object for managing form submissions in a more
        dynamic way.
      </p>
      <hr />
      <h2>1. Controlled vs. Uncontrolled Components</h2>
      <p>
        <strong>Controlled Components</strong> and{" "}
        <strong>Uncontrolled Components</strong> refer to how form inputs are
        managed in React:
      </p>
      <ul>
        <li>
          <strong>Controlled Components</strong>: React state is the
          &quot;single source of truth&quot; for the form&#39;s data. Input
          values are set via React state, and changes to the input update the
          state.
        </li>
        <li>
          <strong>Uncontrolled Components</strong>: The form data is handled by
          the DOM itself. React uses <strong>refs</strong> to access the input
          values when needed.
        </li>
      </ul>
      <hr />
      <h2>2. Controlled Components</h2>
      <p>
        In controlled components, every form field has its own state, and we
        update the state on every input change. This makes it easy to access
        form values and allows for advanced features like validation as the user
        types.
      </p>
      <h3>Example: A Controlled Form</h3>
      <CodeHighlight
        content={`
import React, { useState } from 'react';

function ControlledForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ControlledForm;
`}
        sandboxOption={false}
      />
      <p>
        <strong>Explanation</strong>:
      </p>
      <ul>
        <li>
          We use <code>useState</code> to create state variables (
          <code>name</code> and <code>email</code>).
        </li>
        <li>
          The <code>value</code> of each input is set to the respective state
          variable, making React the source of truth for the input value.
        </li>
        <li>
          The <code>onChange</code> event handler updates the state whenever the
          user types, ensuring the input&#39;s value reflects the state.
        </li>
        <li>
          This approach makes it easy to <strong>validate</strong> and{" "}
          <strong>manipulate</strong> input data before form submission.
        </li>
      </ul>
      <p>
        <strong>Pros of Controlled Components</strong>:
      </p>
      <ul>
        <li>Clear flow of data from state to input and vice-versa.</li>
        <li>Enables real-time validation.</li>
        <li>Easier to manipulate or transform input data.</li>
      </ul>
      <p>
        <strong>Cons of Controlled Components</strong>:
      </p>
      <ul>
        <li>Can become verbose with many form fields.</li>
        <li>
          React re-renders on every change, which can be a concern in large
          forms.
        </li>
      </ul>
      <hr />
      <h2>3. Uncontrolled Components</h2>
      <p>
        With uncontrolled components, the form data is stored in the DOM itself
        rather than in the component&#39;s state. We use <strong>refs</strong>{" "}
        to access the form values when needed.
      </p>
      <h3>Example: An Uncontrolled Form</h3>
      <CodeHighlight
        content={`
import React, { useRef } from 'react';

function UncontrolledForm() {
    const nameRef = useRef();
    const emailRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', nameRef.current.value);
        console.log('Email:', emailRef.current.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input type="text" ref={nameRef} />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" ref={emailRef} />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default UncontrolledForm;
`}
        sandboxOption={false}
      />
      <p>
        <strong>Explanation</strong>:
      </p>
      <ul>
        <li>
          We use the <code>useRef</code> hook to create refs (
          <code>nameRef</code> and <code>emailRef</code>).
        </li>
        <li>
          Each input is linked to its corresponding ref, allowing us to access
          the input values directly through <code>ref.current.value</code> when
          the form is submitted.
        </li>
        <li>
          The state is not updated on every change, which can be more performant
          for simple forms.
        </li>
      </ul>
      <p>
        <strong>Pros of Uncontrolled Components</strong>:
      </p>
      <ul>
        <li>Simpler code for basic forms.</li>
        <li>
          Better for forms where values don’t change often or where inputs are
          not controlled by React.
        </li>
        <li>
          Can be more performant in specific scenarios since React doesn’t
          re-render on every keystroke.
        </li>
      </ul>
      <p>
        <strong>Cons of Uncontrolled Components</strong>:
      </p>
      <ul>
        <li>Harder to handle validations.</li>
        <li>Not as intuitive when dealing with complex form interactions.</li>
        <li>Less control over the input&#39;s state and values.</li>
      </ul>
      <hr />
      <h2>4. Using the FormData Object</h2>
      <p>
        The <strong>FormData</strong> object provides a way to easily access
        form data in JavaScript. It’s often used when working with{" "}
        <strong>uncontrolled forms</strong> or when you want to send form data
        using <code>fetch</code>.
      </p>
      <h3>Example: Using the FormData Object</h3>
      <CodeHighlight
        content={`
import React, { useRef } from 'react';

function FormDataExample() {
    const formRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);

        // Iterate through formData entries
        for (let [key, value] of formData.entries()) {
            console.log(\`$\{key}: $\{value}\`);
        }
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormDataExample;
`}
        sandboxOption={false}
      />
      <p>
        <strong>Explanation</strong>:
      </p>
      <ul>
        <li>
          The <code>FormData</code> object allows us to retrieve form values by
          iterating over the entries using <code>formData.entries()</code>.
        </li>
        <li>
          This approach is useful when you want to{" "}
          <strong>dynamically collect</strong> form data without having to
          manually access each input.
        </li>
        <li>
          It is particularly useful for handling file uploads since{" "}
          <code>FormData</code> automatically handles <code>file</code> input
          types.
        </li>
      </ul>
      <p>
        <strong>Pros</strong>:
      </p>
      <ul>
        <li>
          Easily handles forms with a lot of inputs without needing to update
          the state.
        </li>
        <li>
          Good for working with APIs that expect form-encoded data or file
          uploads.
        </li>
        <li>Less boilerplate for accessing all form data.</li>
      </ul>
      <p>
        <strong>Cons</strong>:
      </p>
      <ul>
        <li>
          Does not offer the same level of validation control as controlled
          components.
        </li>
        <li>Better suited for simpler use cases.</li>
      </ul>
      <hr />
      <h2>5. Choosing the Right Approach</h2>
      <ul>
        <li>
          Use <strong>controlled components</strong> if you:
          <ul>
            <li>Need to validate user input in real-time.</li>
            <li>Have complex interactions between form fields.</li>
            <li>Want to manipulate form data before submission.</li>
          </ul>
        </li>
        <li>
          Use <strong>uncontrolled components</strong> if you:
          <ul>
            <li>Have simple forms without complex validation needs.</li>
            <li>Want to minimize re-renders.</li>
            <li>
              Prefer working with <code>refs</code> for simpler form data
              handling.
            </li>
          </ul>
        </li>
        <li>
          Use <strong>FormData</strong> if you:
          <ul>
            <li>Need to handle dynamic forms with many fields.</li>
            <li>Are working with file uploads.</li>
            <li>Want a simpler way to prepare form data for API calls.</li>
          </ul>
        </li>
      </ul>
      <hr />
      <h2>6. Conclusion</h2>
      <p>
        Handling form data in React requires understanding the different methods
        available, such as <strong>controlled components</strong>,{" "}
        <strong>uncontrolled components</strong>, and the{" "}
        <strong>FormData</strong> object. Controlled components give you more
        power over the input data and make validation simpler, while
        uncontrolled components can be more concise for simple forms. The
        FormData object can be particularly useful for handling form submissions
        dynamically.
      </p>
      <p>
        By choosing the right approach, you can ensure your forms are efficient,
        maintainable, and user-friendly.
      </p>
    </div>
  );
}
