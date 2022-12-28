import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "./layout/Layout";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Layout>
            <main className="content">hi</main>
          </Layout>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
