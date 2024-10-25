import CodeHighlight from "@/app/components/CodeHighlight";
import ModuleWrapper from "@/app/components/ModuleWrapper";

export default function Regex() {
  return (
    <ModuleWrapper>
      <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
        <h1>Regular Expressions</h1>
        <p>
          <strong>Regular Expressions</strong> (regex or regexp) are sequences
          of characters that define a search pattern. They are widely used in
          programming languages for searching, validating, and manipulating
          strings. This tutorial will introduce you to the basics of regular
          expressions, common use cases, and how to use them effectively.
        </p>
        <hr />
        <h2>What are Regular Expressions?</h2>
        <p>
          A <strong>regular expression</strong> is a pattern that specifies a
          set of strings. These patterns are used for matching and searching
          text, replacing text, and performing complex string operations.
          Regular expressions are supported in many programming languages,
          including JavaScript, Python, and PHP.
        </p>
        <hr />
        <h2>Why Use Regular Expressions?</h2>
        <ul>
          <li>
            <strong>Validation</strong>: Validate formats like emails, phone
            numbers, zip codes, etc.
          </li>
          <li>
            <strong>Search and Replace</strong>: Find specific patterns in
            strings and replace them.
          </li>
          <li>
            <strong>Parsing</strong>: Extract specific data from large text
            blocks.
          </li>
          <li>
            <strong>Efficiency</strong>: Perform complex text processing with
            concise expressions.
          </li>
        </ul>
        <hr />
        <h2>Basic Regex Syntax</h2>
        <p>
          Regular expressions are composed of <strong>literals</strong>,{" "}
          <strong>character classes</strong>, <strong>quantifiers</strong>, and{" "}
          <strong>anchors</strong>. Let’s explore each component.
        </p>
        <h3>Literals</h3>
        <ul>
          <li>A literal character matches itself.</li>
          <li>
            Example:
            <ul>
              <li>
                Pattern: <code>cat</code>
              </li>
              <li>
                Matches: &quot;cat&quot;, &quot;catfish&quot;, but not
                &quot;Cat&quot;.
              </li>
            </ul>
          </li>
        </ul>
        <h3>Character Classes</h3>
        <p>
          Character classes allow you to define sets of characters you want to
          match.
        </p>
        <ul>
          <li>
            <strong>
              <code>[abc]</code>
            </strong>
            : Matches any single character <code>a</code>, <code>b</code>, or{" "}
            <code>c</code>.
          </li>
          <li>
            <strong>
              <code>[^abc]</code>
            </strong>
            : Matches any character except <code>a</code>, <code>b</code>, or{" "}
            <code>c</code>.
          </li>
          <li>
            <strong>
              <code>[a-z]</code>
            </strong>
            : Matches any lowercase letter from <code>a</code> to <code>z</code>
            .
          </li>
        </ul>
        <p>Example:</p>
        <ul>
          <li>
            Pattern: <code>[A-Za-z]</code>
          </li>
          <li>Matches: Any single letter (uppercase or lowercase).</li>
        </ul>
        <h3>Quantifiers</h3>
        <p>
          Quantifiers specify how many times a character or a group must appear.
        </p>
        <ul>
          <li>
            <strong>
              <code>*</code>
            </strong>
            : Zero or more times.
          </li>
          <li>
            <strong>
              <code>+</code>
            </strong>
            : One or more times.
          </li>
          <li>
            <strong>
              <code>?</code>
            </strong>
            : Zero or one time.
          </li>
          <li>
            <strong>
              <code>&#10100;n&#10101;</code>
            </strong>
            : Exactly <code>n</code> times.
          </li>
          <li>
            <strong>
              <code>&#10100;n,&#10101;</code>
            </strong>
            : <code>n</code> or more times.
          </li>
          <li>
            <strong>
              <code>&#10100;n,m&#10101;</code>
            </strong>
            : Between <code>n</code> and <code>m</code> times.
          </li>
        </ul>
        <p>Example:</p>
        <ul>
          <li>
            Pattern: <code>\d{3}</code>
          </li>
          <li>Matches: Exactly 3 digits (e.g., &quot;123&quot;).</li>
        </ul>
        <h3>Anchors</h3>
        <p>Anchors specify the position of the match.</p>
        <ul>
          <li>
            <strong>
              <code>^</code>
            </strong>
            : Matches the beginning of a line.
          </li>
          <li>
            <strong>
              <code>$</code>
            </strong>
            : Matches the end of a line.
          </li>
        </ul>
        <p>Example:</p>
        <ul>
          <li>
            Pattern: <code>^Hello</code>
          </li>
          <li>
            Matches: &quot;Hello&quot; at the beginning of a string but not in
            &quot;Say Hello&quot;.
          </li>
        </ul>
        <hr />
        <h2>Regex Metacharacters</h2>
        <p>Metacharacters are symbols that have special meanings in regex.</p>
        <h3>
          <code>.</code> (dot)
        </h3>
        <ul>
          <li>Matches any character except a newline.</li>
          <li>
            Example: <code>c.t</code> matches &quot;cat&quot;, &quot;cot&quot;,
            &quot;cut&quot;, but not &quot;cart&quot;.
          </li>
        </ul>
        <h3>
          <code>\d</code>, <code>\w</code>, <code>\s</code>
        </h3>
        <ul>
          <li>
            <strong>
              <code>\d</code>
            </strong>
            : Matches any digit (0-9).
          </li>
          <li>
            <strong>
              <code>\w</code>
            </strong>
            : Matches any word character (letters, digits, underscores).
          </li>
          <li>
            <strong>
              <code>\s</code>
            </strong>
            : Matches any whitespace character (spaces, tabs, newlines).
          </li>
        </ul>
        <p>Example:</p>
        <ul>
          <li>
            Pattern: <code>\d+</code>
          </li>
          <li>
            Matches: Any sequence of digits (&quot;123&quot;, &quot;4567&quot;).
          </li>
        </ul>
        <h3>
          <code>\b</code> and <code>\B</code>
        </h3>
        <ul>
          <li>
            <strong>
              <code>\b</code>
            </strong>
            : Matches a word boundary.
          </li>
          <li>
            <strong>
              <code>\B</code>
            </strong>
            : Matches a non-word boundary.
          </li>
        </ul>
        <p>Example:</p>
        <ul>
          <li>
            Pattern: <code>\bcat\b</code>
          </li>
          <li>
            Matches: &quot;cat&quot; as a whole word, but not in
            &quot;cats&quot;.
          </li>
        </ul>
        <hr />
        <h2>Using Regex in JavaScript</h2>
        <p>
          JavaScript has built-in support for regex through the{" "}
          <code>RegExp</code> object and string methods.
        </p>
        <h3>
          <code>test()</code> Method
        </h3>
        <p>
          Checks if a pattern exists in a string and returns <code>true</code>{" "}
          or <code>false</code>.
        </p>
        <CodeHighlight
          content={`
const regex = /hello/;
console.log(regex.test("hello world")); // true
`}
          sandboxOption={false}
        />
        <h3>
          <code>match()</code> Method
        </h3>
        <p>Returns an array of matched substrings.</p>
        <CodeHighlight
          content={`
const regex = /\d+/g;
const result = "123 main street".match(regex);
console.log(result); // ["123"]
`}
          sandboxOption={false}
        />
        <h3>
          <code>replace()</code> Method
        </h3>
        <p>Replaces matched substrings with a new string.</p>
        <CodeHighlight
          content={`
const regex = /dog/g;
const result = "The dog is a good dog.".replace(regex, "cat");
console.log(result); // "The cat is a good cat."
`}
          sandboxOption={false}
        />
        <hr />
        <h2>Advanced Regex Techniques</h2>
        <h3>Grouping and Capturing</h3>
        <ul>
          <li>
            <strong>
              Parentheses <code>( )</code>
            </strong>{" "}
            create groups.
          </li>
          <li>
            <strong>Captured groups</strong> can be referenced later using{" "}
            <code>\1</code>, <code>\2</code>, etc.
          </li>
          <li>
            Example:
            <ul>
              <li>
                Pattern: <code>(hello) world \1</code>
              </li>
              <li>Matches: &quot;hello world hello&quot;.</li>
            </ul>
          </li>
        </ul>
        <h3>Lookaheads and Lookbehinds</h3>
        <ul>
          <li>
            <strong>
              Lookahead <code>(?=...)</code>
            </strong>
            : Asserts that a pattern is followed by another.
          </li>
          <li>
            <strong>
              Lookbehind <code>(?&lt;=...)</code>
            </strong>
            : Asserts that a pattern is preceded by another.
          </li>
        </ul>
        <p>Example:</p>
        <ul>
          <li>
            Pattern: <code>\d(?= dollars)</code>
          </li>
          <li>
            Matches: A digit followed by the word &quot;dollars&quot; without
            including &quot;dollars&quot; in the match.
          </li>
        </ul>
        <hr />
        <h2>Common Regex Examples</h2>
        <h3>Email Validation</h3>
        <CodeHighlight
          content={`
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
`}
          sandboxOption={false}
        />
        <ul>
          <li>
            Matches valid email addresses like &quot;user@example.com&quot;.
          </li>
        </ul>
        <h3>Phone Number Validation</h3>
        <CodeHighlight
          content={`
const regex = /^\(\d{3}\) \d{3}-\d{4}$/;
`}
          sandboxOption={false}
        />
        <ul>
          <li>Matches phone numbers like &quot;(123) 456-7890&quot;.</li>
        </ul>
        <h3>Extracting URLs</h3>
        <CodeHighlight
          content={`
const regex = /(https?:\/\/[^\s]+)/g;
const result = "Visit https://example.com for more info.".match(regex);
console.log(result); // ["https://example.com"]
`}
          sandboxOption={false}
        />
        <hr />
        <h2>Regex Best Practices</h2>
        <ul>
          <li>
            <strong>Escape Special Characters</strong>: Characters like{" "}
            <code>.</code>, <code>*</code>, <code>+</code>, and <code>?</code>{" "}
            have special meanings, so use <code>\</code> to escape them when
            needed.
          </li>
          <li>
            <strong>Use Flags</strong>: <code>g</code> (global) for multiple
            matches, <code>i</code> (ignore case) for case-insensitive matching.
          </li>
          <li>
            <strong>Keep Patterns Readable</strong>: Use whitespace, comments,
            and grouping to make complex patterns easier to read.
          </li>
          <li>
            <strong>Test Regularly</strong>: Use online tools like{" "}
            <a href="https://regex101.com/">regex101.com</a> to test and debug
            your expressions.
          </li>
        </ul>
        <hr />
        <h2>Conclusion</h2>
        <p>
          Regular expressions are powerful tools for working with text, allowing
          you to search, validate, and manipulate strings in a highly efficient
          way. While the syntax can seem complex at first, understanding the
          basic components like character classes, quantifiers, and anchors will
          help you tackle most regex challenges. With practice, you&#39;ll be
          able to write more advanced patterns and use regular expressions to
          simplify your coding tasks.
        </p>
      </div>
    </ModuleWrapper>
  );
}
