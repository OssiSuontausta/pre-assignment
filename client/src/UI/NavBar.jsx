import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Grid, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";

const NavBar = () => {

  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <AppBar position="static">
        <Toolbar disableGutters sx={{ml: "5%"}}>
          <Grid 
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={{xs: 1, md: 3}}
            columns={{ xs: 4, sm: 6, md: 12 }}
          >
            <Grid item>
              <DirectionsBikeIcon  color="secondary" />
            </Grid>
            <Grid item sx={{marginRight: "5%"}}>
              <Link component={RouterLink} to="/" color="inherit" underline="none">
                Helsinki city bike app
              </Link>
            </Grid>
            <Grid item>
              <Link component={RouterLink} to="/stations" color="inherit">
                Stations
              </Link>
            </Grid>
            <Grid item>
              <Link component={RouterLink} to="/trips" color="inherit">
                Trips
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;