import CodeHighlight from "@/app/components/CodeHighlight";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Paths() {
  return (
    <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
      <h1>Directory Paths and Navigation</h1>
      <p>
        In computing, a <strong>directory path</strong> is like an address that
        tells the operating system where a file or folder is located on a
        computer. Understanding how to navigate through directories is essential
        when working with command-line tools or managing files. This tutorial
        will guide you through the basics of directory paths, the difference
        between <strong>absolute</strong> and <strong>relative</strong> paths,
        and how to navigate using common command-line commands in{" "}
        <strong>Windows</strong>, <strong>macOS</strong>, and{" "}
        <strong>Linux</strong>.
      </p>
      <hr />
      <h2>What is a Directory Path?</h2>
      <p>
        A <strong>directory path</strong> describes the location of a file or
        folder in the file system. The path helps you find files and folders,
        much like a postal address helps you find a location in the real world.
      </p>
      <h3>Types of Paths</h3>
      <p>
        <strong>Absolute Path</strong>: This specifies the complete location of
        a file or directory, starting from the root directory. It always begins
        with the root directory (like <code>/</code> in Unix-based systems or a
        drive letter like <code>C:</code> in Windows).
      </p>
      <ul className="ml-4">
        <li>
          Example (Unix-based): <code>/home/user/Documents/report.txt</code>
        </li>
        <li>
          Example (Windows): <code>C:\Users\John\Documents\report.txt</code>
        </li>
      </ul>
      <p>
        <strong>Relative Path</strong>: This specifies a location relative to
        the current working directory (where you are currently located in the
        terminal). It does not start from the root.
      </p>
      <ul>
        <li>
          Example (Unix-based): <code>Documents/report.txt</code>
        </li>
        <li>
          Example (Windows): <code>Documents\report.txt</code>
        </li>
      </ul>
      <hr />
      <h2>Navigating Directories Using Command-Line</h2>
      <p>
        The command-line interface (CLI) allows you to navigate and manage files
        using text commands. Below are some common commands for{" "}
        <strong>Windows Command Prompt</strong>, <strong>macOS Terminal</strong>
        , and <strong>Linux Terminal</strong>.
      </p>
      <h3>
        1. <strong>Viewing the Current Directory</strong>
      </h3>
      <p>To see which directory you are currently in:</p>
      <ul>
        <li>
          <strong>Windows:</strong>
          <CodeHighlight
            content={`
cd
`}
            sandboxOption={false}
          />
        </li>
        <li>
          <strong>macOS/Linux:</strong>
          <CodeHighlight
            content={`
pwd

`}
            sandboxOption={false}
          />
          <p>
            This command stands for &quot;print working directory&quot; and
            displays the full path of your current directory.
          </p>
        </li>
      </ul>
      <hr />
      <h3>
        2. <strong>Navigating to a Different Directory</strong>
      </h3>
      <p>
        To change to a different directory, use the <code>cd</code> (change
        directory) command followed by the path:
      </p>
      <p>
        <strong>Navigate to a Directory:</strong>
      </p>
      <ul>
        <li>
          <strong>Example (Windows):</strong>
          <CodeHighlight
            content={`
cd C:\\Users\\John\\Documents
`}
            sandboxOption={false}
          />
        </li>
        <li>
          <strong>Example (macOS/Linux):</strong>
          <CodeHighlight
            content={`
cd /home/user/Documents
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <p>
        <strong>Using Relative Paths:</strong>
      </p>
      <ul>
        <li>
          Example:
          <CodeHighlight
            content={`
cd Documents
`}
            sandboxOption={false}
          />
          <p>
            This moves to the <code>Documents</code> folder inside the current
            directory.
          </p>
        </li>
      </ul>
      <p>
        <strong>Going Up One Level:</strong>
      </p>
      <p>
        Use <code>..</code> to move up one directory:
      </p>
      <ul>
        <li>
          <strong>Windows</strong>:
          <CodeHighlight
            content={`
cd ..
`}
            sandboxOption={false}
          />
        </li>
        <li>
          <strong>macOS/Linux</strong>:
          <CodeHighlight
            content={`
cd ..
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <p>
        <strong>Moving to the Root Directory</strong>:
      </p>
      <ul>
        <li>
          <strong>Windows:</strong>
          <CodeHighlight
            content={`
cd \
`}
            sandboxOption={false}
          />
        </li>
        <li>
          <strong>macOS/Linux:</strong>
          <CodeHighlight
            content={`
cd /
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <hr />
      <h3>
        3. <strong>Listing Files and Directories</strong>
      </h3>
      <p>To see what files and directories are inside the current directory:</p>
      <strong>Windows:</strong>
      <CodeHighlight
        content={`
dir
`}
        sandboxOption={false}
      />
      <p>
        <strong>macOS/Linux:</strong>
      </p>
      <CodeHighlight
        content={`
ls
`}
        sandboxOption={false}
      />
      <p>
        <strong>List Files with Details</strong> (macOS/Linux):
      </p>
      <CodeHighlight
        content={`
ls -l
`}
        sandboxOption={false}
      />

      <p>
        This displays additional details like file permissions, sizes, and
        modification dates.
      </p>
      <hr />
      <h3>
        4. <strong>Creating Directories</strong>
      </h3>
      <p>To create a new directory (folder):</p>
      <ul>
        <li>
          <strong>Windows:</strong>
          <CodeHighlight
            content={`
mkdir new_folder
`}
            sandboxOption={false}
          />
        </li>
        <li>
          <strong>macOS/Linux</strong>:
          <CodeHighlight
            content={`
mkdir new_folder
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <p>
        This creates a directory named <code>new_folder</code> in the current
        directory.
      </p>
      <hr />
      <h3>
        5. <strong>Working with Absolute and Relative Paths</strong>
      </h3>
      <p>
        <strong>Example 1: Using Absolute Paths</strong>
      </p>

      <p>
        Suppose you want to navigate to the <code>Pictures</code> folder from
        anywhere in your system:
      </p>
      <ul>
        <li>
          <strong>Windows</strong>:
          <CodeHighlight
            content={`
cd C:\\Users\\John\\Pictures
`}
            sandboxOption={false}
          />
        </li>
        <li>
          <strong>macOS/Linux</strong>:
          <CodeHighlight
            content={`
cd /home/user/Pictures
`}
            sandboxOption={false}
          />
        </li>
      </ul>

      <p>
        <strong>Example 2: Using Relative Paths</strong>
      </p>
      <ul>
        <li>
          If you are already in <code>C:\Users\John\</code> (Windows) or{" "}
          <code>/home/user/</code> (macOS/Linux) and want to navigate to{" "}
          <code>Pictures</code>, you can use:
          <CodeHighlight
            content={`
cd Pictures
`}
            sandboxOption={false}
          />
        </li>
        <li>
          To go back up to the parent directory and then into another, use:
          <CodeHighlight
            content={`
cd ../Documents
`}
            sandboxOption={false}
          />
        </li>
      </ul>
      <hr />
      <h2>Summary of Commands</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Command</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Windows</TableHead>
            <TableHead>macOS/Linux</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <code>cd</code>
            </TableCell>
            <TableCell>Change directory</TableCell>
            <TableCell>
              <code>cd path</code>
            </TableCell>
            <TableCell>
              <code>cd path</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>..</code>
            </TableCell>
            <TableCell>Move up one level</TableCell>
            <TableCell>
              <code>cd ..</code>
            </TableCell>
            <TableCell>
              <code>cd ..</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>pwd</code>
            </TableCell>
            <TableCell>Print current directory path</TableCell>
            <TableCell>N/A</TableCell>
            <TableCell>
              <code>pwd</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>dir</code>
            </TableCell>
            <TableCell>List files and directories</TableCell>
            <TableCell>
              <code>dir</code>
            </TableCell>
            <TableCell>N/A</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>ls</code>
            </TableCell>
            <TableCell>List files and directories</TableCell>
            <TableCell>N/A</TableCell>
            <TableCell>
              <code>ls</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>mkdir</code>
            </TableCell>
            <TableCell>Create a new directory</TableCell>
            <TableCell>
              <code>mkdir name</code>
            </TableCell>
            <TableCell>
              <code>mkdir name</code>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <code>/</code> or <code>\</code>
            </TableCell>
            <TableCell>Root directory</TableCell>
            <TableCell>
              <code>cd \</code>
            </TableCell>
            <TableCell>
              <code>cd /</code>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <hr />
      <h2>Practical Exercise</h2>
      <p>Try out these steps to practice directory navigation:</p>
      <ol>
        <li>
          Open your command-line interface (Command Prompt for Windows or
          Terminal for macOS/Linux).
        </li>
        <li>
          Check your current directory using <code>pwd</code> (macOS/Linux) or{" "}
          <code>cd</code> (Windows).
        </li>
        <li>
          Create a new directory called <code>test_directory</code>.
        </li>
        <li>
          Navigate into <code>test_directory</code> using <code>cd</code>.
        </li>
        <li>
          Create another directory inside <code>test_directory</code> called{" "}
          <code>inner_directory</code>.
        </li>
        <li>
          Move back to the parent directory using <code>cd ..</code>.
        </li>
        <li>
          Delete the <code>test_directory</code> using <code>rmdir</code>:
          <ul>
            <li>
              <strong>Windows</strong>: <code>rmdir /S test_directory</code>
            </li>
            <li>
              <strong>macOS/Linux</strong>: <code>rm -r test_directory</code>
            </li>
          </ul>
        </li>
      </ol>
      <hr />
      <h2>Summary</h2>
      <p>
        Navigating directories using the command-line is a fundamental skill for
        working with files and folders efficiently. Understanding absolute and
        relative paths helps you move around the file system quickly and perform
        tasks like organizing files, creating projects, and setting up
        environments. Practice these commands, and you&#39;ll become comfortable
        with directory paths in no time!
      </p>
    </div>
  );
}
