import { GridColDef } from '@mui/x-data-grid';

export const EquipmentColumns: GridColDef[] = [
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
    field: 'description',
    headerName: 'Description',
    width: 300
  },
];
