import CodeHighlight from "@/app/components/CodeHighlight";

export default function Git() {
  return (
    <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
      <h1>Git</h1>
      <p>
        <strong>Git</strong> is a distributed version control system that helps
        developers track changes in their code, collaborate with others, and
        manage different versions of their projects. It&#39;s an essential tool
        for software development and widely used in both individual and team
        projects.
      </p>
      <hr />
      <h2>What is Git?</h2>
      <p>
        Git is a <strong>version control system</strong> (VCS) that helps
        developers keep track of changes made to files over time. It allows
        multiple people to work on a project simultaneously, makes it easy to
        revert back to previous versions, and keeps a complete history of every
        change ever made. Git can be used for various types of projects,
        including codebases, documentation, and even design files.
      </p>
      <hr />
      <h2>Why Use Git?</h2>
      <ul>
        <li>
          <strong>Track Changes</strong>: Git records every change made to your
          codebase, making it easy to view, compare, and restore different
          versions of your project.
        </li>
        <li>
          <strong>Collaboration</strong>: With Git, multiple developers can work
          on the same project simultaneously without overwriting each
          other&#39;s work. Git merges changes from different contributors.
        </li>
        <li>
          <strong>Branching</strong>: Allows you to create separate environments
          for developing new features or fixing bugs without affecting the main
          codebase.
        </li>
        <li>
          <strong>Backup</strong>: Storing your code on a remote server like
          GitHub acts as a backup, protecting your work from local failures.
        </li>
      </ul>
      <hr />
      <h2>Key Concepts in Git</h2>
      <h3>Repositories (Repos)</h3>
      <ul>
        <li>
          A <strong>repository</strong> is a storage location for your
          project&#39;s files and version history.
        </li>
        <li>
          It can be <strong>local</strong> (on your computer) or{" "}
          <strong>remote</strong> (e.g., on GitHub).
        </li>
      </ul>
      <h3>Commits</h3>
      <ul>
        <li>
          A <strong>commit</strong> is a snapshot of your project&#39;s files at
          a specific point in time.
        </li>
        <li>
          Commits allow you to save your changes with a message that describes
          what was changed.
        </li>
      </ul>
      <h3>Branches</h3>
      <ul>
        <li>
          A <strong>branch</strong> is an independent line of development.
        </li>
        <li>
          The default branch is usually called <code>main</code> or{" "}
          <code>master</code>, but you can create other branches for new
          features or bug fixes.
        </li>
      </ul>
      <h3>Merging</h3>
      <ul>
        <li>
          <strong>Merging</strong> combines changes from one branch into
          another, typically to integrate a feature branch into{" "}
          <code>main</code>.
        </li>
        <li>Git helps manage conflicts that may arise when merging changes.</li>
      </ul>
      <hr />
      <h2>Getting Started with Git</h2>
      <h3>Installing Git</h3>
      <ul>
        <li>
          <strong>Windows</strong>: Download and install Git from{" "}
          <a href="https://git-scm.com/">git-scm.com</a>.
        </li>
        <li>
          <strong>Mac</strong>: Use Homebrew: <code>brew install git</code>.
        </li>
        <li>
          <strong>Linux</strong>: Install via your package manager, e.g.,{" "}
          <code>sudo apt-get install git</code>.
        </li>
      </ul>
      <h3>Setting Up Git for the First Time</h3>
      <p>
        After installing Git, configure your username and email, which will be
        associated with your commits:
      </p>
      <CodeHighlight
        content={`
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
`}
        sandboxOption={false}
      />
      <h3>Creating a New Repository</h3>
      <p>
        To start a new Git repository, navigate to your project&#39;s folder in
        the terminal and run:
      </p>
      <CodeHighlight
        content={`
git init
`}
        sandboxOption={false}
      />
      <p>This will create a new, empty repository in the folder.</p>
      <hr />
      <h2>Basic Git Commands</h2>
      <h3>
        <code>git clone</code>
      </h3>
      <ul>
        <li>Copies an existing remote repository to your local machine.</li>
        <li>
          Example:
          <CodeHighlight
            content={`
git clone https://github.com/username/repo.git
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <h3>
        <code>git add</code>
      </h3>
      <ul>
        <li>Stages changes (new or modified files) to be committed.</li>
        <li>
          Example:
          <CodeHighlight
            content={`
git add filename.txt
git add .  # Adds all changes in the current directory
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <h3>
        <code>git commit</code>
      </h3>
      <ul>
        <li>
          Saves staged changes to the repository with a descriptive message.
        </li>
        <li>
          Example:
          <CodeHighlight
            content={`
git commit -m "Add new feature"
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <h3>
        <code>git status</code>
      </h3>
      <ul>
        <li>
          Shows the status of changes in the working directory and staging area.
        </li>
        <li>
          Example:
          <CodeHighlight
            content={`
git status
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <h3>
        <code>git push</code>
      </h3>
      <ul>
        <li>
          Pushes your local commits to a remote repository (e.g., GitHub).
        </li>
        <li>
          Example:
          <CodeHighlight
            content={`
git push origin main
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <h3>
        <code>git pull</code>
      </h3>
      <ul>
        <li>
          Fetches and merges changes from a remote repository into your local
          branch.
        </li>
        <li>
          Example:
          <CodeHighlight
            content={`
git pull origin main
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <hr />
      <h2>Working with Branches</h2>
      <h3>Creating a Branch</h3>
      <ul>
        <li>
          To create a new branch:
          <CodeHighlight
            content={`
git branch new-feature
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <h3>Switching Branches</h3>
      <ul>
        <li>
          To switch to a different branch:
          <CodeHighlight
            content={`
git checkout new-feature
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <h3>Merging Branches</h3>
      <ul>
        <li>
          To merge changes from <code>new-feature</code> into <code>main</code>:
          <CodeHighlight
            content={`
git checkout main
git merge new-feature
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <hr />
      <h2>Using GitHub for Remote Repositories</h2>
      <h3>Cloning a Repository from GitHub</h3>
      <ul>
        <li>
          Clone a repository to work with it locally:
          <CodeHighlight
            content={`
git clone https://github.com/username/repo.git
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <h3>Pushing Changes to GitHub</h3>
      <ul>
        <li>
          After making commits, push changes to your GitHub repository:
          <CodeHighlight
            content={`
git push origin main
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <h3>Creating a Pull Request</h3>
      <ul>
        <li>
          A <strong>pull request</strong> is a request to merge changes from one
          branch into another.
        </li>
        <li>
          After pushing your changes to GitHub, navigate to the repository on
          GitHub, click &quot;Compare &amp; pull request,&quot; and follow the
          prompts.
        </li>
      </ul>
      <hr />
      <h2>Best Practices</h2>
      <ul>
        <li>
          <strong>Commit Often</strong>: Make small, frequent commits with clear
          messages.
        </li>
        <li>
          <strong>Use Branches</strong>: Create branches for new features, bug
          fixes, or experiments.
        </li>
        <li>
          <strong>Pull Before You Push</strong>: Always pull changes from the
          remote repository before pushing to avoid conflicts.
        </li>
        <li>
          <strong>Write Meaningful Commit Messages</strong>: Clearly describe
          what each commit does to make the history easier to understand.
        </li>
      </ul>
      <hr />
      <h2>Conclusion</h2>
      <p>
        Git is an essential tool for modern software development, allowing you
        to track changes, collaborate with others, and maintain a clean and
        organized codebase. By mastering the basics of Git and practicing with
        the commands mentioned in this guide, you&#39;ll be able to work more
        efficiently and effectively on any coding project.
      </p>
    </div>
  );
}
