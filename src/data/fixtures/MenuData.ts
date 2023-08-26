import { MenuItemProps } from '../../interfaces/NavigationIntefaces';

export const menuItems: MenuItemProps[] = [
  {
    label: 'Home',
    icon: 'Home',
    link: '/'
  },
  {
    label: 'Login',
    icon: 'Login',
    link: '/login/'
  },
  {
    label: 'Management',
    icon: 'Settings',
    subMenu: [
      {
        label: 'School',
        icon: 'School',
        link: '/school/'
      },
      {
        label: 'Subject',
        icon: 'Subject',
        link: '/subject/'
      },
      {
        label: 'Laboratory',
        icon: 'Biotech',
        link: '/laboratory/'
      },
    ]
  },
];
