import CodeHighlight from "@/app/components/CodeHighlight";
import ModuleWrapper from "@/app/components/ModuleWrapper";
import Link from "next/link";

export default function ArrayF() {
  return (
    <ModuleWrapper>
      <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
        <h1>
          JavaScript Array Methods - <code>map()</code>, <code>filter()</code>,
          and <code>reduce()</code>
        </h1>
        <p>
          JavaScript provides several powerful methods to work with arrays,
          making it easier to process, transform, and reduce data. Among these
          methods,{" "}
          <strong>
            <code>map()</code>
          </strong>
          ,{" "}
          <strong>
            <code>filter()</code>
          </strong>
          , and{" "}
          <strong>
            <code>reduce()</code>
          </strong>{" "}
          are some of the most frequently used. In this tutorial, we will
          explore each of these methods, how they work, and provide practical
          examples to help you understand how to use them effectively.
        </p>
        <hr />

        <h2>1. Introduction to JavaScript Array Methods</h2>
        <p>
          JavaScript&#39;s{" "}
          <strong>
            <code>map()</code>
          </strong>
          ,{" "}
          <strong>
            <code>filter()</code>
          </strong>
          , and{" "}
          <strong>
            <code>reduce()</code>
          </strong>{" "}
          methods are part of the <strong>Array</strong> prototype, allowing you
          to perform complex transformations on arrays with concise and
          expressive syntax. Here’s a quick overview:
        </p>
        <ul>
          <li>
            <strong>
              <code>map()</code>
            </strong>
            : Transforms each element in an array and returns a new array with
            the same length.
          </li>
          <li>
            <strong>
              <code>filter()</code>
            </strong>
            : Filters elements based on a condition and returns a new array with
            only the elements that pass the condition.
          </li>
          <li>
            <strong>
              <code>reduce()</code>
            </strong>
            : Reduces an array to a single value by iteratively combining
            elements using a callback function.
          </li>
        </ul>
        <p>
          These methods are <strong>immutable</strong>—they do not change the
          original array but instead return a new array or value.
        </p>
        <hr />
        <h2>
          2. Using <code>map()</code>
        </h2>
        <h3>
          What is <code>map()</code>?
        </h3>
        <p>
          The{" "}
          <strong>
            <code>map()</code>
          </strong>{" "}
          method creates a new array by applying a callback function to each
          element of the original array. It is ideal for scenarios where you
          want to <strong>transform</strong> data.
        </p>
        <h3>Syntax:</h3>
        <CodeHighlight
          content={`
const newArray = array.map((element, index, array) => {
    // Return transformed element
});
`}
          sandboxOption={false}
        />
        <ul>
          <li>
            <strong>
              <code>element</code>
            </strong>
            : The current element being processed.
          </li>
          <li>
            <strong>
              <code>index</code>
            </strong>{" "}
            (optional): The index of the current element.
          </li>
          <li>
            <strong>
              <code>array</code>
            </strong>{" "}
            (optional): The array <code>map</code> was called upon.
          </li>
        </ul>
        <h3>Example: Squaring Numbers</h3>
        <CodeHighlight
          content={`
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);

console.log(squaredNumbers); 
// Output: [1, 4, 9, 16, 25]
`}
          sandboxOption={false}
        />
        <p>In this example:</p>
        <ul>
          <li>
            <code>map()</code> iterates over each element in the{" "}
            <code>numbers</code> array and returns a new array where each
            element is squared.
          </li>
          <li>
            The original <code>numbers</code> array remains unchanged.
          </li>
        </ul>
        <hr />
        <h2>
          3. Using <code>filter()</code>
        </h2>
        <h3>
          What is <code>filter()</code>?
        </h3>
        <p>
          The{" "}
          <strong>
            <code>filter()</code>
          </strong>{" "}
          method creates a new array with all elements that pass a given{" "}
          <strong>test function</strong>. It is useful when you want to{" "}
          <strong>extract</strong> a subset of elements that meet specific
          criteria.
        </p>
        <h3>Syntax:</h3>
        <CodeHighlight
          content={`
const newArray = array.filter((element, index, array) => {
    // Return true to keep the element, false to filter it out
});
`}
          sandboxOption={false}
        />
        <h3>Example: Filtering Even Numbers</h3>
        <CodeHighlight
          content={`
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);
// Output: [2, 4, 6]
`}
          sandboxOption={false}
        />
        <p>In this example:</p>
        <ul>
          <li>
            <code>filter()</code> iterates over each element and includes only
            those that pass the condition <code>num % 2 === 0</code>, which
            checks if a number is even.
          </li>
          <li>The result is a new array with only the even numbers.</li>
        </ul>
        <hr />
        <h2>
          4. Using <code>reduce()</code>
        </h2>
        <h3>
          What is <code>reduce()</code>?
        </h3>
        <p>
          The{" "}
          <strong>
            <code>reduce()</code>
          </strong>{" "}
          method executes a <strong>reducer function</strong> on each element of
          the array, resulting in a <strong>single output value</strong>. It is
          ideal for scenarios where you want to <strong>accumulate</strong> or{" "}
          <strong>combine</strong> array elements into a single value.
        </p>
        <h3>Syntax:</h3>
        <CodeHighlight
          content={`
const result = array.reduce((accumulator, element, index, array) => {
    // Combine accumulator and element
    return accumulator;
}, initialValue);
`}
          sandboxOption={false}
        />
        <ul>
          <li>
            <strong>
              <code>accumulator</code>
            </strong>
            : The accumulated value from previous iterations.
          </li>
          <li>
            <strong>
              <code>element</code>
            </strong>
            : The current element being processed.
          </li>
          <li>
            <strong>
              <code>initialValue</code>
            </strong>
            : The initial value of the accumulator (optional but recommended).
          </li>
        </ul>
        <h3>Example: Summing Numbers</h3>
        <CodeHighlight
          content={`
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);

console.log(sum);
// Output: 15
`}
          sandboxOption={false}
        />
        <p>In this example:</p>
        <ul>
          <li>
            <code>reduce()</code> iterates over each element, adding each number
            to the <code>accumulator</code>.
          </li>
          <li>
            The initial value of <code>accumulator</code> is <code>0</code>.
          </li>
          <li>
            The result is the sum of all numbers in the <code>numbers</code>{" "}
            array.
          </li>
        </ul>
        <h3>Example: Calculating Average</h3>
        <CodeHighlight
          content={`
const numbers = [10, 20, 30, 40, 50];
const average = numbers.reduce((acc, num) => acc + num / array.length, 0);

console.log(average);
// Output: 30
`}
          sandboxOption={false}
        />
        <p>In this example:</p>
        <ul>
          <li>
            <code>reduce()</code> accumulates the sum of the elements divided by
            the length of the array to calculate the average.
          </li>
          <li>
            The <code>array.length</code> allows us to divide each number by the
            total number of elements, resulting in the average value.
          </li>
        </ul>
        <hr />
        <h2>
          5. Combining <code>map()</code>, <code>filter()</code>, and{" "}
          <code>reduce()</code>
        </h2>
        <p>
          Often, you will find that using these methods together can help you
          solve complex problems in a simple and readable way.
        </p>
        <h3>Example: Transforming, Filtering, and Summing</h3>
        <p>
          Suppose you have an array of numbers, and you want to{" "}
          <strong>square</strong> each number, <strong>filter out</strong> the
          odd numbers, and <strong>sum</strong> the remaining values:
        </p>
        <CodeHighlight
          content={`
const numbers = [1, 2, 3, 4, 5];

const result = numbers
    .map((num) => num * num)      // [1, 4, 9, 16, 25]
    .filter((num) => num % 2 === 0) // [4, 16]
    .reduce((acc, num) => acc + num, 0); // 4 + 16 = 20

console.log(result); 
// Output: 20
`}
          sandboxOption={false}
        />
        <p>In this example:</p>
        <ul>
          <li>
            <strong>
              <code>map()</code>
            </strong>{" "}
            squares each number.
          </li>
          <li>
            <strong>
              <code>filter()</code>
            </strong>{" "}
            keeps only the even numbers.
          </li>
          <li>
            <strong>
              <code>reduce()</code>
            </strong>{" "}
            sums the remaining values.
          </li>
        </ul>
        <p>
          By chaining these methods together, you can create a concise and
          readable solution to complex array transformations.
        </p>
        <hr />
        <h2>Summary</h2>
        <p>
          In this tutorial, we explored three fundamental JavaScript array
          methods:
        </p>
        <ul>
          <li>
            <strong>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
                target="_blank"
              >
                <code>map()</code>
              </Link>
            </strong>
            : Transforms elements in an array and returns a new array.
          </li>
          <li>
            <strong>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
                target="_blank"
              >
                <code>filter()</code>
              </Link>
            </strong>
            : Creates a new array with elements that pass a test.
          </li>
          <li>
            <strong>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
                target="_blank"
              >
                <code>reduce()</code>
              </Link>
            </strong>
            : Reduces an array to a single value by iterating and combining
            elements.
          </li>
        </ul>
        <p>
          These methods allow you to work with arrays in a more functional and
          readable way, making your JavaScript code cleaner and easier to
          maintain. By combining them, you can handle a wide range of data
          processing tasks with minimal code. We added links to the MDN docs if
          you want to dive deeper into these important Array functions.
        </p>
      </div>
    </ModuleWrapper>
  );
}
