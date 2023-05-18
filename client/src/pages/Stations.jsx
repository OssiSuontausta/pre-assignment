import { useEffect, useState } from "react";
import * as stationsService from "../services/stationsService";
import { useNavigate } from "react-router-dom";  
import DataGridComponent from "../UI/DataGridComponent";

const Stations = () => {

  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
    navigate(`/stations/${e.id}`);
  };

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

  return (
    <DataGridComponent
      initialState={{
        sorting: {
          sortModel: [{field: "name", sort: "asc"}]
        }
      }}
      onRowClick={handleRowClick}
      columns={columns}
      rows={stations}
      loading={loading}
      autoPageSize={true}
    />
  );
};

export default Stations;