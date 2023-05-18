import { useEffect, useState } from "react";
import * as tripsService from "../services/tripsService";
import DataGridComponent from "../UI/DataGridComponent";

const Trips = () => {

  const [pageState, setPageState] = useState({
    loading: true,
    rows: [],
    totalRows: 0,
    page: 0
  });
  const [paginationModel, setPaginationModel] = useState({page: 0, pageSize: 10});

  useEffect(() => {
    setPageState(prev => ({...prev, loading: true}));
    tripsService
      .getAll(pageState.page)
      .then(res => {
        setPageState(prev => ({
          ...prev, 
          loading: false, 
          rows: res[0], 
          totalRows: res[1], 
          page: paginationModel.page
        }));
      })
      .catch(err => console.log(err));
  }, [pageState.page, paginationModel.page, pageState.totalRows]);

  const columns = [
    {
      field: "departureStationName",
      headerName: "Departure", 
      headerClassName: "grid-header", 
      minWidth: 150, 
      flex: 1
    },
    {
      field: "returnStationName",
      headerName: "Return", 
      headerClassName: "grid-header", 
      minWidth: 150, 
      flex: 1
    },
    {
      field: "coveredDistanceM",
      headerName: "Distance (m)", 
      headerClassName: "grid-header", 
      minWidth: 150, 
      flex: 0.3
    },
    {
      field: "durationSec",
      headerName: "Duration (sec)", 
      headerClassName: "grid-header", 
      minWidth: 150, 
      flex: 0.3
    }
  ];

  return (
    <DataGridComponent 
      initialState={{
        pagination: {
          paginationModel
        }
      }}
      paginationMode={"server"}
      columns={columns}
      rows={pageState.rows}
      rowCount={pageState.totalRows}
      pageSizeOptions={[10]}
      page={pageState.page}
      loading={pageState.loading}
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
    />
  );
};

export default Trips;