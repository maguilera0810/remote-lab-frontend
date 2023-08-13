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


export interface FieldConfig {
  key: string;
  label: string;
  type: 'text' | 'number' | 'email' | 'select' | 'textarea' | 'date'; // Añadir tipos adicionales aquí
  options?: Array<{ value: string | number; label: string }>;
}

export interface FormData {
  [key: string]: string | number | Date; // Ajustar tipos de acuerdo a los tipos de campo
}

export interface GenericFormProps {
  fields: FieldConfig[];
  data: FormData;
  onSubmit: (formData: FormData) => void;
  // setFormData?: (data: FormData) => void;
}

export interface RouterGeneratorProps {
  routerType?: 'general';
}
