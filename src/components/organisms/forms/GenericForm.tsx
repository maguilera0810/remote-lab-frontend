import React, { useState, useEffect } from 'react';
import { FormData, FieldConfig, GenericFormProps } from '../../../interfaces/GlobalInterfaces'
import { TextField, Button, Grid, Select, MenuItem, TextareaAutosize } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { SelectChangeEvent } from '@mui/material/Select';

const GenericForm: React.FC<GenericFormProps> = ({ fields, onSubmit, onDelete, onGoBack, data}) => {

  const [incommingData, setIncommingData] = useState(data);
  const [formData, setFormData] = useState<FormData>({...incommingData});

  const handleChange = (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { name, value } = e.target as HTMLInputElement;
    if (name) {
      setFormData((prevData: FormData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    if (name) {
      setFormData((prevData: FormData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleDateChange = (name: string, value: Date) => {
    setFormData((prevData: FormData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit && onSubmit(formData);
  };

  const handleDelete = () => {
    onDelete && onDelete(parseInt(formData["id"].toString()));
  };
  const handleGoBack = () => {
    onGoBack && onGoBack();
  };
  useEffect(()=>{
    console.log(data);
    console.log(incommingData);
    setFormData({...incommingData})
    
  }, [incommingData])

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          {onGoBack && <Button onClick={handleGoBack} variant="outlined">Listado</Button>}
          {onDelete && <Button onClick={handleDelete} variant="contained" color="secondary">Delete</Button>}
          {onSubmit && <Button type="submit" variant="contained" color="primary">Submit</Button>}
        </Grid>

        {fields.map((field) => (
          <Grid item
            xs={3}
            key={field.key}
            {...field.cssProps}>
            {field.type === 'select' ? (
              <Select
                name={field.key}
                label={field.label}
                value={formData[field.key] ? formData[field.key].toString() : ''}
                onChange={handleSelectChange}
                fullWidth
              >
                {field.options?.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            ) : field.type === 'textarea' ? (
              <TextareaAutosize
                name={field.key}
                aria-label={field.label}
                value={formData[field.key] ? formData[field.key].toString() : ''}
                onChange={handleChange}
                minRows={3}
              />
            ) : field.type === 'date' ? (
              // name={field.key}
              <DatePicker
                label={field.label}
                value={formData[field.key] ? new Date(formData[field.key] as string) : null}
                onChange={(date: Date | null) => handleDateChange(field.key, date as Date)}
              // renderInput={(params: any) => <TextField {...params} />}
              />
            ) : (
              <TextField
                name={field.key}
                label={field.label}
                fullWidth
                value={formData[field.key] || ''}
                onChange={handleChange}
                type={field.type}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </form>
  );
};

export default GenericForm;
