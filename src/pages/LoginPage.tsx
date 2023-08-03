// src/pages/LoginPage.tsx
import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import AuthForm from '../components/organisms/AuthForm';

const LoginPage: React.FC = () => {
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
      <AuthForm />
    </Box>
  );
};

export default LoginPage;
