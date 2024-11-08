import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import Text from '@/components/Text/Text';
import { ButtonProps } from './Button.types';
import styles from './Button.styles';

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <TouchableOpacity
      style={[styles.container, props.disabled && styles.containerDisabled]}
      {...props}>
      <Text font="black" style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
