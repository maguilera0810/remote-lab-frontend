// src/App.tsx
import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

import RouterGenerator from './routes/RouterGenerator'
import { getCookie } from './utils/cookieUtils';
import { User } from './interfaces/AuthInterfaces';

const App: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token)
  const user = useSelector((state: RootState) => state.auth.user)
  const savedUser: User | null = user || getCookie('authUser') || null;
  const savedToken = token || getCookie('authToken') || null;;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterGenerator routerType={'general'} token={savedToken} user={savedUser} />
    </LocalizationProvider>
  );
};

export default App;
