import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Subject } from "../../interfaces/SchoolInterfaces";
import BaseTemplate from '../../components/templates/BaseTemplate';
import SubjectForm from '../../components/organisms/forms/SubjectForm';
import generateDefaultObject from '../../utils/forms/DefaultDataGenerator';
import { useNavigate } from "react-router-dom";
import SubjectService from '../../services/SubjectService';

const subjectService = new SubjectService();

const SubjectDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { subjectId = "addNew" } = useParams<{ subjectId: string }>();
  const [subject, setSubject] = useState<Subject>(generateDefaultObject<Subject>({} as Subject))

  const initData = async () => {
    if (subjectId === 'addNew') return;
    const data = await subjectService.getOne(subjectId);
    data && setSubject(data);
  };

  const handleGoBack = () => {
    navigate('/subject/');
  };

  const handleDelete = async (id: number) => {
    const success = await subjectService.delete(id);
    success && initData();
  };

  const handleSubmit = async (formData: Subject) => {
    let resp: Subject | null;
    if (subjectId === 'addNew') {
      resp = await subjectService.create(formData);
    } else {
      resp = await subjectService.update(subjectId, formData);
    }
  }

  useEffect(() => {
    initData();
  }, [])

  return <>
    <BaseTemplate>
      <Typography variant='h4'>Subject Detail</Typography>
      <SubjectForm
        data={subject}
        onSubmit={handleSubmit}
        onDelete={subjectId === 'addNew' ? undefined : handleDelete}
        onGoBack={handleGoBack}
      />
    </BaseTemplate>
  </>;
};

export default SubjectDetailPage;