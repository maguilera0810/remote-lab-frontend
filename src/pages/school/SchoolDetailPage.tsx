import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BaseTemplate from '../../components/templates/BaseTemplate';
import GenericForm from '../../components/organisms/forms/GenericFrom';
import { School } from "../../interfaces/SchoolInterfaces";
import { FormData } from '../../interfaces/GlobalInterfaces'
import { SchoolFields } from '../../utils/forms/fields';
import generateDefaultObject from '../../utils/forms/DefaultDataGenerator';

import { schools } from '../../data/SchoolData';


const SchoolDetailPage: React.FC = () => {
  const { schoolId } = useParams<{ schoolId: string }>();
  const [school, setSchool] = useState<School>(generateDefaultObject<School>({} as School))
  const [columns, setColumns] = useState<School>()

  const handleGoBack = () => {
    console.log("regresar ");
  };

  const handleDelete = (id: number) => {
    console.log("eliminar ", id);
  };

  const handleSubmit = (formData: FormData) => {
    // const school: School = {...formData} // aqui me quede
    console.log(school);

  }

  useEffect(() => {
  }, [])

  return <>
    <BaseTemplate>
      <h2>School Detail</h2>
      <p>School ID: {schoolId}</p>
      <GenericForm
        fields={SchoolFields}
        data={{ ...schools[0] }}
        onSubmit={handleSubmit} 
        onDelete={handleDelete}
        onGoBack={handleGoBack}
        />
    </BaseTemplate>
  </>;
};

export default SchoolDetailPage;