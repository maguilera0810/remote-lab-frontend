import { DataGrid, GridColDef, GridValueGetterParams, GridCellParams } from '@mui/x-data-grid';

export const SubjectColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 70
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 130
  },
  {
    field: 'school',
    headerName: 'School',
    width: 130
  },
  
];
