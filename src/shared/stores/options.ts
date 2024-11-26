import { create } from "zustand";

type EditorOptionsType = {
  colorscheme: string;
  syntax: string;
  fontSize: number;
  fontFamily: string;
  background: string;
};
type OptionsActionType = {
  setEditorOptions: (options: Partial<EditorOptionsType>) => void;
};

const useEditorOptions = create<EditorOptionsType & OptionsActionType>()(
  (set) => ({
    colorscheme: "Material Dark",
    syntax: "JSX",
    fontSize: 18,
    fontFamily: "Source Code Pro",
    background: "#fff",
    setEditorOptions: (options: Partial<EditorOptionsType>) => set(options),
  }),
);

export { useEditorOptions };
