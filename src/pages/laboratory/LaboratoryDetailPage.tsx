import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Laboratory } from "../../interfaces/SchoolInterfaces";
import BaseTemplate from '../../components/templates/BaseTemplate';
import LaboratoryForm from '../../components/organisms/forms/LaboratoryForm';
import generateDefaultObject from '../../utils/forms/DefaultDataGenerator';
import { useNavigate } from "react-router-dom";
import laboratoryService from '../../services/LaboratoryService';

// const laboratoryService = new LaboratoryService();

const LaboratoryDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { laboratoryId = "addNew" } = useParams<{ laboratoryId: string }>();
  const [laboratory, setLaboratory] = useState<Laboratory>(generateDefaultObject<Laboratory>({} as Laboratory))

  const initData = async () => {
    if (laboratoryId === 'addNew') return;
    const data = await laboratoryService.getOne(laboratoryId);
    data && setLaboratory(data);
  };

  const handleGoBack = () => {
    navigate('/laboratory/');
  };

  const handleDelete = async (id: number) => {
    const success = await laboratoryService.delete(id);
    success && initData();
  };

  const handleSubmit = async (formData: Laboratory) => {
    let resp: Laboratory | null;
    if (laboratoryId === 'addNew') {
      resp = await laboratoryService.create(formData);
    } else {
      resp = await laboratoryService.update(laboratoryId, formData);
    }
  }

  useEffect(() => {
    initData();
  }, [])

  return <>
    <BaseTemplate>
      <Typography variant='h4'>Laboratory Detail</Typography>
      <LaboratoryForm
        data={laboratory}
        onSubmit={handleSubmit}
        onDelete={laboratoryId === 'addNew' ? undefined : handleDelete}
        onGoBack={handleGoBack}
      />
    </BaseTemplate>
  </>;
};

export default LaboratoryDetailPage;