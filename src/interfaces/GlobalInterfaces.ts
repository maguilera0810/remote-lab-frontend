import { IconNames } from "../types/GlobalTypes";

export interface IGenericIconProps {
  iconName: IconNames;
}

export interface ColumnGeneratorProps {
  columnType: string;
  actions?: boolean;
  handleEdit?: (id: number) => void;
  handleDelete?: (id: number) => void;
}
