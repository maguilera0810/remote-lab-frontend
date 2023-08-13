// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { login, signup } from '../../../services/AuthService';
import { User } from "../../../interfaces/AuthInterfaces";

export interface AuthFormProps {
  title?: string;
  isSignup: boolean;
  onSuccess: (user: User) => void;
  onFailure: () => void;
}


const AuthForm: React.FC<AuthFormProps> = ({ title, isSignup, onSuccess, onFailure }) => {
  const initialFormData: User = {
    id: 0,
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    cellphone: '',
  };
  const [formData, setFormData] = useState<User>(initialFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const authFunc = isSignup ? signup : login;
      const user = await authFunc(formData);
      if (user) {
        onSuccess(user);
      } else {
        onFailure();
      }
    } catch (error) {
      console.error('Error:', error);
      onFailure();
    }
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
            label="Username"
            placeholder='Ingresa tu cedula'
            variant="outlined"
            margin="normal"
            type="text"
            required
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            label="Contraseña"
            variant="outlined"
            margin="normal"
            type="password"
            required
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {isSignup && (
            <>
              <TextField
                fullWidth
                label="Correo electrónico"
                variant="outlined"
                margin="normal"
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />  
              <TextField
                fullWidth
                label="Nombre"
                variant="outlined"
                margin="normal"
                required
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                label="Apellido"
                variant="outlined"
                margin="normal"
                required
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                label="Teléfono"
                variant="outlined"
                margin="normal"
                required
                name="cellphone"
                value={formData.cellphone}
                onChange={handleInputChange}
              />
            </>
          )}
          <Button type="submit" fullWidth variant="contained" color="primary">
            {isSignup ? 'Registrarse' : 'Iniciar sesión'}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AuthForm;
