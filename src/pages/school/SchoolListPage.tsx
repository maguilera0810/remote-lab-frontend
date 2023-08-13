import React, { useState, useEffect } from 'react';
import BasicTable from '../../components/molecules/BasicTable';
import GenericTemplate from '../../components/templates/GenericTemplate';
import { schools } from '../../data/SchoolData';
import { GridColDef, GridRowParams } from '@mui/x-data-grid';
import ColumnGenerator from '../../utils/columns/Generator';

const SchoolListPage: React.FC = () => {
  const handleEdit = (id: number) => {
    console.log("editar ", id);
    // TODO AGREGAR LOGINA EDITAR
  };

  const handleDelete = (id: number) => {
    console.log("eliminar ", id);
    // TODO AGREGAR LOGINA DELETE
  };

  const handdleRowDoubleClick = (params: GridRowParams) => {
    handleEdit(params.row.id)
  }


  const [columns, setColumns] = useState<GridColDef[]>(ColumnGenerator({
    columnType: 'school',
    handleEdit: handleEdit,
    handleDelete: handleDelete,
  }));

  return <>
    <GenericTemplate>
      <h2>School List Page!</h2>
      <BasicTable
        rows={schools}
        columns={columns}
        onRowDoubleClick={handdleRowDoubleClick}
      ></BasicTable>
    </GenericTemplate>
  </>;
};

export default SchoolListPage;