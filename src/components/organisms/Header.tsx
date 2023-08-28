import React from 'react';
import { styled } from '@mui/material/styles';
import { Avatar, Typography, Box } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getCookie } from '../../utils/cookieUtils';
import { User } from '../../interfaces/AuthInterfaces';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface HeaderProps {
  onToggleSidebar?: () => void;
  open?: boolean;
  isSidebarOpen?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, isSidebarOpen, open }) => {
  const user = useSelector((state: RootState) => state.auth.user)
  const savedUser: User | null = user || getCookie('authUser') || null;
  return (
    <AppBar position="fixed" color='default'>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={onToggleSidebar}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'flex-end' }}>
          {savedUser && (
            <>
              <Typography variant="body2" sx={{ mr: 2 }}>{savedUser.username}</Typography>
              <Avatar sx={{ bgcolor: "blue", marginRight: 2 }}>
                {savedUser.username.charAt(0).toUpperCase()}
              </Avatar>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
