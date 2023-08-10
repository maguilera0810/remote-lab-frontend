import { IconNames } from "../types/GlobalTypes";

export interface MenuItemProps {
  label?: string;
  icon?: IconNames;
  link?: string;
  isOpen?: boolean;
  subMenu?: MenuItemProps[];
  onClick?: () => void;
}

export interface SidebarProps {
  user: {
    name: string;
    avatarUrl: string;
  };
  menuItems: MenuItemProps[];
}
