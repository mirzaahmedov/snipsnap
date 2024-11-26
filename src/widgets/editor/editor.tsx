import type { RefObject } from "react";

import { useMemo, useEffect, useState, useCallback } from "react";
import { Box } from "@radix-ui/themes";
import CodeMirror, { Extension, lineNumbers } from "@uiw/react-codemirror";
import { EditorView } from "@codemirror/view";
import { MacosFrame } from "@app/components/frames";
import { languages } from "@codemirror/language-data";
import { javascript } from "@codemirror/lang-javascript";
import { colorschemes, useSyntaxParam } from "@app/features";
import { isDataURL } from "@app/utils/base64";
import { useEditorParams } from "@app/shared/hooks/editor-params";

type EditorProps = {
  editorRef: RefObject<HTMLDivElement>;
};
const Editor = ({ editorRef }: EditorProps) => {
  const [syntaxExtension, setSyntaxExtension] =
    useState<Extension>(javascript());

  const [syntax] = useSyntaxParam();
  const { editorParams, setEditorParams } = useEditorParams();

  useEffect(() => {
    languages
      .find((lang) => lang.name === syntax)
      ?.load()
      .then(setSyntaxExtension);
  }, [syntax]);

  const theme = useMemo(() => {
    return colorschemes.find(
      (scheme) => scheme.name === editorParams.colorscheme,
    )?.colorscheme;
  }, [editorParams.colorscheme]);

  const extensions = useMemo(() => {
    return [
      lineNumbers(),
      syntaxExtension,
      EditorView.lineWrapping,
      EditorView.theme({
        "& .cm-scroller": {
          fontSize: `${editorParams.fontSize}px !important`,
          fontFamily: `'${editorParams.fontFamily}', monospace`,
        },
      }),
    ];
  }, [syntaxExtension, editorParams]);

  const handleChange = useCallback(
    (textContent: string) => {
      setEditorParams({ textContent });
    },
    [setEditorParams],
  );

  return (
    <Box
      ref={editorRef}
      width="100%"
      maxWidth="1000px"
      className="p-10"
      style={{
        background: isDataURL(editorParams.background)
          ? `url(${editorParams.background})`
          : editorParams.background,
      }}
    >
      <MacosFrame className="shadow-xl shadow-black/40 font-mono">
        <CodeMirror
          id="editor"
          defaultValue={editorParams.textContent}
          onChange={handleChange}
          theme={theme}
          extensions={extensions}
        />
      </MacosFrame>
    </Box>
  );
};

export { Editor };
