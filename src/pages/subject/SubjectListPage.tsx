import React, { useState, useEffect } from 'react';
import BasicTable from '../../components/molecules/BasicTable';
import BaseTemplate from '../../components/templates/BaseTemplate';
import { GridColDef, GridRowParams } from '@mui/x-data-grid';
import ColumnGenerator from '../../utils/columns/ColumnGenerator';
import { useNavigate } from "react-router-dom";
import subjects from '../../data/fixtures/SubjectData';

const SubjectListPage: React.FC = () => {
  const navigate = useNavigate();
  const handleEdit = (id: number) => {
    navigate(`/subject/${id}`);
  };

  const handleDelete = (id: number) => {
    console.log("eliminar ", id);
  };

  const handdleRowDoubleClick = (params: GridRowParams) => {
    handleEdit(params.row.id)
  }


  const [columns, setColumns] = useState<GridColDef[]>(ColumnGenerator({
    columnType: 'subject',
    handleEdit: handleEdit,
    handleDelete: handleDelete,
  }));

  return <>
    <BaseTemplate>
      <h2>Subject List Page!</h2>
      <BasicTable
        rows={subjects}
        columns={columns}
        onRowDoubleClick={handdleRowDoubleClick}
      ></BasicTable>
    </BaseTemplate>
  </>;
};

export default SubjectListPage;