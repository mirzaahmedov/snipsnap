import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Theme } from "@radix-ui/themes";

import App from "./App";

import "@radix-ui/themes/styles.css";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme
      appearance="dark"
      className="h-full"
    >
      <App />
    </Theme>
  </StrictMode>,
);
