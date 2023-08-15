import React, { useState } from 'react';
import { FormData, FieldConfig, GenericFormProps } from '../../../interfaces/GlobalInterfaces'
import { TextField, Button, Grid, Select, MenuItem, TextareaAutosize } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { SelectChangeEvent } from '@mui/material/Select';

const GenericForm: React.FC<GenericFormProps> = ({ fields, onSubmit, data }) => {
  const [formData, setFormData] = useState<FormData>(data);

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
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {fields.map((field) => (
          <Grid item xs={6} key={field.key}>
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
        <Grid item xs={6}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default GenericForm;