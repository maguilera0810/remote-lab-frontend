import { Subject, School, Laboratory } from "./SchoolInterfaces";

export interface BaseFormProps {
  onDelete?: (id: number) => void;
  onGoBack?: () => void;
}

export interface SchoolFormProps extends BaseFormProps {
  onSubmit?: (formData: School) => void;
  data: School;
}

export interface SubjectFormProps extends BaseFormProps {
  onSubmit?: (formData: Subject) => void;
  data: Subject;
}

export interface LaboratoryFormProps extends BaseFormProps {
  onSubmit?: (formData: Laboratory) => void;
  data: Laboratory;
}
