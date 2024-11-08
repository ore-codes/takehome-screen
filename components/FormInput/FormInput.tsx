import Text from '@/components/Text/Text';
import { FC, useMemo } from 'react';
import { useController } from 'react-hook-form';
import styles from './FormInput.styles';
import Textbox from '@/components/Textbox/Textbox';
import { FormInputProps } from './FormInput.types';

const Input: FC<FormInputProps> = ({ control, name, ...props }) => {
  const { field, formState } = useController({ control, name });
  const error = useMemo(() => {
    return formState.errors[name]?.message as string | undefined;
  }, [formState.errors, name]);

  return (
    <>
      <Textbox
        {...props}
        value={field.value ?? formState.defaultValues?.[name]}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </>
  );
};

export default Input;
