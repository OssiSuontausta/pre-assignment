import { useEffect, useState } from "react";
import * as stationsService from "../services/stationsService";
import { DataGrid } from "@mui/x-data-grid";
import { Grid, Typography } from "@mui/material";
  
const Stations = () => {

  const [stations, setStations] = useState([]);

  const columns = [
    {field: "Station", headerName: "Station", width: 150},
    {field: "Address", headerName: "Address", width: 150},
    {field: "City", headerName: "Address", width: 150}
  ];

  useEffect(() => {
    stationsService
      .getAll()
      .then(res => setStations(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <Grid container>
      <DataGrid 
        columns={columns}
      />
    </Grid>
  );
};

export default Stations;