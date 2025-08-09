import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { theme } from "./theme/theme.ts";
import { CssBaseline, CssVarsProvider } from "@mui/joy";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssVarsProvider theme={theme} defaultMode="light">
      <>
        <CssBaseline />
        <App />
      </>
    </CssVarsProvider>
  </StrictMode>
);
