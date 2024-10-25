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

export default function TypeScript() {
  return (
    <ModuleWrapper>
      <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
        <h2>Introduction to TypeScript</h2>
        <p>
          <strong>TypeScript</strong> is a{" "}
          <strong>superset of JavaScript</strong> that adds{" "}
          <strong>static typing</strong> to the language. Developed by
          Microsoft, TypeScript aims to enhance JavaScript by enabling
          developers to catch potential errors during development, making
          large-scale applications easier to maintain. It compiles down to plain
          JavaScript, which means it can run anywhere JavaScript runs.
        </p>
        <p>
          When you are first starting off with TypeScript, it will be rough in
          the beginning (it still can get tricky even for experienced coders)
          but in the long run it will make your life easier although the
          benefits are obviously apparent.
        </p>
        <hr />
        <h2>What is TypeScript?</h2>
        <p>
          <strong>TypeScript</strong> extends JavaScript by adding types. A
          &quot;type&quot; is a way of describing the kinds of values that
          variables can hold. This enables you to define the structure of data
          and make sure that your code adheres to that structure. It provides
          tools like:
        </p>
        <ul>
          <li>
            <strong>Type Annotations</strong>: Define the expected types for
            variables, function parameters, and return values.
          </li>
          <li>
            <strong>Interfaces</strong> and <strong>Classes</strong>: Define
            object shapes and leverage object-oriented programming.
          </li>
          <li>
            <strong>Generics</strong>: Build reusable and flexible components or
            functions.
          </li>
          <li>
            <strong>Compile-Time Error Checking</strong>: Catch errors before
            they even run, making development more predictable.
          </li>
        </ul>
        <hr />
        <h2>Why Use TypeScript?</h2>
        <p>
          There are several advantages to using TypeScript in your development
          process, especially for larger codebases:
        </p>
        <h3>
          a. <strong>Static Typing</strong>
        </h3>
        <ul>
          <li>
            TypeScript&apos;s type system allows you to catch errors during the
            development phase. For example, it can prevent you from accidentally
            passing a number where a string is expected.
          </li>
          <li>
            <strong>Example</strong>:
            <CodeHighlight
              content={`
function add(a: number, b: number): number {
    return a + b;
}

add(5, '10'); // TypeScript will throw an error here because '10' is not a number.
`}
              sandboxOption={false}
            />
          </li>
          <li>
            Static typing helps prevent runtime errors by providing immediate
            feedback in your editor.
          </li>
        </ul>
        <h3>
          b. <strong>Improved Code Readability and Maintainability</strong>
        </h3>
        <ul>
          <li>
            TypeScript makes code easier to understand by explicitly stating
            what types functions expect and what they return.
          </li>
          <li>
            This makes it simpler for new developers to get up to speed with a
            codebase.
          </li>
        </ul>
        <h3>
          c. <strong>Better Tooling and Autocompletion</strong>
        </h3>
        <ul>
          <li>
            TypeScript integrates deeply with IDEs like{" "}
            <strong>Visual Studio Code</strong>, providing{" "}
            <strong>better autocompletion</strong>,{" "}
            <strong>refactoring tools</strong>, and{" "}
            <strong>intelligent code navigation</strong>.
          </li>
          <li>
            The tooling is one of the biggest advantages, as TypeScript helps
            you write better code faster.
          </li>
        </ul>
        <h3>
          d. <strong>Supports Modern JavaScript Features</strong>
        </h3>
        <ul>
          <li>
            TypeScript supports modern JavaScript features like{" "}
            <strong>async/await</strong>, <strong>destructuring</strong>, and{" "}
            <strong>modules</strong>, while also adding its own enhancements.
          </li>
          <li>
            It allows you to use future JavaScript features even if your target
            environment doesn&#39;t support them yet.
          </li>
        </ul>
        <h3>
          e. <strong>Type Inference</strong>
        </h3>
        <ul>
          <li>
            While TypeScript allows you to explicitly define types, it can also{" "}
            <strong>infer</strong> types, which means you can enjoy the benefits
            of types without having to write them everywhere.
          </li>
          <li>
            <strong>Example</strong>:
            <CodeHighlight
              content={`
let count = 5; // TypeScript automatically infers that \`count\` is of type \`number\`.
`}
              sandboxOption={false}
            />
          </li>
        </ul>
        <hr />
        <h2>Setting Up TypeScript</h2>
        <p>
          <em>
            (NOTE: development frameworks such as Vite and NextJS can set this
            up for you automatically so you usually never have to worry about
            manually installing TypeScript)
          </em>
        </p>
        <p>
          To get started with TypeScript, you&apos;ll need Node.js installed.
          Then, install TypeScript using npm:
        </p>
        <CodeHighlight
          content={`
npm install -g typescript
`}
          sandboxOption={false}
        />
        <p>
          To compile TypeScript files into JavaScript, use the <code>tsc</code>{" "}
          (TypeScript Compiler) command:
        </p>
        <CodeHighlight
          content={`
tsc file.ts
`}
          sandboxOption={false}
        />
        <p>
          This will generate a <code>file.js</code> with the compiled JavaScript
          code.
        </p>
        <p>
          For a more streamlined setup, you can create a{" "}
          <strong>tsconfig.json</strong> file to configure how TypeScript
          compiles your code:
        </p>
        <CodeHighlight
          content={`
tsc --init
`}
          sandboxOption={false}
        />
        <p>
          This will create a <code>tsconfig.json</code> file in your project,
          where you can customize options like the target JavaScript version,
          file paths, and more.
        </p>
        <hr />
        <h2>Basic TypeScript Features</h2>
        <p>
          TypeScript builds upon JavaScript&#39;s syntax, making it easy to
          start writing TypeScript if you&#39;re familiar with JavaScript.
          Here&apos;s a look at some of its key features:
        </p>
        <h3>a. Types and Type Annotations</h3>
        <p>
          TypeScript allows you to define types for variables, function
          parameters, and return values:
        </p>
        <CodeHighlight
          content={`
let name: string = 'Alice';
let age: number = 30;
let isStudent: boolean = true;

function greet(name: string): string {
    return \`Hello, $\{name}\`;
}
`}
          sandboxOption={false}
        />
        <h3>b. Interfaces</h3>
        <p>
          Interfaces allow you to define the structure of an object. This makes
          it easy to ensure that an object has the correct shape:
        </p>
        <CodeHighlight
          content={`
interface User {
    name: string;
    age: number;
    isAdmin: boolean;
}

const user: User = {
    name: 'Alice',
    age: 30,
    isAdmin: true
};
`}
          sandboxOption={false}
        />
        <h3>c. Classes</h3>
        <p>
          TypeScript adds support for classes, making it suitable for
          object-oriented programming:
        </p>
        <CodeHighlight
          content={`
class Animal {
    constructor(public name: string, private age: number) {}

    speak() {
        console.log(\`$\{this.name} makes a sound.\`);
    }
}

const dog = new Animal('Dog', 3);
dog.speak(); // Dog makes a sound.
`}
          sandboxOption={false}
        />
        <h3>d. Enums</h3>
        <p>Enums allow you to define a set of named constants:</p>
        <CodeHighlight
          content={`
enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;
`}
          sandboxOption={false}
        />
        <h3>e. Generics</h3>
        <p>
          Generics enable you to create reusable components that work with a
          variety of types:
        </p>
        <CodeHighlight
          content={`
function identity<T>(value: T): T {
    return value;
}

console.log(identity<number>(42)); // 42
console.log(identity<string>('Hello')); // Hello
`}
          sandboxOption={false}
        />
        <hr />
        <h2>TypeScript in Practice: A Simple Example</h2>
        <p>
          Let&apos;s create a simple <strong>To-Do List</strong> app using
          TypeScript:
        </p>
        <CodeHighlight
          content={`
interface Todo {
    title: string;
    completed: boolean;
}

const todos: Todo[] = [];

function addTodo(title: string): void {
    const newTodo: Todo = { title, completed: false };
    todos.push(newTodo);
}

function markAsCompleted(index: number): void {
    todos[index].completed = true;
}

addTodo('Learn TypeScript');
addTodo('Build a project');
markAsCompleted(0);

console.log(todos);
`}
          sandboxOption={false}
        />
        <ul>
          <li>
            Here, we define the structure of a <code>Todo</code> object using an
            interface.
          </li>
          <li>
            Functions like <code>addTodo</code> and <code>markAsCompleted</code>{" "}
            are typed, ensuring the data they manipulate adheres to our defined
            structure.
          </li>
          <li>The result is a more predictable and maintainable codebase.</li>
        </ul>
        <hr />
        <h2>6. TypeScript with Existing JavaScript Code</h2>
        <p>
          TypeScript is designed to be <strong>adopted gradually</strong>. You
          can start by renaming <code>.js</code> files to <code>.ts</code> and
          incrementally adding type annotations.
        </p>
        <p>To ease the transition:</p>
        <ul>
          <li>
            Use{" "}
            <strong>
              <code>any</code> type
            </strong>{" "}
            when you&#39;re unsure of a type (but minimize its use for stricter
            type safety).
          </li>
          <li>
            You can use <code>@ts-ignore</code> to temporarily ignore TypeScript
            errors in certain lines.
          </li>
        </ul>
        <hr />
        <h2>7. TypeScript vs. JavaScript: A Comparison</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Feature</TableHead>
              <TableHead>JavaScript</TableHead>
              <TableHead>TypeScript</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <strong>Typing</strong>
              </TableCell>
              <TableCell>
                Dynamic typing (types are checked at runtime)
              </TableCell>
              <TableCell>
                Static typing (types are checked at compile-time)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Error Checking</strong>
              </TableCell>
              <TableCell>Errors are detected at runtime</TableCell>
              <TableCell>Errors are detected during development</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Tooling</strong>
              </TableCell>
              <TableCell>Autocompletion and IntelliSense are basic</TableCell>
              <TableCell>Enhanced autocompletion and IntelliSense</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Scalability</strong>
              </TableCell>
              <TableCell>Harder to manage large codebases</TableCell>
              <TableCell>
                Easier to maintain larger codebases due to type safety
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Learning Curve</strong>
              </TableCell>
              <TableCell>Easier for beginners</TableCell>
              <TableCell>Steeper learning curve but more benefits</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <hr />
        <h2>8. Conclusion</h2>
        <p>
          TypeScript offers significant advantages for building{" "}
          <strong>scalable</strong>, <strong>maintainable</strong>, and{" "}
          <strong>error-free</strong> JavaScript applications. It is
          particularly valuable in large codebases or teams where catching
          errors early, consistent data structures, and better developer tooling
          can save time and reduce bugs.{" "}
        </p>
        <p>Key reasons to consider using TypeScript:</p>
        <ul>
          <li>
            It catches errors early through{" "}
            <strong>static type checking</strong>.
          </li>
          <li>
            It provides better tooling, making development more efficient.
          </li>
          <li>
            It ensures <strong>type safety</strong> and enhances{" "}
            <strong>code readability</strong>.
          </li>
          <li>
            It allows you to <strong>gradually adopt</strong> its features
            without needing to rewrite your entire JavaScript codebase.
          </li>
        </ul>
        <p>
          By adopting TypeScript, you&apos;ll not only improve the reliability
          of your code but also enhance your development experience, leading to
          a more robust and scalable project.
        </p>
      </div>
    </ModuleWrapper>
  );
}
