import { DataGrid, GridColDef, GridValueGetterParams, GridCellParams } from '@mui/x-data-grid';

export const SchoolColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    // width: 70
  },
  {
    field: 'name',
    headerName: 'First name',
    // width: 130
  },
];
