import type { RefObject } from "react";

import { useCallback, useMemo, useEffect, useState } from "react";
import { Box } from "@radix-ui/themes";
import CodeMirror, { Extension, lineNumbers } from "@uiw/react-codemirror";
import { EditorView } from "@codemirror/view";
import { useEditorOptions } from "./shared/stores/options";
import { MacosFrame } from "./components/frames";
import { languages } from "@codemirror/language-data";
import { javascript } from "@codemirror/lang-javascript";

type EditorProps = {
  editorRef: RefObject<HTMLDivElement>;
  content: string;
  onChangeContent: (content: string) => void;
};
const Editor = ({ editorRef, content, onChangeContent }: EditorProps) => {
  const [langSupport, setLangSupport] = useState<Extension>(javascript());

  const {
    programmingLanguage: syntax,
    colorscheme: theme,
    fontSize,
    fontFamily,
    bgColor,
  } = useEditorOptions();

  const onChange = useCallback(
    (value: string) => {
      onChangeContent(value);
    },
    [onChangeContent],
  );

  useEffect(() => {
    languages
      .find((lang) => lang.name === syntax)
      ?.load()
      .then(setLangSupport);
  }, [syntax]);

  const extensions = useMemo(
    () => [
      lineNumbers(),
      langSupport,
      EditorView.lineWrapping,
      EditorView.theme({
        "& .cm-scroller": {
          fontSize: `${fontSize}px`,
          fontFamily: `'${fontFamily}', monospace`,
        },
      }),
    ],
    [langSupport, fontSize, fontFamily],
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
      <MacosFrame className="shadow-xl shadow-black/40 font-mono">
        <CodeMirror
          id="editor"
          value={content}
          onChange={onChange}
          theme={theme}
          extensions={extensions}
        />
      </MacosFrame>
    </Box>
  );
};

export { Editor };
