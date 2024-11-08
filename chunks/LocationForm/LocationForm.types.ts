import * as Yup from 'yup';
import { locationFormSchema } from './LocationForm.schema';
import { TextboxProps } from '@/components/Textbox/Textbox.types';
import { DayTimeRadioProps } from '@/chunks/DayTimeRadio/DayTimeRadio.types';

export type LocationFormData = Yup.InferType<typeof locationFormSchema>;

export type LocationTypeOption = {
  value: LocationFormData['locationType'];
  title: string;
  description: string;
};

export type LocationField = TextboxProps & {
  name: keyof LocationFormData;
  dependsOn?: keyof LocationFormData;
  dependants?: (keyof LocationFormData)[];
};

export type FlexibilityOption = {
  value: LocationFormData['deadlineFlexibility'];
  label: string;
};

export type DayTimeOption = DayTimeRadioProps & {
  value: LocationFormData['deadlineTime'];
};
