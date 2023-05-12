import { useEffect, useState } from "react";
import * as stationsService from "../services/stationsService";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";  

const Stations = () => {

  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const columns = [
    {
      field: "name", 
      headerName: "Station", 
      headerClassName: "grid-header", 
      minWidth: 150, 
      flex: 1
    },
    {
      field: "address", 
      headerName: "Address", 
      headerClassName:"grid-header",
      minWidth: 150, 
      flex: 0.8
    },
    
    {field: "city", 
      headerName: "City", 
      headerClassName: "grid-header",
      minWidth: 50, 
      flex: 0.5
    }
  ];

  useEffect(() => {
    stationsService
      .getAll()
      .catch(err => console.log(err))
      .then(res => {
        setStations(res);
        setLoading(false);
      });
  }, []);

  const handleRowClick = (e) => {
    console.log(e.id);
    navigate(`/stations/${e.id}`);
  };

  return (
    <Box 
      sx={{
        display: "flex", 
        height: "75vh",
        width: "80vw",
        margin: "2% 10% 0 10%",
        alignItems: "center", 
        justifyContent: "center"
      }}>
      <DataGrid 
        initialState={{
          sorting: {
            sortModel: [{ field: "name", sort: "asc" }],
          },
        }}
        onRowClick={handleRowClick}
        getRowId={(row) => row._id}
        columns={columns}
        rows={stations}
        loading={loading}
        autoPageSize
        disableColumnMenu
        sx={{
          alignSelf: "center", 
          width: "inherit", 
          height: "100%",
          border: 2,
          borderRadius: 2,
          borderColor: "primary.main",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.light",
            cursor: "pointer"
          },
          "& .grid-header": {
            backgroundColor: "#1A4D2E",
            color: "#FF8F28"
          },
          "& .MuiDataGrid-columnHeaderTitleContainer:hover": {
            color: "white"
          }
        }}
      />
    </Box>
  );
};

export default Stations;