import {
  useQueryStates,
  parseAsInteger,
  parseAsString,
  parseAsBoolean,
  createParser,
  parseAsStringEnum,
} from "nuqs";

const parseAsMultilineString = createParser({
  serialize: (value: string) => {
    return encodeURIComponent(value);
  },
  parse: (value: string) => {
    try {
      return decodeURIComponent(value);
    } catch {
      return null;
    }
  },
});

const useEditorParams = () => {
  const [params, setParams] = useQueryStates({
    code: parseAsMultilineString.withDefault(
      `// Write your code here \t\t\t\t`,
    ),
    width: parseAsInteger,
    height: parseAsInteger,
    ph: parseAsInteger.withDefault(100),
    pv: parseAsInteger.withDefault(100),
    ffamily: parseAsString.withDefault("Source Code Pro"),
    fsize: parseAsInteger.withDefault(18),
    bg: parseAsString.withDefault("#ffffff"),
    lheight: parseAsInteger.withDefault(1.5),
    lspace: parseAsInteger.withDefault(1),
    theme: parseAsString.withDefault("Material Dark"),
    lang: parseAsString.withDefault("JSX"),
    numbers: parseAsBoolean.withDefault(true),
    wrap: parseAsBoolean.withDefault(true),
    rounded: parseAsBoolean.withDefault(true),
    shadow: parseAsBoolean.withDefault(true),
    frame: parseAsStringEnum(["default", "macos", "windows"]).withDefault(
      "default",
    ),
  });
  return {
    params,
    setParams,
  };
};

export { useEditorParams };
