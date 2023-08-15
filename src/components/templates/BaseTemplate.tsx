import React, {useState, ReactNode} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../organisms/Header';
import DrawerHeader from '../atoms/DrawerHeader'
import Sidebar from '../organisms/SideBar';
import { menuItems } from '../../data/MenuData';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));


interface BaseTemplateProps {
  children?: ReactNode;
}

const BaseTemplate: React.FC<BaseTemplateProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const onToggleSidebar = () => {
    setOpen(!open);
  }
  const user: any = {
    name: "Mauricio Aguilera",
    avatarUrl: "https://pbs.twimg.com/profile_images/1501685076488118272/i8DlJPnd_400x400.jpg",
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header onToggleSidebar={onToggleSidebar} open={open} />
      <Sidebar user={user} menuItems={menuItems} isOpen={open} onToggleSidebar={onToggleSidebar} />
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}

export default BaseTemplate;