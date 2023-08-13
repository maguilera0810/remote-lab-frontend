import { DataGrid, GridColDef, GridValueGetterParams, GridCellParams } from '@mui/x-data-grid';

export const UserColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    // width: 70
  },
  {
    field: 'firstName',
    headerName: 'First name',
    // width: 130
  },
];
