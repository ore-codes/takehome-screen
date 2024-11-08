import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

export type ButtonProps = TouchableOpacityProps & {
  children: ReactNode;
};
