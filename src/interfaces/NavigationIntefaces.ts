import { IconNames } from "../types/GlobalTypes";

export interface MenuItemProps {
  label?: string;
  icon?: IconNames;
  link?: string;
  subMenu?: MenuItemProps[];
}