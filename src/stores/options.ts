import { create } from "zustand";

type OptionsType = {
  fontSize: number;
  bgColor: string;
};
type OptionsActionType = {
  setOptions: (payload: Partial<OptionsType>) => void;
};

const useOptions = create<OptionsType & OptionsActionType>()((set) => ({
  fontSize: 18,
  bgColor: "#fff",
  setOptions: (options: Partial<OptionsType>) => set(options),
}));

export { useOptions };
