import React, { useState, useEffect } from 'react';
import { SubjectFormProps } from '../../../interfaces/FormInterfaces'
import { TextField, Button, Grid, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { School, Subject } from "../../../interfaces/SchoolInterfaces";
import SchoolService from '../../../services/SchoolService';
const schoolService = new SchoolService();



const SubjectForm: React.FC<SubjectFormProps> = ({ onSubmit, onDelete, onGoBack, data }) => {

  const [formData, setFormData] = useState<Subject>(data);
  const [schools, setSchools] = useState<School[]>([]);

  const handleFieldChange = (fieldName: keyof Subject, value: any) => {
    console.log(formData);
    setFormData(prevData => ({
      ...prevData,
      [fieldName]: value
    }));
  };

  const getSchools = async () => {
    const fetchedSchools = await schoolService.getAll();
    if (fetchedSchools) {
      setSchools(fetchedSchools);
    }
  }

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
    getSchools();
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
          <FormControl fullWidth>
            <InputLabel id='school-label'>School</InputLabel>
            <Select
              labelId='school-label'
              label="School"
              value={formData.school || ''}
              onChange={(e) => handleFieldChange('school', e.target.value)}
            >
              {schools.map(school => (
                <MenuItem key={school.id} value={school.id}>
                  {school.id} - {school.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Description</InputLabel>
          <FormControl fullWidth>
            <TextareaAutosize
              placeholder='Description'
              minRows={3}
              style={{ resize: 'vertical' }}
              value={formData.description}
              onChange={(e) => handleFieldChange('description', e.target.value)}
            />
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};

export default SubjectForm;
