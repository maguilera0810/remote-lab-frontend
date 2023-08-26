import React, { useState } from 'react';
import { Drawer, List, Avatar, Typography, Collapse, Button, Divider } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { MenuItemProps, SidebarProps } from '../../interfaces/NavigationIntefaces';
import MenuItem from '../atoms/MenuItem';
import DrawerHeader from '../atoms/DrawerHeader'
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { removeAllCookies, removeCookie } from '../../utils/cookieUtils';
import { useNavigate } from "react-router-dom";

const TAB_ITEM = 15 as const

const DrawerPaper = styled('div')({
  width: 240,
});
// paddingTop: 64,

const StyledAvatar = styled(Avatar)({
  width: 64,
  height: 64,
  margin: '0 auto',
  marginBottom: 16,
});

const UserName = styled(Typography)({
  textAlign: 'center',
  marginBottom: 16,
});

const Sidebar: React.FC<SidebarProps> = ({ user, menuItems, onToggleSidebar, isOpen, sidebarWidth = 240 }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const [openSubMenuIndices, setOpenSubMenuIndices] = useState<number[]>([]);
  const [openSubSubMenuIndices, setOpenSubSubMenuIndices] = useState<number[]>([]);

  const Logout = () => {
    dispatch(logout());
    removeAllCookies();
    navigate('/login');
  }


  const handleSubMenuClick = (index: number) => {
    setOpenSubMenuIndices(prevIndices => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter(i => i !== index);
      } else {
        return [...prevIndices, index];
      }
    });
  };

  const handleSubSubMenuClick = (index: number) => {
    setOpenSubSubMenuIndices(prevIndices => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter(i => i !== index);
      } else {
        return [...prevIndices, index];
      }
    });
  };

  const isSubMenuOpen = (index: number) => openSubMenuIndices.includes(index);
  const isSubSubMenuOpen = (index: number) => openSubSubMenuIndices.includes(index);


  const renderSubMenuItems = (subMenu: MenuItemProps[] | undefined, parentIndex: number) => {
    if (!subMenu) return null;
    return (
      <Collapse in={isSubMenuOpen(parentIndex)} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subMenu.map((subMenuItem, subIndex) => (
            <div key={subIndex}>
              <MenuItem label={subMenuItem.label}
                onClick={() => handleSubSubMenuClick(subIndex)}
                icon={subMenuItem.icon}
                link={subMenuItem.link}
                subMenu={subMenuItem.subMenu}
                isOpen={isSubSubMenuOpen(subIndex)}
                cssProps={{ paddingLeft: TAB_ITEM * 2 }}
              />
              {renderSubSubMenuItems(subMenuItem.subMenu, subIndex)}
            </div>
          ))}
        </List>
      </Collapse>
    );
  };

  const renderSubSubMenuItems = (subSubMenu: MenuItemProps[] | undefined, parentIndex: number) => {
    if (!subSubMenu) return null;
    return (
      <Collapse in={isSubSubMenuOpen(parentIndex)} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subSubMenu.map((subSubMenuItem, subSubIndex) => (
            <MenuItem
              key={subSubIndex}
              label={subSubMenuItem.label}
              icon={subSubMenuItem.icon}
              link={subSubMenuItem.link}
              subMenu={subSubMenuItem.subMenu}
              isOpen={isSubMenuOpen(subSubIndex)}
              cssProps={{ paddingLeft: TAB_ITEM }}
            />
          ))}
        </List>
      </Collapse>
    );
  };

  return (
    <Drawer
      sx={{
        width: sidebarWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: sidebarWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor='left'
      open={isOpen}
    >
      <DrawerHeader>
        <IconButton onClick={onToggleSidebar}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <DrawerPaper>
        {/* <StyledAvatar alt={user.name} src={user.avatarUrl} />
        <UserName variant="h6">{user.name}</UserName> */}
        <List>
          {menuItems.map((menuItem: MenuItemProps, index: number) => (
            <div key={index}>
              <MenuItem label={menuItem.label}
                onClick={() => handleSubMenuClick(index)}
                icon={menuItem.icon}
                link={menuItem.link}
                subMenu={menuItem.subMenu}
                isOpen={isSubMenuOpen(index)}
              />
              {renderSubMenuItems(menuItem.subMenu, index)}
            </div>
          ))}
        </List>
        <Divider />
        <MenuItem label={"Logout"}
          onClick={Logout}
          icon={"Logout"}
        />
      </DrawerPaper>
    </Drawer>
  );
};

export default Sidebar;
