import React from 'react';
import { Button } from '@mui/material';

interface HeaderProps {
  onToggleSidebar?: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, isSidebarOpen }) => {
  return (
    <header>
      <Button onClick={onToggleSidebar}>
        {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
      </Button>
    </header>
  );
};

export default Header;