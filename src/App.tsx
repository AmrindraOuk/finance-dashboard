import { useMemo } from "react";
import { themeSettings } from "./theme";
import { ThemeProvider } from "../node_modules/@emotion/react/types/theming";
import { CssBaseline } from "../node_modules/@mui/material/index";
import { createTheme } from "@mui/material/styles";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <h3>Hello</h3>
      </ThemeProvider>--
    </div>
  );
}

export default App;
