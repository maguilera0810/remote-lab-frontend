import { SchoolColumns } from "../../data/columns/SchoolColumns";
import { SubjectColumns } from "../../data/columns/SubjectColumns";
import { UserColumns } from "../../data/columns/UserColumns";
import { LaboratoryColumns } from '../../data/columns/LaboratoryColumns'
import { EquipmentColumns } from '../../data/columns/EquipmentColumns'
import { GridColDef, GridCellParams } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ColumnGeneratorProps } from "../../interfaces/GlobalInterfaces";

const ColumnGenerator = ({ columnType, actions = true, handleEdit, handleDelete }: ColumnGeneratorProps): GridColDef[] => {
  const columnsAvailable: { [key: string]: GridColDef[] } = {
    'user': UserColumns,
    'school': SchoolColumns,
    'subject': SubjectColumns,
    'laboratory': LaboratoryColumns,
    'equipment': EquipmentColumns,
  };
  let columns: GridColDef[] = [...columnsAvailable[columnType]];
  if (!actions) { return columns; }
  columns.push({
    field: 'actions',
    headerName: '',
    renderCell: (params: GridCellParams) => (
      <>
        {handleEdit &&
          <Button color="primary"
            onClick={() => handleEdit(params.row.id)}
            style={{ minWidth: 'auto', padding: '6px' }}>
            <EditIcon />
          </Button>}
        {handleDelete &&
          <Button color="error"
            onClick={() => handleDelete(params.row.id)}
            style={{ minWidth: 'auto', padding: '6px' }}>
            <DeleteIcon />
          </Button>}
      </>
    ),
  })
  return columns;
}

export default ColumnGenerator;
