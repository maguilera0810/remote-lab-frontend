import { GridColDef } from '@mui/x-data-grid';

export const SubjectColumns: GridColDef[] = [
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
  {
    field: 'school',
    headerName: 'School',
    width: 100
  },
];
