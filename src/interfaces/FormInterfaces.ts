import { Subject, School } from "./SchoolInterfaces";

export interface BaseFormProps {
  onDelete?: (id: number) => void;
  onGoBack?: () => void;
}

export interface SubjectFormProps extends BaseFormProps {
  onSubmit?: (formData: Subject) => void;
  data: Subject;
}

export interface SchoolFormProps extends BaseFormProps {
  onSubmit?: (formData: School) => void;
  data: School;
}