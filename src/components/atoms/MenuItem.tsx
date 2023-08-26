import React, { useState, useEffect } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MenuItemProps } from '../../interfaces/NavigationIntefaces';
import { IGenericIconProps } from '../../interfaces/GlobalInterfaces';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import * as icons from "@mui/icons-material";

import { Link } from 'react-router-dom';


const MenuItem: React.FC<MenuItemProps> = ({ label, icon, link, subMenu, isOpen = false, onClick, cssProps = {} }) => {

  const [Icon, setIcon] = useState<React.JSX.Element | null>(null);

  const GenericIcon = ({ iconName }: IGenericIconProps): React.JSX.Element => {
    const Icon = icons[iconName];
    return <Icon />;
  };

  useEffect(() => {
    if (icon) {
      setIcon(GenericIcon({ iconName: icon }))
    } else {
      setIcon(null)
    }
  }, [icon])

  return link ? (
    <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
      <ListItemButton style={cssProps}>
        {Icon && <ListItemIcon>{Icon}</ListItemIcon>}
        <ListItemText primary={label} />
      </ListItemButton>
    </Link>
  ) : (
    <ListItemButton onClick={onClick} style={cssProps}>
      {Icon && <ListItemIcon>{Icon}</ListItemIcon>}
      <ListItemText primary={label} />
      {subMenu && <ListItemIcon>
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemIcon>}
    </ListItemButton>
  );
}


export default MenuItem