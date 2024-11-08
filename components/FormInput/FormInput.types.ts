import { Control } from 'react-hook-form';
import { TextboxProps } from '@/components/Textbox/Textbox.types';
import { LocationFormData } from '@/chunks/LocationForm/LocationForm.types';

export type FormInputProps = TextboxProps & {
  control: Control<any>;
  name: keyof LocationFormData;
  error?: string;
};
