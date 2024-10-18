import CodeHighlight from "@/app/components/CodeHighlight";

export default function State() {
  return (
    <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
      <h1>State Management in React</h1>
      <p>
        State management is an essential concept in React that allows you to
        manage and control <strong>data flow</strong> within an application.
        Understanding how to manage state effectively helps you build{" "}
        <strong>dynamic</strong> and <strong>interactive</strong> user
        interfaces, as the state is used to track changes, update the UI, and
        keep the data flow consistent.
      </p>
      <hr />
      <h2>What is State in React?</h2>
      <p>
        <strong>State</strong> in React is an object that holds dynamic values
        which determine how a component behaves and renders. It can be thought
        of as <strong>data</strong> that changes over time, usually as a result
        of user interactions, such as input changes, button clicks, or API
        responses.
      </p>
      <p>
        State is <strong>local</strong> to a component, which means each
        component can have its own state that can be updated independently of
        other components. When the state of a component changes, React
        automatically <strong>re-renders</strong> that component to reflect the
        new state.
      </p>
      <hr />
      <h2>
        Setting State with <code>useState</code>
      </h2>
      <p>
        The <code>useState</code> hook is the most common way to add state to{" "}
        <strong>functional components</strong>. It allows you to declare a state
        variable and a function to update it.
      </p>
      <h3>
        Example: Using <code>useState</code> for a Counter
      </h3>
      <CodeHighlight
        content={`
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter;
`}
        sandboxOption={false}
      />
      <p>
        <strong>Explanation</strong>:
      </p>
      <ul>
        <li>
          <code>useState</code> is initialized with a value of <code>0</code>,
          which means the <code>count</code> starts at <code>0</code>.
        </li>
        <li>
          <code>setCount</code> is used to update the value of{" "}
          <code>count</code>.
        </li>
        <li>
          Clicking the increment button increases the count, while clicking the
          decrement button decreases it.
        </li>
      </ul>
      <hr />
      <h2>Managing Complex State with Objects and Arrays</h2>
      <p>
        When managing state with objects or arrays, it&#39;s important to{" "}
        <strong>spread</strong> the previous state to avoid{" "}
        <strong>mutating</strong> it directly. This ensures React can properly
        detect state changes.
      </p>
      <h3>Example: Managing State with Objects</h3>
      <CodeHighlight
        content={`
import React, { useState } from 'react';

function UserProfile() {
    const [user, setUser] = useState({
        name: 'Alice',
        age: 25
    });

    const updateName = (newName) => {
        setUser((prevUser) => ({
            ...prevUser,
            name: newName
        }));
    };

    return (
        <div>
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.age}</h2>
            <button onClick={() => updateName('Bob')}>Change Name to Bob</button>
        </div>
    );
}

export default UserProfile;
`}
        sandboxOption={false}
      />
      <p>
        <strong>Explanation</strong>:
      </p>
      <ul>
        <li>
          <code>useState</code> is initialized with an object containing{" "}
          <code>name</code> and <code>age</code>.
        </li>
        <li>
          <code>updateName</code> updates only the <code>name</code> property
          while preserving the <code>age</code> using the{" "}
          <strong>spread operator</strong> (<code>...prevUser</code>).
        </li>
      </ul>
      <h3>Example: Managing State with Arrays</h3>
      <CodeHighlight
        content={`
import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState(['Learn React', 'Build a Project']);

    const addTodo = () => {
        setTodos((prevTodos) => [...prevTodos, 'New Todo']);
    };

    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
}

export default TodoList;
`}
        sandboxOption={false}
      />
      <p>
        <strong>Explanation</strong>:
      </p>
      <ul>
        <li>
          <code>useState</code> holds an array of <code>todos</code>.
        </li>
        <li>
          <code>addTodo</code> adds a new todo by spreading{" "}
          <code>prevTodos</code> into a new array and adding the new item.
        </li>
        <li>
          The <code>map</code> function renders each item as an{" "}
          <code>&lt;li&gt;</code> element.
        </li>
      </ul>
      <hr />
      <h2>State Lifting: Sharing State Between Components</h2>
      <p>
        When multiple components need to <strong>share</strong> the same state,
        you can <strong>lift state up</strong> to the nearest common ancestor.
      </p>
      <h3>Example: Lifting State Up</h3>
      <CodeHighlight
        content={`
import React, { useState } from 'react';

function ParentComponent() {
    const [value, setValue] = useState('');

    return (
        <div>
            <h1>Shared Value: {value}</h1>
            <ChildComponent value={value} onChange={setValue} />
        </div>
    );
}

function ChildComponent({ value, onChange }) {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Type something"
        />
    );
}

export default ParentComponent;
`}
        sandboxOption={false}
      />
      <p>
        <strong>Explanation</strong>:
      </p>
      <ul>
        <li>
          The <code>value</code> state is managed in the{" "}
          <code>ParentComponent</code> and passed down to{" "}
          <code>ChildComponent</code> as a <strong>prop</strong>.
        </li>
        <li>
          <code>ChildComponent</code> receives <code>onChange</code> as a prop,
          allowing it to update the state in the parent.
        </li>
        <li>
          This pattern is useful when multiple components need to access or
          modify the same piece of data.
        </li>
      </ul>
      <hr />
      <h2>Global State Management with Context API</h2>
      <p>
        For managing <strong>global state</strong> across multiple components
        without needing to pass props manually, React offers the{" "}
        <strong>Context API</strong>. It allows you to create a{" "}
        <strong>context</strong> and provide it to components that need to
        access the same state.
      </p>
      <h3>Example: Using Context API for Theme Management</h3>
      <CodeHighlight
        content={`
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

function App() {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={theme}>
                <h1>The current theme is {theme}</h1>
                <ThemeSwitcher />
            </div>
        </ThemeContext.Provider>
    );
}

function ThemeSwitcher() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            Toggle Theme
        </button>
    );
}

export default App;
`}
        sandboxOption={false}
        externalSandboxUrl="https://codesandbox.io/p/sandbox/gl24m5"
      />
      <p>
        <strong>Explanation</strong>:
      </p>
      <ul>
        <li>
          <code>ThemeContext</code> is created to hold the theme state.
        </li>
        <li>
          <code>ThemeContext.Provider</code> makes the <code>theme</code> and{" "}
          <code>setTheme</code> accessible to any component within its tree.
        </li>
        <li>
          <code>ThemeSwitcher</code> uses <code>useContext</code> to access and
          change the <code>theme</code> without needing to pass props down.
        </li>
      </ul>
      <hr />
      <h2>Introduction to Third-Party State Management Libraries</h2>
      <p>
        For large applications with complex state needs, libraries like{" "}
        <strong>Redux</strong> or <strong>Recoil</strong> can be useful. These
        libraries provide more structured ways to manage state and actions.
      </p>
      <h3>Example: Using Redux (Basic Flow)</h3>
      <ol>
        <li>
          Install Redux and React-Redux:
          <CodeHighlight
            content={`
npm install redux react-redux
`}
            sandboxOption={false}
          />
        </li>
        <li>
          Create a <strong>Redux store</strong>:
          <CodeHighlight
            content={`
import { createStore } from 'redux';

const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const store = createStore(counterReducer);
`}
            sandboxOption={false}
          />
        </li>
        <li>
          Connect Redux store to your React app using{" "}
          <code>&lt;Provider&gt;</code> and <code>useSelector</code>,{" "}
          <code>useDispatch</code>:
        </li>
      </ol>
      <CodeHighlight
        content={`
import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';

function Counter() {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
        </div>
    );
}

function App() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}

export default App;
`}
        sandboxOption={false}
        externalSandboxUrl="https://codesandbox.io/p/sandbox/rnnnwz"
      />
      <p>
        In this example, Redux helps to <strong>centralize</strong> state in a{" "}
        <strong>global store</strong>, making it easier to manage state across
        different components in large applications.
      </p>
      <hr />
      <h2>Conclusion</h2>
      <p>
        State management in React is crucial for building dynamic and responsive
        applications. This tutorial covered:
      </p>
      <ul>
        <li>
          <strong>Local state</strong> management with <code>useState</code>.
        </li>
        <li>
          <strong>Complex state</strong> using objects and arrays.
        </li>
        <li>
          <strong>State lifting</strong> to share state between components.
        </li>
        <li>
          <strong>Global state</strong> management using third-party
          state-management libraries like Redux or Zustand.
        </li>
      </ul>
    </div>
  );
}
