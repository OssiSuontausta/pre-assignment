import { CssBaseline, ThemeProvider } from "@mui/material";
import RouterComponent from "../src/components/RouterComponent";
import theme from "./theme";

const App = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterComponent/>
      </ThemeProvider>
    </>
  );
};

export default App;
