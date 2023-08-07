// src/pages/LoginPage.tsx
import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import AuthForm from '../components/organisms/AuthForm';

const SignupPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para manejar el inicio de sesión
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <AuthForm 
        isSignup={true}
        onSuccess={(user) => {console.log(user)}}
        onFailure={() => {console.error("errorrrrr")}}
      />
    </Box>
  );
};

export default SignupPage;
