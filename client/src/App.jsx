import { CssBaseline, ThemeProvider } from "@mui/material";
import RouterComponent from "../src/components/RouterComponent";
import theme from "./theme";

const App = () => {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterComponent/>
      </ThemeProvider>
    </div>
  );
};

export default App;
