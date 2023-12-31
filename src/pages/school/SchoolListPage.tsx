import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid } from '@mui/material';
import BasicTable from '../../components/molecules/BasicTable';
import BaseTemplate from '../../components/templates/BaseTemplate';
import { GridColDef, GridRowParams } from '@mui/x-data-grid';
import ColumnGenerator from '../../utils/columns/ColumnGenerator';
import { useNavigate } from "react-router-dom";
import schoolService from '../../services/SchoolService';
import { School } from '../../interfaces/SchoolInterfaces';



const SchoolListPage: React.FC = () => {
  const navigate = useNavigate();
  const [schools, setSchools] = useState<School[]>([])
  const [columns, setColumns] = useState<GridColDef[]>([]);

  const initData = async () => {
    const data = await schoolService.getAll();
    data && setSchools([...data]);
  };

  const handleEdit = (id: number) => {
    navigate(`/school/${id}`);
  };

  const handleCreate = () => {
    navigate(`/subject/addNew`);
  };

  const handleDelete = async (id: number) => {
    const success = await schoolService.delete(id);
    success && initData();
  };

  const handdleRowDoubleClick = (params: GridRowParams) => {
    handleEdit(params.row.id)
  }

  useEffect(() => {
    setColumns(ColumnGenerator({
      columnType: 'school',
      handleEdit: handleEdit,
      handleDelete: handleDelete,
    }));
    initData();
  }, [])

  return <>
    <BaseTemplate>
      <Typography variant='h4'>School List Page!</Typography>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, marginBottom: '16px' }}>
        <Button variant="contained" color="primary" onClick={handleCreate}>
          Create
        </Button>
      </Grid>
      <BasicTable
        rows={schools}
        columns={columns}
        onRowDoubleClick={handdleRowDoubleClick}
      ></BasicTable>
    </BaseTemplate>
  </>;
};

export default SchoolListPage;