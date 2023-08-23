import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid } from '@mui/material';
import BasicTable from '../../components/molecules/BasicTable';
import BaseTemplate from '../../components/templates/BaseTemplate';
import { GridColDef, GridRowParams } from '@mui/x-data-grid';
import ColumnGenerator from '../../utils/columns/ColumnGenerator';
import { useNavigate } from "react-router-dom";
import subjectService from '../../services/SubjectService';
import { Subject } from '../../interfaces/SchoolInterfaces';

const SubjectListPage: React.FC = () => {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [columns, setColumns] = useState<GridColDef[]>([]);

  const initData = async () => {
    const data = await subjectService.getAll();
    data && setSubjects([...data]);
  };

  const handleEdit = (id: number) => {
    navigate(`/subject/${id}`);
  };

  const handleCreate = () => {
    navigate(`/subject/addNew`);
  };

  const handleDelete = async (id: number) => {
    const success = await subjectService.delete(id);
    success && initData();
  };

  const handdleRowDoubleClick = (params: GridRowParams) => {
    handleEdit(params.row.id)
  }

  useEffect(() => {
    setColumns(ColumnGenerator({
      columnType: 'subject',
      handleEdit: handleEdit,
      handleDelete: handleDelete,
    }));
    initData();
  }, [])

  return <>
    <BaseTemplate>
      <Typography variant='h4'>Subject List Page!</Typography>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, marginBottom: '16px' }}>
        <Button variant="contained" color="primary" onClick={handleCreate}>
          Create
        </Button>
      </Grid>
      <BasicTable
        columns={columns}
        rows={subjects}
        onRowDoubleClick={handdleRowDoubleClick}
      ></BasicTable>
    </BaseTemplate>
  </>;
};

export default SubjectListPage;