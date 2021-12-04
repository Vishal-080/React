import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "Size",
    headerName: "Size",
    type: "number",
    width: 90
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`
  }
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", Size: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", Size: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", Size: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", Size: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", Size: 2 },
  { id: 6, lastName: "Melisandre", firstName: null, Size: 15 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", Size: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", Size: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", Size: 65 }
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pSizeSize={5}
        rowsPerPSizeOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
