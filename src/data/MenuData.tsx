// src/components/menuData.ts
import { Home, Person, Mail, Delete, ExitToApp } from '@mui/icons-material';


import { MenuItemProps } from '../interfaces/NavigationInteface'; // Asegúrate de importar el tipo MenuItem

const menuItems: MenuItemProps[] = [
  {
    label: 'Home',
    icon: 'Home'
  },
  {
    label: 'Profile',
    icon: 'Person',
    subMenu: [
      {
        label: 'Inbox',
        icon: 'Mail'
      },
      {
        label: 'Trash',
        icon: 'Delete'
      },
    ],
  },
  {
    label: 'Logout',
    icon: 'ExitToApp'
  },
];

export default menuItems;