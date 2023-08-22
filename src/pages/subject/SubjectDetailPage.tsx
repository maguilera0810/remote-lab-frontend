import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Subject } from "../../interfaces/SchoolInterfaces";
import BaseTemplate from '../../components/templates/BaseTemplate';
import SubjectForm from '../../components/organisms/forms/SubjectForm';
import generateDefaultObject from '../../utils/forms/DefaultDataGenerator';
import SubjectService from '../../services/SubjectService';

const subjectService = new SubjectService();

const SubjectDetailPage: React.FC = () => {
  const { subjectId = "addNew" } = useParams<{ subjectId: string }>();
  const [subject, setSubject] = useState<Subject>(generateDefaultObject<Subject>({} as Subject))

  const initData = async () => {
    console.log(subjectId);
    if (subjectId === 'addNew') {
      return;
    };
    const data = await subjectService.getSubject(subjectId);
    if (data) {
      setSubject(data);
    }
  };

  const handleGoBack = () => {
    console.log("regresar ");
  };

  const handleDelete = (id: number) => {
    console.log("eliminar ", id);
  };

  const handleSubmit = (formData: Subject) => {
    console.log(formData);
  }

  useEffect(() => {
    initData();
  }, [])

  return <>
    <BaseTemplate>
      <h2>Subject Detail</h2>
      <SubjectForm
        data={subject}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
        onGoBack={handleGoBack}
      />
    </BaseTemplate>
  </>;
};

export default SubjectDetailPage;