// src/pages/LoginPage.tsx
import React from 'react';
import { Box } from '@mui/material';
import AuthForm from '../../components/organisms/forms/AuthForm';
import { User } from '../../interfaces/AuthInterfaces'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from '../../redux/slices/authSlice'

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSuccess = (user: User, token: string = "") => {
    localStorage.setItem("token", token)
    localStorage.setItem("username", user.username)
    console.log(token);
    dispatch(loginSuccess({ user, token }));
    navigate('/');
  }

  const onFailure = (error: any) => {
    console.error(error)
    dispatch(loginFailure('Error en el inicio de sesión'));
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <AuthForm
        isSignup={false}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </Box>
  );
};

export default LoginPage;
