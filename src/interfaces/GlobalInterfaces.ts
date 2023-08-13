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

export interface FormData {
  [key: string]: string;
}

export interface FormField {
  key: string;
  label?: string;
}

export interface GenericForm {
  formFields?: FormField[];
}