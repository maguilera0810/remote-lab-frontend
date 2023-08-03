// src/pages/LoginPage.tsx
import React from 'react';
import { Box, TextField, Button } from '@mui/material';

const AuthForm: React.FC = () => {
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
      <form onSubmit={handleSubmit}>
        <Box p={2} maxWidth={400}>
          <TextField
            fullWidth
            label="Correo electrónico"
            variant="outlined"
            margin="normal"
            type="email"
            required
          />
          <TextField
            fullWidth
            label="Contraseña"
            variant="outlined"
            margin="normal"
            type="password"
            required
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Iniciar sesión
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AuthForm;
