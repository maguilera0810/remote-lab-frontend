// src/App.tsx
import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

import RouterGenerator from './routes/RouterGenerator'


const App: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token)
  const user = useSelector((state: RootState) => state.auth.user)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterGenerator routerType={'general'} token={token} user={user} />
    </LocalizationProvider>
  );
};

export default App;
