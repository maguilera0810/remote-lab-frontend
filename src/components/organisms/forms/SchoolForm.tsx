import React, { useState, useEffect } from 'react';
import { SchoolFormProps } from '../../../interfaces/FormInterfaces'
import { TextField, Button, Grid } from '@mui/material';
import { School } from "../../../interfaces/SchoolInterfaces";

const SchoolForm: React.FC<SchoolFormProps> = ({ onSubmit, onDelete, onGoBack, data }) => {

  const [formData, setFormData] = useState<School>(data);

  const handleFieldChange = (fieldName: keyof School, value: any) => {
    setFormData(prevData => ({
      ...prevData,
      [fieldName]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const handleDelete = () => {
    onDelete?.(parseInt(formData["id"].toString()));
  };

  const handleGoBack = () => {
    onGoBack?.();
  };

  useEffect(() => {
  }, [])

  useEffect(() => {
    setFormData(data);
  }, [data])

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          {onGoBack && <Button onClick={handleGoBack} variant="outlined">Listado</Button>}
          {onDelete && <Button onClick={handleDelete} variant="contained" color="secondary">Delete</Button>}
          {onSubmit && <Button type="submit" variant="contained" color="primary">Submit</Button>}
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Name"
            placeholder='Name'
            fullWidth
            value={formData.name || ''}
            onChange={(e) => handleFieldChange('name', e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="University"
            placeholder='University'
            fullWidth
            value={formData.university?.toString() || ''}
            onChange={(e) => handleFieldChange('university', parseInt(e.target.value))}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default SchoolForm;
