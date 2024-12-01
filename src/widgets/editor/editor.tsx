import type { RefObject } from "react";

import { useMemo, useRef, useState } from "react";
import { Box } from "@radix-ui/themes";
import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "@codemirror/view";
import { languages } from "@codemirror/language-data";
import { colorschemes } from "@app/features";
import { useEditorParams } from "@app/shared/hooks/editor-params";
import { useAsyncMemo } from "@app/shared/hooks/async-memo";
import { useDebounceEffect } from "@app/shared/hooks/debounce-effect";
import { WindowFrame } from "@app/common/components/window-frame";
import { useColorStore } from "@app/shared/store";

type EditorProps = {
  editorRef: RefObject<HTMLDivElement>;
};
const Editor = ({ editorRef }: EditorProps) => {
  const prevEditorBG = useRef<string | null>(null);
  const prevCode = useRef<string | null>(null);

  const { bg: editorBG, setColors } = useColorStore();
  const { params, setParams } = useEditorParams();
  const {
    code,
    lang,
    theme,
    fsize,
    ffamily,
    bg,
    frame,
    lheight,
    lspace,
    rounded,
    shadow,
    width,
    height,
    ph,
    pv,
    numbers,
    wrap,
  } = params;

  const [value, setValue] = useState(code);

  const langExtension = useAsyncMemo(async () => {
    const found = languages.find((option) => option.name === lang);
    if (found) {
      return await found.load();
    }
    return null;
  }, [lang]);
  const themeExtension = useMemo(() => {
    return colorschemes.find((scheme) => scheme.name === theme)?.colorscheme;
  }, [theme]);

  const extensions = useMemo(() => {
    return [
      wrap ? EditorView.lineWrapping : null,
      langExtension,
      themeExtension,
      EditorView.theme({
        "& .cm-scroller": {
          fontSize: `${fsize}px !important`,
          fontFamily: `'${ffamily}', monospace`,
          lineHeight: lheight,
          letterSpacing: `${lspace}px`,
        },
      }),
    ].filter((value) => !!value);
  }, [langExtension, themeExtension, fsize, ffamily, lheight, lspace, wrap]);

  useDebounceEffect(
    () => {
      if (prevCode.current === value) return;
      setParams({ code: value });
      prevCode.current = value;
    },
    1000,
    [setParams, value],
  );

  return (
    <Box
      ref={editorRef}
      style={{
        background: bg,
        paddingTop: pv,
        paddingBottom: pv,
        paddingLeft: ph,
        paddingRight: ph,
      }}
    >
      <WindowFrame
        variant={frame}
        shadow={shadow}
        rounded={rounded}
        background={editorBG}
      >
        <CodeMirror
          id="editor"
          value={value}
          onChange={setValue}
          theme={themeExtension}
          extensions={extensions}
          width={`${width}px`}
          height={`${height}px`}
          basicSetup={{
            lineNumbers: numbers,
          }}
          onUpdate={(view) => {
            const editor = view.view.dom;
            const styles = window.getComputedStyle(editor);
            const bgColor = styles.getPropertyValue("background-color");
            if (prevEditorBG.current === bgColor) return;
            setColors({ bg: bgColor });
            prevEditorBG.current = bgColor;
          }}
        />
      </WindowFrame>
    </Box>
  );
};

export { Editor };
