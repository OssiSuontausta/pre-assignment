import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Box, Typography, Grid, Button } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import * as stationService from "../services/stationsService";
import * as tripsService from "../services/tripsService";

const Station = () => {
   
  const [station, setStation] = useState([]);
  const [departingTrips, setDepartingTrips] = useState("");
  const [returningTrips, setReturningTrips] = useState("");
  const params = useParams();

  useEffect(() => {
    const id = params.id;
    stationService
      .getOneStation(id)
      .then(res => setStation(res))
      .catch(err => console.log(err));
  }, [params]);

  useEffect(() => {
    const stationName = station.name;
    tripsService
      .getDepartingTrips(stationName)
      .then(res => setDepartingTrips(res))
      .catch(err => console.log(err));
    tripsService
      .getReturningTrips(stationName)
      .then(res => setReturningTrips(res))
      .catch(err => console.log(err));
  }, [station]);

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
        width: "70%",
        backgroundColor: "#1A4D2E",
        color: "#FF9F29",
        padding: "1%",
        borderRadius: "25px"
      }}>
        <Grid container spacing={3} alignItems={"center"}>
          <Grid item xs={12} lg={6}>
            <Typography variant="h4">
              {station.name}
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography variant="h5">
              {station.address}{station.city ? `, ${station.city}` : null}
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography variant="h6">
                Number of departing trips: {departingTrips}
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography variant="h6">
                Number of returning trips: {returningTrips}
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