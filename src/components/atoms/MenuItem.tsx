import React, { useState, useEffect } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MenuItemProps } from '../../interfaces/NavigationIntefaces';
import { IGenericIconProps } from '../../interfaces/GlobalInterfaces';
import * as icons from "@mui/icons-material";
import { Link } from 'react-router-dom';


const MenuItem: React.FC<MenuItemProps> = ({ label, icon, link }) => {

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
    <Link to={link}>
      <ListItemButton>
        {Icon && <ListItemIcon>{Icon}</ListItemIcon>}
        <ListItemText primary={label} />
      </ListItemButton>
    </Link>
  ) : (
    <ListItemButton>
      {Icon && <ListItemIcon>{Icon}</ListItemIcon>}
      <ListItemText primary={label} />
    </ListItemButton>
  );
}


export default MenuItem