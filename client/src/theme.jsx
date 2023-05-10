import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1A4D2E"
    },
    secondary: {
      main: "#FF9F29"
    },
    background: {
      default: "#FAF3E3"
    },
    text: {
      primary: "#000000",
      secondary: "#FF9F29"
    },
    contrastThreshold: 4.5
  }
});

export default theme;