import { useQueryStates, parseAsInteger, parseAsString } from "nuqs";

const useEditorParams = () => {
  const [editorParams, setEditorParams] = useQueryStates({
    fontFamily: parseAsString.withDefault("Source Code Pro"),
    fontSize: parseAsInteger.withDefault(18),
  });
  return {
    editorParams,
    setEditorParams,
  };
};

export { useEditorParams };
