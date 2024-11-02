import type { RefObject } from "react";

import { useCallback } from "react";
import { Box } from "@radix-ui/themes";
import CodeMirror, { lineNumbers } from "@uiw/react-codemirror";
import { EditorView } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";
import { useOptions } from "./stores/options";

const customTheme = EditorView.theme({
  "& .cm-scroller": {
    fontFamily: "'Source Code Pro', monospace",
  },
});

type EditorProps = {
  editorRef: RefObject<HTMLDivElement>;
  content: string;
  onChangeContent: (content: string) => void;
};
const Editor = ({ editorRef, content, onChangeContent }: EditorProps) => {
  const { fontSize, bgColor } = useOptions();

  const onChange = useCallback(
    (value: string) => {
      onChangeContent(value);
    },
    [onChangeContent],
  );

  return (
    <Box
      ref={editorRef}
      width="100%"
      maxWidth="1000px"
      className="p-10"
      style={{
        background: bgColor,
      }}
    >
      <CodeMirror
        id="editor"
        value={content}
        onChange={onChange}
        theme="dark"
        extensions={[
          lineNumbers(),
          javascript({ jsx: true }),
          EditorView.lineWrapping,
          customTheme,
        ]}
        style={{
          fontSize,
        }}
        className="shadow-xl shadow-black/40"
      />
    </Box>
  );
};

export { Editor };
