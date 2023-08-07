// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import Navigation from './components/organisms/Navigation';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* Aquí puedes agregar más rutas para otras páginas */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
