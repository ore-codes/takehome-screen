import { FC, useState } from 'react';
import { TextboxProps } from './Textbox.types';
import { TextInput, View } from 'react-native';
import styles from './Textbox.styles';
import { Colors } from '@/constants/Colors';

const Textbox: FC<TextboxProps> = ({ accessoryRight, onBlur, onFocus, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={[styles.container, isFocused && styles.containerFocused]}>
      <TextInput
        style={styles.input}
        placeholderTextColor={Colors.placeholder}
        onFocus={e => {
          setIsFocused(true);
          onFocus?.(e);
        }}
        onBlur={e => {
          setIsFocused(false);
          onBlur?.(e);
        }}
        {...props}
      />
      {accessoryRight}
    </View>
  );
};

export default Textbox;
