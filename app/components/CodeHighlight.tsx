"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Clipboard = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-clipboard"
  >
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
  </svg>
);

const Checkmark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-check"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function CodeHighlight({
  content,
  showEditor = false,
  setShowEditor = () => {},
  set_html_arg = () => {},
  set_css_arg = () => {},
  set_js_arg = () => {},
  args = {
    html: "",
    css: "",
    js: "",
  },
  sandboxOption = true,
  externalSandboxUrl = null,
}: {
  content: string;
  showEditor?: boolean;
  setShowEditor?: (x: boolean) => void;
  set_html_arg?: (x: string) => void;
  set_css_arg?: (x: string) => void;
  set_js_arg?: (x: string) => void;
  args?: {
    html: string;
    css: string;
    js: string;
  };
  sandboxOption?: boolean;
  externalSandboxUrl?: string | null;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden">
      <div className="flex justify-between px-4 py-1 text-white text-xs items-center">
        <p className="text-sm">Example code</p>
        <div className="flex gap-4">
          {sandboxOption && (
            <div
              className="py-1 inline-flex items-center no-underline text-sm gap-1 cursor-pointer"
              onClick={() => {
                setShowEditor(!showEditor);
                set_html_arg(args["html"]);
                set_css_arg(args["css"]);
                set_js_arg(args["js"]);
              }}
            >
              <ExternalLink />
              <p>Sandbox</p>
            </div>
          )}
          {externalSandboxUrl && (
            <Link
              className="py-1 inline-flex items-center no-underline text-sm gap-1 cursor-pointer"
              href={externalSandboxUrl}
              target="_blank"
            >
              <ExternalLink />
              <p>Sandbox</p>
            </Link>
          )}
          {!copied ? (
            <button
              className="py-1 inline-flex items-center gap-1"
              onClick={() => {
                navigator.clipboard.writeText(content);
                setCopied(true);
                setTimeout(() => setCopied(false), 3000);
              }}
            >
              <Clipboard />
              &nbsp;Copy code
            </button>
          ) : (
            <button className="py-1 inline-flex items-center gap-1">
              <Checkmark />
              &nbsp;Copied!
            </button>
          )}
        </div>
      </div>
      <SyntaxHighlighter
        language="html"
        style={atomOneDark}
        customStyle={{
          padding: "0px 25px 25px 25px",
        }}
        wrapLongLines={true}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
}
