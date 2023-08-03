// src/components/Navigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Iniciar sesión</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
