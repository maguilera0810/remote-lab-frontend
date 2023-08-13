// src/App.tsx
import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


import RouterGenerator from './routes/RouterGenerator'
// https://mui.com/material-ui/react-app-bar/ agregar en vez de header
const App: React.FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterGenerator routerType={'general'} />
    </LocalizationProvider>
  );
};

export default App;
