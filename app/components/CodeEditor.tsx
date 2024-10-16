"use client";

import React, { useCallback, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";

function CodeEditor() {
  const [html_edit, setHtml_Edit] = useState("");
  const [css_edit, setCss_Edit] = useState("");
  const [js_edit, setJs_Edit] = useState("");

  const onChangeHtml = useCallback((value: string) => {
    setHtml_Edit(value);
  }, []);

  const onChangeCss = useCallback((value: string) => {
    setCss_Edit(value);
  }, []);

  const onChangeJavaScript = useCallback((value: string) => {
    setJs_Edit(value);
  }, []);

  //* Create Html Document
  const srcCode = `
    <html>
        <style>${css_edit}</style>
        <body>${html_edit}</body>
        <script>${js_edit}</script>
    </html>
  `;

  return (
    <div className="h-[100vh]">
      {/* Editor  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 bg-[#1e272e] h-[50%]">
        {/* Html Editor */}
        <div className="bg-[#282c34] p-4 rounded-lg shadow h-full">
          <h2 className="text-lg font-semibold mb-2 text-white">HTML</h2>
          <CodeMirror
            className="border-gray-700 border text-lg"
            value={html_edit}
            // height="342px"
            // height="100%"
            theme="dark"
            extensions={[html({ matchClosingTags: true, autoCloseTags: true })]}
            onChange={onChangeHtml}
          />
        </div>

        {/* Css Editor  */}
        <div className="bg-[#282c34] p-4 rounded-lg shadow h-full">
          <h2 className="text-lg font-semibold mb-2 text-white">CSS</h2>
          <CodeMirror
            className=" border-gray-700 border text-lg"
            value={css_edit}
            // height="90%"
            theme="dark"
            extensions={[css()]}
            onChange={onChangeCss}
          />
        </div>

        {/* JavaScript Editor  */}
        <div className="bg-[#282c34] p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2 text-white">JavaScript</h2>
          <CodeMirror
            className="border-gray-700 border text-lg"
            value={js_edit}
            // height="100%"
            theme="dark"
            extensions={[javascript({ jsx: true })]}
            onChange={onChangeJavaScript}
          />
        </div>
      </div>

      <div className="p-4 shadow bg-[#1e272e] h-[50%]">
        <h2 className="text-lg font-semibold mb-2 text-white">Result</h2>
        <iframe
          className="w-full border border-gray-700 rounded-md bg-white"
          srcDoc={srcCode}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
}

export default CodeEditor;
