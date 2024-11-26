import { parseAsString, useQueryState } from "nuqs";

const useSyntaxParam = () => {
  return useQueryState("syntax", parseAsString.withDefault("JavaScript"));
};

export { useSyntaxParam };
