import ModuleWrapper from "@/app/components/ModuleWrapper";

export default function Exercise() {
  return (
    <ModuleWrapper>
      <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
        <h1>JavaScript Exercise: TODO app</h1>
        <p>
          For this exercise, build a pure frontend TODO app using DOM
          manipulation in vanilla JavaScript (no external libraries or
          frameworks). Here are the requirements:
        </p>
        <ul>
          <li>
            Have an input that takes in user data. This input will be a todo
          </li>
          <li>
            Have a button which on click, takes the user input and adds it to a
            list of TODO's
          </li>
          <li>
            Make a section to display each TODO that a user enters. Upon click
            of the button, the user input should show up in the list of TODOs
          </li>
          <li>
            For each TODO, have a button where on click, it will remove the TODO
            from the list of TODOs
          </li>
        </ul>
        <p>
          This exercise is a canonical JavaScript problem which acts as a good
          primer on how to work with vanilla JavaScript. Once you're finished
          and did basic QA to make sure there are no obvious bugs, you can go
          ahead and try to style it if you want some CSS practice.
        </p>
      </div>
    </ModuleWrapper>
  );
}
