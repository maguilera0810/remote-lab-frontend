import React from 'react';
import DataTable from '../components/organisms/tables/DataTable';
import GenericTemplate from '../components/templates/GenericTemplate';

const Home: React.FC = () => {
  return <>
    <GenericTemplate>
      <h2>Home Page!</h2>
      <DataTable></DataTable>
    </GenericTemplate>
  </>;
};

export default Home;