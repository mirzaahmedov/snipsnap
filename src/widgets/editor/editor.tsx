import type { RefObject } from "react";

import { useCallback, useMemo, useEffect, useState } from "react";
import { Box } from "@radix-ui/themes";
import CodeMirror, { Extension, lineNumbers } from "@uiw/react-codemirror";
import { EditorView } from "@codemirror/view";
import { MacosFrame } from "@app/components/frames";
import { languages } from "@codemirror/language-data";
import { javascript } from "@codemirror/lang-javascript";
import { useEditorOptions } from "@app/shared/stores/options";
import { colorschemes } from "@app/features";
import { isDataURL } from "@app/utils/base64";
import { useEditorParams } from "@app/shared/hooks/editor-params";

type EditorProps = {
  editorRef: RefObject<HTMLDivElement>;
  content: string;
  onChangeContent: (content: string) => void;
};
const Editor = ({ editorRef, content, onChangeContent }: EditorProps) => {
  const [langSupport, setLangSupport] = useState<Extension>(javascript());

  const { editorParams } = useEditorParams();
  const { programmingLanguage, colorscheme, background } = useEditorOptions();

  const onChange = useCallback(
    (value: string) => {
      onChangeContent(value);
    },
    [onChangeContent],
  );

  useEffect(() => {
    languages
      .find((lang) => lang.name === programmingLanguage)
      ?.load()
      .then(setLangSupport);
  }, [programmingLanguage]);

  const theme = useMemo(() => {
    return colorschemes.find((scheme) => scheme.name === colorscheme)
      ?.colorscheme;
  }, [colorscheme]);

  const extensions = useMemo(() => {
    console.log({ editorParams });
    return [
      lineNumbers(),
      langSupport,
      EditorView.lineWrapping,
      EditorView.theme({
        "& .cm-scroller": {
          fontSize: `${editorParams.fontSize}px !important`,
          fontFamily: `'${editorParams.fontFamily}', monospace`,
        },
      }),
    ];
  }, [langSupport, editorParams]);

  console.log({ editorParams });

  return (
    <Box
      ref={editorRef}
      width="100%"
      maxWidth="1000px"
      className="p-10"
      style={{
        background: isDataURL(background) ? `url(${background})` : background,
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
