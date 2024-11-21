import { create } from "zustand";

type EditorOptionsType = {
  colorscheme: string;
  programmingLanguage: string;
  fontSize: number;
  fontFamily: string;
  background: string;
};
type OptionsActionType = {
  setEditorOptions: (options: Partial<EditorOptionsType>) => void;
};

const useEditorOptions = create<EditorOptionsType & OptionsActionType>()(
  (set) => ({
    colorscheme: "Solarized Dark",
    programmingLanguage: "JavaScript",
    fontSize: 18,
    fontFamily: "Source Code Pro",
    background: "#fff",
    setEditorOptions: (options: Partial<EditorOptionsType>) => set(options),
  }),
);

export { useEditorOptions };
