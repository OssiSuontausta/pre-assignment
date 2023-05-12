import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Box, Typography, Grid, Button } from "@mui/material";
import * as stationService from "../services/stationsService";
import MapIcon from "@mui/icons-material/Map";

const Station = () => {
   
  const [station, setStation] = useState([]);
  const params = useParams();

  useEffect(() => {
    const id = params.id;
    stationService
      .getOneStation(id)
      .then(res => setStation(res))
      .catch(err => console.log(err));
  }, [params]);

  return (
    <Box sx={{
      flexGrow: 1, 
      height: "80vh", 
      width: "100vw", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center"
    }}>
      <Card sx={{
        height: "75%",
        maxWidth: "70%",
        minWidth: "50%",
        backgroundColor: "#1A4D2E",
        color: "#FF9F29",
        padding: "1%",
        borderRadius: "25px"
      }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3">
              {station.name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">
              {station.address}{station.city ? `, ${station.city}` : null}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button 
              onClick={() => 
                window.open(`http://www.google.com/maps/place/${station.y},${station.x}`)}
              color="secondary"
              variant="outlined" 
              startIcon={<MapIcon/>} 
            >
                Find on map
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default Station;