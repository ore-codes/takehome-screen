import { useForm } from 'react-hook-form';
import { LocationFormData } from './LocationForm.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { locationFormSchema } from './LocationForm.schema';
import { useMemo } from 'react';

export default function useLocationForm() {
  const form = useForm<LocationFormData>({
    mode: 'onChange',
    resolver: yupResolver(locationFormSchema),
  });

  const locationType = form.watch('locationType');
  const landmarks = form.watch('landmarks');
  const deadlineFlexibility = form.watch('deadlineFlexibility');
  const certainTime = form.watch('certainTime');

  const showRemainingFields = useMemo(() => {
    return locationType === 'on site' || (locationType === 'residential' && !!landmarks?.length);
  }, [locationType, landmarks]);

  return { form, locationType, deadlineFlexibility, certainTime, showRemainingFields };
}
