import React, { useState, useEffect } from 'react';
import BasicTable from '../../components/molecules/BasicTable';
import BaseTemplate from '../../components/templates/BaseTemplate';
import { schools } from '../../data/SchoolData';
import { GridColDef, GridRowParams } from '@mui/x-data-grid';
import ColumnGenerator from '../../utils/columns/ColumnGenerator';
import { useNavigate } from "react-router-dom";

const SchoolListPage: React.FC = () => {
  const navigate = useNavigate();
  const handleEdit = (id: number) => {
    navigate(`/school/${id}`);
  };

  const handleDelete = (id: number) => {
    console.log("eliminar ", id);
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