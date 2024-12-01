import { create } from "zustand";

type ColorState = {
  bg: string;
};
type ColorStore = ColorState & {
  setColors: (color: ColorState) => void;
};

const useColorStore = create<ColorStore>((set) => ({
  bg: "transparent",
  setColors(colors) {
    set(colors);
  },
}));

export { useColorStore };
