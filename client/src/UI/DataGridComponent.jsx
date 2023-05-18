import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const DataGridComponent = ({
  columns, 
  rows, 
  onRowClick, 
  loading, 
  initialState, 
  paginationMode, 
  autoPageSize,
  onPageChange,
  rowCount,
  onPaginationModelChange
}) => {

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
        paginationMode={paginationMode ? paginationMode : "client"}
        initialState={initialState}
        onRowClick={onRowClick ? onRowClick : null}
        getRowId={(row) => row._id}
        columns={columns}
        rows={rows}
        loading={loading}
        autoPageSize={autoPageSize}
        onPageChange={onPageChange ? onPageChange : null}
        rowCount={rowCount ? rowCount : null}
        pageSizeOptions={[10]}
        disableColumnMenu
        onPaginationModelChange={onPaginationModelChange ? onPaginationModelChange : null}
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

export default DataGridComponent;