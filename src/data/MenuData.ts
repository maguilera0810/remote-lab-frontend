import { MenuItemProps } from '../interfaces/NavigationIntefaces';

export const menuItems: MenuItemProps[] = [
  {
    label: 'Home',
    icon: 'Home',
    link: '/'
  },
  {
    label: 'Login',
    icon: 'Login',
    link: '/login'
  },
  {
    label: 'Profile 1',
    icon: 'Person',
    subMenu: [
      {
        label: 'Login',
        icon: 'Login',
        link: '/login',
      },
      {
        label: 'Signup',
        icon: 'Delete',
        link: '/signup',
      },
    ],
  },
  {
    label: 'Mail 2',
    icon: 'Mail',
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
];
