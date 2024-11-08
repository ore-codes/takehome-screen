import { useForm } from 'react-hook-form';
import { LocationFormData } from './LocationForm.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { locationFormSchema } from './LocationForm.schema';

export default function useLocationForm() {
  const form = useForm<LocationFormData>({
    mode: 'onChange',
    resolver: yupResolver(locationFormSchema),
  });

  const locationType = form.watch('locationType');
  const deadlineFlexibility = form.watch('deadlineFlexibility');
  const certainTime = form.watch('certainTime');

  const setValue = (key: keyof LocationFormData, value: LocationFormData[typeof key]) => {
    form.setValue(key, value);
    form.trigger('deadlineTime');
  };

  return { form, locationType, deadlineFlexibility, certainTime, setValue };
}
