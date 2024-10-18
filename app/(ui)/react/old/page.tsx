import CodeHighlight from "@/app/components/CodeHighlight";

export default function () {
  return (
    <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
      <h1>Older Versions of React</h1>
      <p>
        Before React introduced <strong>hooks</strong> in version 16.8,{" "}
        <strong>class components</strong> were the primary way to manage state
        and lifecycle methods. Here, I&#39;ll provide some examples using{" "}
        <strong>class components</strong> for common use cases that are
        typically managed with hooks today.
      </p>
      <hr />
      <h2>State Management in Class Components</h2>
      <p>
        In older versions of React, <strong>state</strong> was managed using
        classes with the <code>this.state</code> object and the{" "}
        <code>setState</code> method.
      </p>
      <h3>Example: Counter Component</h3>
      <CodeHighlight
        content={`
import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        // Initialize state
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </div>
        );
    }
}

export default Counter;
`}
        sandboxOption={false}
      />
      <p>In this example:</p>
      <ul>
        <li>
          The <code>state</code> is initialized in the <code>constructor</code>.
        </li>
        <li>
          The <code>increment</code> and <code>decrement</code> methods use{" "}
          <code>this.setState</code> to update the <code>count</code>.
        </li>
        <li>
          <code>this.state.count</code> is accessed to display the count.
        </li>
      </ul>
      <hr />
      <h2>2. Lifecycle Methods in Class Components</h2>
      <p>
        Before hooks, <strong>lifecycle methods</strong> were used to manage
        component life cycles, like fetching data, performing side effects, or
        cleaning up.
      </p>
      <h3>Common Lifecycle Methods:</h3>
      <ul>
        <li>
          <code>componentDidMount()</code>: Runs after the component is added to
          the DOM.
        </li>
        <li>
          <code>componentDidUpdate()</code>: Runs after state or props changes.
        </li>
        <li>
          <code>componentWillUnmount()</code>: Runs before the component is
          removed from the DOM.
        </li>
      </ul>
      <h3>
        Example: Fetching Data with <code>componentDidMount</code>
      </h3>
      <CodeHighlight
        content={`
import React, { Component } from 'react';

class DataFetcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => this.setState({ data, loading: false }))
            .catch(error => this.setState({ error, loading: false }));
    }

    render() {
        const { data, loading, error } = this.state;

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;

        return (
            <div>
                <h1>Fetched Data:</h1>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        );
    }
}

export default DataFetcher;
`}
        sandboxOption={false}
      />
      <p>In this example:</p>
      <ul>
        <li>
          <code>componentDidMount</code> is used to fetch data after the
          component mounts.
        </li>
        <li>
          The state is updated using <code>setState</code> when data is fetched
          or when an error occurs.
        </li>
        <li>
          The UI reflects different states: loading, error, and displaying the
          fetched data.
        </li>
      </ul>
      <hr />
      <h2>
        3. <code>setState</code> with Functional Updates
      </h2>
      <p>
        React’s <code>setState</code> method can take a{" "}
        <strong>function</strong> instead of an object, useful when updating
        state based on the previous state value.
      </p>
      <h3>
        Example: Functional <code>setState</code>
      </h3>
      <CodeHighlight
        content={`
import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    decrement = () => {
        this.setState((prevState) => ({
            count: prevState.count - 1
        }));
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </div>
        );
    }
}

export default Counter;
`}
        sandboxOption={false}
      />
      <p>In this example:</p>
      <ul>
        <li>
          <code>setState</code> takes a function that receives{" "}
          <code>prevState</code> to ensure state updates are based on the most
          recent value of <code>count</code>.
        </li>
        <li>
          This pattern helps avoid potential issues with{" "}
          <strong>stale state</strong> when multiple state updates happen in
          quick succession.
        </li>
      </ul>
      <hr />
      <h2>4. Event Handling in Class Components</h2>
      <p>
        Event handling in class components requires{" "}
        <strong>binding methods</strong> to the component’s <code>this</code>{" "}
        context, typically done in the <code>constructor</code>.
      </p>
      <h3>Example: Event Handling with Method Binding</h3>
      <CodeHighlight
        content={`
import React, { Component } from 'react';

class ClickHandler extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert('Button clicked!');
    }

    render() {
        return <button onClick={this.handleClick}>Click Me</button>;
    }
}

export default ClickHandler;
`}
        sandboxOption={false}
      />
      <p>In this example:</p>
      <ul>
        <li>
          <code>handleClick</code> is bound to <code>this</code> in the
          constructor to ensure that <code>this</code> inside the method refers
          to the class instance.
        </li>
        <li>
          Without binding, <code>this</code> would be <code>undefined</code>{" "}
          when the method is called as an event handler.
        </li>
      </ul>
      <p>
        Alternatively, you can use an <strong>arrow function</strong> for class
        methods, which auto-binds <code>this</code>:
      </p>
      <CodeHighlight
        content={`
class ClickHandler extends Component {
    handleClick = () => {
        alert('Button clicked!');
    }

    render() {
        return <button onClick={this.handleClick}>Click Me</button>;
    }
}
`}
        sandboxOption={false}
      />
      <hr />
      <h2>
        5. Passing Props and Using <code>defaultProps</code>
      </h2>
      <p>
        Before hooks, <strong>default props</strong> and{" "}
        <strong>prop types</strong> were defined directly on the component
        class.
      </p>
      <h3>
        Example: Using <code>defaultProps</code>
      </h3>
      <CodeHighlight
        content={`
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}

Greeting.defaultProps = {
    name: 'Guest'
};

Greeting.propTypes = {
    name: PropTypes.string
};

export default Greeting;
`}
        sandboxOption={false}
      />
      <p>In this example:</p>
      <ul>
        <li>
          <code>defaultProps</code> sets the default value for the{" "}
          <code>name</code> prop if no <code>name</code> is provided.
        </li>
        <li>
          <code>propTypes</code> is used to specify the expected type of the{" "}
          <code>name</code> prop for validation.
        </li>
      </ul>
      <hr />
      <h2>6. Example: Form Handling in Class Components</h2>
      <p>
        Handling forms was also commonly done with class components using state.
      </p>
      <h3>Example: Controlled Form</h3>
      <CodeHighlight
        content={`
import React, { Component } from 'react';

class SimpleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    handleChange = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('Submitted: ' + this.state.inputValue);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default SimpleForm;
`}
        sandboxOption={false}
      />
      <p>In this example:</p>
      <ul>
        <li>
          <code>handleChange</code> updates the state when the user types in the
          input field.
        </li>
        <li>
          The <code>inputValue</code> state is used as the <code>value</code> of
          the input, making it a <strong>controlled component</strong>.
        </li>
        <li>
          <code>handleSubmit</code> prevents the default form submission and
          displays the entered value.
        </li>
      </ul>
      <hr />
      <h2>Conclusion</h2>
      <p>
        These examples demonstrate how React development was done with{" "}
        <strong>class components</strong> before the introduction of{" "}
        <strong>hooks</strong>. While class components are still supported in
        modern React, <strong>functional components with hooks</strong> are now
        the preferred approach due to their simplicity and flexibility.
        Understanding class components is useful for maintaining older codebases
        or working in environments where hooks may not yet be adopted.
      </p>
    </div>
  );
}
