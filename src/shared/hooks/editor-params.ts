import {
  useQueryStates,
  parseAsInteger,
  parseAsString,
  createParser,
} from "nuqs";

const parseAsMultiLineText = createParser({
  serialize: (value: string) => encodeURIComponent(value),
  parse: (value: string) => decodeURIComponent(value),
});

const useEditorParams = () => {
  const [editorParams, setEditorParams] = useQueryStates({
    textContent: parseAsMultiLineText
      .withDefault("// Write your code here")
      .withOptions({
        throttleMs: 2000,
      }),
    fontFamily: parseAsString.withDefault("Source Code Pro"),
    fontSize: parseAsInteger.withDefault(18),
    syntax: parseAsString.withDefault("JavaScript"),
    colorscheme: parseAsString.withDefault("Dracula"),
    background: parseAsString.withDefault("#ffffff"),
  });
  return {
    editorParams,
    setEditorParams,
  };
};

export { useEditorParams };
