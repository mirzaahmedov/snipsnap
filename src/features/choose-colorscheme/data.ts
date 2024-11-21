import type { ColorschemeOption } from "./types";

import { solarizedDark, solarizedLight } from "@uiw/codemirror-theme-solarized";
import { darcula } from "@uiw/codemirror-theme-darcula";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { monokai } from "@uiw/codemirror-theme-monokai";
import { githubDark, githubLight } from "@uiw/codemirror-theme-github";
import { gruvboxDark, gruvboxLight } from "@uiw/codemirror-theme-gruvbox-dark";
import { materialDark, materialLight } from "@uiw/codemirror-theme-material";
import { nord } from "@uiw/codemirror-theme-nord";
import { sublime } from "@uiw/codemirror-theme-sublime";
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode";
import { xcodeDark, xcodeLight } from "@uiw/codemirror-theme-xcode";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import { tokyoNightStorm } from "@uiw/codemirror-theme-tokyo-night-storm";
import { tokyoNightDay } from "@uiw/codemirror-theme-tokyo-night-day";

const colorschemes: ColorschemeOption[] = [
  {
    name: "Solarized Dark",
    colorscheme: solarizedDark,
  },
  {
    name: "Solarized Light",
    colorscheme: solarizedLight,
  },
  {
    name: "Darcula",
    colorscheme: darcula,
  },
  {
    name: "Dracula",
    colorscheme: dracula,
  },
  {
    name: "Monokai",
    colorscheme: monokai,
  },
  {
    name: "Github Dark",
    colorscheme: githubDark,
  },
  {
    name: "Github Light",
    colorscheme: githubLight,
  },
  {
    name: "Gruvbox Dark",
    colorscheme: gruvboxDark,
  },
  {
    name: "Gruvbox Light",
    colorscheme: gruvboxLight,
  },
  {
    name: "Material Dark",
    colorscheme: materialDark,
  },
  {
    name: "Material Light",
    colorscheme: materialLight,
  },
  {
    name: "Nord",
    colorscheme: nord,
  },
  {
    name: "Sublime",
    colorscheme: sublime,
  },
  {
    name: "VSCode Dark",
    colorscheme: vscodeDark,
  },
  {
    name: "VSCode Light",
    colorscheme: vscodeLight,
  },
  {
    name: "Xcode Dark",
    colorscheme: xcodeDark,
  },
  {
    name: "Xcode Light",
    colorscheme: xcodeLight,
  },
  {
    name: "Tokyo Night",
    colorscheme: tokyoNight,
  },
  {
    name: "Tokyo Night Storm",
    colorscheme: tokyoNightStorm,
  },
  {
    name: "Tokyo Night Day",
    colorscheme: tokyoNightDay,
  },
];

export { colorschemes };
