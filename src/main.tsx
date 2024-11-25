import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/react";
import { Theme } from "@radix-ui/themes";

import App from "./App";

import "@radix-ui/themes/styles.css";
import "./main.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Theme
        appearance="dark"
        className="h-full"
      >
        <NuqsAdapter>
          <App />
        </NuqsAdapter>
      </Theme>
    </QueryClientProvider>
  </StrictMode>,
);
