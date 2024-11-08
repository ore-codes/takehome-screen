import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './Checkbox.styles';
import DefaultIcon from '@/assets/svgs/checkbox-default.svg';
import SelectedIcon from '@/assets/svgs/checkbox-selected.svg';
import Text from '@/components/Text/Text';
import { CheckboxProps } from './Checkbox.types';

const Checkbox: FC<CheckboxProps> = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      {props.selected ? <SelectedIcon /> : <DefaultIcon />}
      <Text font="semibold" style={styles.label}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
