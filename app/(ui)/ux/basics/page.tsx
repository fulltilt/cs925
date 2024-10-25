import ModuleWrapper from "@/app/components/ModuleWrapper";

export default function UXBasics() {
  return (
    <ModuleWrapper>
      <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
        <h1>Basic UX</h1>
        Hilary Stohs-Krause discusses basic UX principles for programmers to
        enhance website usability and aesthetics, focusing on readability and
        design patterns.
        <h2>Highlights</h2>
        <ul>
          <li>
            📊 Usability Matters: Good design impacts functionality and user
            engagement.
          </li>
          <li>
            🌱 Text Legibility: Ensure ample spacing, appropriate line length,
            and proper contrast for readability.
          </li>
          <li>
            📸 Images & Icons: Use relevant images and label icons for clarity;
            avoid unnecessary graphics.
          </li>
          <li>
            🔄 Consistent Design: Maintain consistency in colors, typography,
            and layout for better user experience.
          </li>
          <li>
            🔍 Scannable Content: Structure text for easy scanning with headings
            and bullet points to grab attention.
          </li>
          <li>
            ⚙️ Logical Patterns: Employ predictable patterns in layout to guide
            users intuitively through content.
          </li>
          <li>
            🔄 Iterative Improvement: Regularly refine design based on user
            feedback and engagement metrics.
          </li>
        </ul>
        <h2>Key Insights</h2>
        <ul>
          <li>
            📐 Design vs. Functionality: Design isn’t just about visuals; it
            affects functionality. A beautiful site that fails to work properly
            frustrates users, highlighting the need for balance.
          </li>
          <li>
            ✍️ Text as Visual Element: Treat text as a visual element by
            ensuring proper spacing, line height, and legibility to facilitate
            reading and comprehension.
          </li>
          <li>
            📊 Effective Use of Images: Integrate images meaningfully within
            content to enhance engagement without creating distraction or banner
            blindness.
          </li>
          <li>
            🔄 Patterns Are Key: Consistency and predictable patterns in design
            reduce cognitive load, allowing users to navigate more efficiently.
          </li>
          <li>
            ✨ Accessibility Matters: Good design practices also enhance
            accessibility for users with disabilities, making content easier for
            everyone to consume.
          </li>
          <li>
            📈 Feedback Loops: Continuously gather user feedback and adjust
            designs accordingly to improve usability and engagement over time.
          </li>
          <li>
            ⚙️ Progressive Disclosure: Provide information progressively to
            avoid overwhelming users, guiding them through necessary steps in a
            logical manner.
          </li>
        </ul>
      </div>
    </ModuleWrapper>
  );
}
