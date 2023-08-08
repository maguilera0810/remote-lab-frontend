// src/pages/LoginPage.tsx
import React from 'react';
import { Box } from '@mui/material';
import AuthForm from '../components/organisms/AuthForm';

const LoginPage: React.FC = () => {

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <AuthForm
        isSignup={false}
        onSuccess={(user) => { console.log(user) }}
        onFailure={() => { console.error("errorrrrr") }}
      />
    </Box>
  );
};

export default LoginPage;
