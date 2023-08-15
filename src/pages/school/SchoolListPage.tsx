import React, { useState, useEffect } from 'react';
import BasicTable from '../../components/molecules/BasicTable';
import BaseTemplate from '../../components/templates/BaseTemplate';
import { schools } from '../../data/SchoolData';
import { GridColDef, GridRowParams } from '@mui/x-data-grid';
import ColumnGenerator from '../../utils/columns/ColumnGenerator';

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
    <BaseTemplate>
      <h2>School List Page!</h2>
      <BasicTable
        rows={schools}
        columns={columns}
        onRowDoubleClick={handdleRowDoubleClick}
      ></BasicTable>
    </BaseTemplate>
  </>;
};

export default SchoolListPage;