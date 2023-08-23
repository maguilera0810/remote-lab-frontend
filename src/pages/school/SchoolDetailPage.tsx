import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import BaseTemplate from '../../components/templates/BaseTemplate';
import SchoolForm from '../../components/organisms/forms/SchoolForm';
import { School } from "../../interfaces/SchoolInterfaces";
import generateDefaultObject from '../../utils/forms/DefaultDataGenerator';
import schoolService from '../../services/SchoolService';
import { schools } from '../../data/fixtures/SchoolData';
import { useNavigate } from "react-router-dom";

const SchoolDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { schoolId = "addNew" } = useParams<{ schoolId: string }>();
  const [school, setSchool] = useState<School>(generateDefaultObject<School>({} as School))

  const initData = async () => {
    if (schoolId === 'addNew') return;
    const data = await schoolService.getOne(schoolId);
    data && setSchool(data);
  };

  const handleGoBack = () => {
    navigate('/school/');

  };

  const handleDelete = async (id: number) => {
    const success = await schoolService.delete(id);
    success && initData();
    // TODO mostrar confirmacion ok o error
  };

  const handleSubmit = async (formData: School) => {
    let resp: School | null;
    if (schoolId === 'addNew') {
      resp = await schoolService.create(formData);
    } else {
      resp = await schoolService.update(schoolId, formData);
    }
    // TODO mostrar confirmacion ok o error
  }

  useEffect(() => {
    initData();
  }, [])

  return <>
    <BaseTemplate>
      <Typography variant='h4'>School Detail</Typography>
      <SchoolForm
        data={{ ...schools[0] }}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
        onGoBack={handleGoBack}
      />
    </BaseTemplate>
  </>;
};

export default SchoolDetailPage;