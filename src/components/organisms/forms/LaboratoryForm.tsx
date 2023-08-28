import React, { useState, useEffect } from 'react';
import { LaboratoryFormProps } from '../../../interfaces/FormInterfaces'
import { TextField, Button, Grid, MenuItem, FormControl, InputLabel } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { Subject, Laboratory } from "../../../interfaces/SchoolInterfaces";
import subjectService from '../../../services/SubjectService';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';

const ITEM_HEIGHT = 48 as const;
const ITEM_PADDING_TOP = 8 as const;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const LaboratoryForm: React.FC<LaboratoryFormProps> = ({ onSubmit, onDelete, onGoBack, data }) => {

  const [formData, setFormData] = useState<Laboratory>(data);
  const [subjectsInput, setSubjectsInput] = useState<number[]>([]);
  const [subjectsSelected, setSubjectsSelected] = useState<Subject[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);

  const handleFieldChange = (fieldName: keyof Laboratory, value: any) => {
    setFormData(prevData => ({
      ...prevData,
      [fieldName]: value
    }));
  };

  const handleSubjectChange = (event: SelectChangeEvent<typeof subjectsInput>) => {
    const { target: { value }, } = event;
    if (typeof value === 'string') return;
    const subjectsFiltered = subjects.filter(s => value.includes(s.id))
    setSubjectsInput(value);
    handleFieldChange('subjects', value)
    setSubjectsSelected(subjectsFiltered);
  };
  const renderSelectedSubjects = (selected: typeof subjectsInput) =>
    subjectsSelected.filter(e => selected.includes(e.id)).map(e => e.name).join(', ');

  const getSubjects = async () => {
    const fetchedSubjects = await subjectService.getAll();
    fetchedSubjects && setSubjects(fetchedSubjects);
  }

  const initData = (laboratory: Laboratory) => {
    setFormData(laboratory);
    const filteredSubjects = subjects.filter(s => laboratory.subjects.includes(s.id));
    setSubjectsSelected(filteredSubjects);
    setSubjectsInput(filteredSubjects.map(e => e.id));
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
    getSubjects();
  }, [])

  useEffect(() => {    
    initData(data)
  }, [data]);

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
            <InputLabel id='subject-label' style={{ backgroundColor: "white", paddingInline: 8 }}>Subject</InputLabel>
            <Select
              labelId='subject-label'
              placeholder="School"
              multiple
              value={subjectsInput}
              onChange={handleSubjectChange}
              renderValue={renderSelectedSubjects}
              MenuProps={MenuProps}
            >
              {subjects.map(subject => (
                <MenuItem key={subject.id} value={subject.id}>
                  <Checkbox checked={subjectsSelected.some(s => s.id === subject.id)} />
                  <ListItemText primary={`${subject.id} - ${subject.name}`} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Description</InputLabel>
          <FormControl fullWidth>
            {/* placeholder='Description 2 ' */}
            <TextareaAutosize
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

export default LaboratoryForm;
