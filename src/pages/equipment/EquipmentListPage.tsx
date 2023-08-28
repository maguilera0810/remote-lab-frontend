import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid } from '@mui/material';
import BasicTable from '../../components/molecules/BasicTable';
import BaseTemplate from '../../components/templates/BaseTemplate';
import { GridColDef, GridRowParams } from '@mui/x-data-grid';
import ColumnGenerator from '../../utils/columns/ColumnGenerator';
import { useNavigate } from "react-router-dom";
import equipmentService from '../../services/EquipmentService';
import { Equipment } from '../../interfaces/SchoolInterfaces';

const EquipmentListPage: React.FC = () => {
  const navigate = useNavigate();
  const [equipments, setEquipments] = useState<Equipment[]>([])
  const [columns, setColumns] = useState<GridColDef[]>([]);

  const initData = async () => {
    const data = await equipmentService.getAll();
    data && setEquipments([...data]);
  };

  const handleEdit = (id: number) => {
    navigate(`/equipment/${id}`);
  };

  const handleCreate = () => {
    navigate(`/equipment/addNew`);
  };

  const handleDelete = async (id: number) => {
    const success = await equipmentService.delete(id);
    success && initData();
  };

  const handdleRowDoubleClick = (params: GridRowParams) => {
    handleEdit(params.row.id)
  }

  useEffect(() => {
    setColumns(ColumnGenerator({
      columnType: 'equipment',
      handleEdit: handleEdit,
      handleDelete: handleDelete,
    }));
    initData();
  }, [])

  return <>
    <BaseTemplate>
      <Typography variant='h4'>Equipment List Page!</Typography>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, marginBottom: '16px' }}>
        <Button variant="contained" color="primary" onClick={handleCreate}>
          Create
        </Button>
      </Grid>
      <BasicTable
        columns={columns}
        rows={equipments}
        onRowDoubleClick={handdleRowDoubleClick}
      ></BasicTable>
    </BaseTemplate>
  </>;
};

export default EquipmentListPage;