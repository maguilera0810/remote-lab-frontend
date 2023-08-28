import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid } from '@mui/material';
import BasicTable from '../../components/molecules/BasicTable';
import BaseTemplate from '../../components/templates/BaseTemplate';
import { GridColDef, GridRowParams } from '@mui/x-data-grid';
import ColumnGenerator from '../../utils/columns/ColumnGenerator';
import { useNavigate } from "react-router-dom";
import laboratoryService from '../../services/LaboratoryService';
import { Laboratory } from '../../interfaces/SchoolInterfaces';

const LaboratoryListPage: React.FC = () => {
  const navigate = useNavigate();
  const [laboratories, setLaboratories] = useState<Laboratory[]>([])
  const [columns, setColumns] = useState<GridColDef[]>([]);

  const initData = async () => {
    const data = await laboratoryService.getAll();
    data && setLaboratories([...data]);
  };

  const handleEdit = (id: number) => {
    navigate(`/laboratory/${id}`);
  };

  const handleCreate = () => {
    navigate(`/laboratory/addNew`);
  };

  const handleDelete = async (id: number) => {
    const success = await laboratoryService.delete(id);
    success && initData();
  };

  const handdleRowDoubleClick = (params: GridRowParams) => {
    handleEdit(params.row.id)
  }

  useEffect(() => {
    setColumns(ColumnGenerator({
      columnType: 'laboratory',
      handleEdit: handleEdit,
      handleDelete: handleDelete,
    }));
    initData();
  }, [])

  return <>
    <BaseTemplate>
      <Typography variant='h4'>Laboratory List Page!</Typography>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, marginBottom: '16px' }}>
        <Button variant="contained" color="primary" onClick={handleCreate}>
          Create
        </Button>
      </Grid>
      <BasicTable
        columns={columns}
        rows={laboratories}
        onRowDoubleClick={handdleRowDoubleClick}
      ></BasicTable>
    </BaseTemplate>
  </>;
};

export default LaboratoryListPage;