import { IconNames } from "../types/GlobalTypes";
import { GridProps } from '@mui/material';
import { School, Subject } from "./SchoolInterfaces";
// import { User } from "./AuthInterfaces";
// import { School } from "./SchoolInterfaces";

export interface IGenericIconProps {
  iconName: IconNames;
}

export interface ColumnGeneratorProps {
  columnType: string;
  actions?: boolean;
  handleEdit?: (id: number) => void;
  handleDelete?: (id: number) => void;
}


export interface RouterGeneratorProps {
  routerType?: 'general';
}

export interface FieldConfig {
  key: string;
  label: string;
  placeHolder?: string;
  type: 'text' | 'number' | 'email' | 'select' | 'textarea' | 'date'; // Añadir tipos adicionales aquí
  options?: Array<{ value: string | number; label: string }>;
  cssProps?: GridProps;
}

export interface FormData {
  [key: string]: string | number | Date | FormData; // Ajustar tipos de acuerdo a los tipos de campo
}

export interface GenericFormProps {
  fields: FieldConfig[];
  data: FormData;
  onSubmit?: (formData: FormData) => void;
  onDelete?: (id: number) => void;
  onGoBack?: () => void;
  // setFormData?: (data: FormData) => void;
}

