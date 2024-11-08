import { ComponentProps, ReactNode } from 'react';
import { TextInput } from 'react-native';

export type TextboxProps = ComponentProps<typeof TextInput> & {
  accessoryRight?: ReactNode;
};
