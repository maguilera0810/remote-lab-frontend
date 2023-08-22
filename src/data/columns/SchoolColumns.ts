import { DataGrid, GridColDef, GridValueGetterParams, GridCellParams } from '@mui/x-data-grid';

export const SchoolColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 30
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 130
  },
];
