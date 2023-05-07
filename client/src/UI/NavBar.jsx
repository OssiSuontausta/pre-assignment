import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";

const NavBar = () => {

  const smallScreen = useMediaQuery("(max-width: 480px)");

  const buttonSize = smallScreen ? "small" : "large";
  const buttonStyles = {
    color: "white"
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar disableGutters sx={{ml: "2%"}}>
          <Grid 
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={{xs: 1, md: 3}}
            columns={{ xs: 6, sm: 10, md: 12 }}
          >
            <Grid item>
              <Link to="/">
                <Button 
                  startIcon={<DirectionsBikeIcon />}
                  size={buttonSize} 
                  sx={{ color: "white", fontWeight: "bold", fontSize: "1.2rem" }} >
                    Helsinki city bike app
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/stations">
                <Button size={buttonSize} sx={buttonStyles}>Stations</Button>
              </Link>
              <Link to="/trips">
                <Button size={buttonSize} sx={buttonStyles}>Trips</Button>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;