// src/pages/LoginPage.tsx
import React from 'react';
import { Box } from '@mui/material';
import AuthForm from '../../components/organisms/forms/AuthForm';

const SignupPage: React.FC = () => {

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <AuthForm
        isSignup={true}
        onSuccess={(user) => { console.log(user) }}
        onFailure={() => { console.error("errorrrrr") }}
      />
    </Box>
  );
};

export default SignupPage;
