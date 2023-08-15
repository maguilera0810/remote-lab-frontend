import React from 'react';
// import AppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
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
  return (
    <Box sx={{ flexGrow: 1 }}>
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
          {/* <Button onClick={onToggleSidebar}>
            {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;



// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// // import Typography from '@mui/material/Typography';
// // import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// interface HeaderProps {
//   onToggleSidebar?: () => void;
//   isSidebarOpen: boolean;
// }

// const Header: React.FC<HeaderProps> = ({ onToggleSidebar, isSidebarOpen }) => {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="fixed" color='default' >
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//             onClick={onToggleSidebar}
//           >
//             <MenuIcon />
//           </IconButton>
//           {/* <Button onClick={onToggleSidebar}>
//             {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
//           </Button> */}
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// };

// export default Header;