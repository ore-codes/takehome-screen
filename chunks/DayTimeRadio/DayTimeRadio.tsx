import { FC } from 'react';
import styles from './DayTimeRadio.styles';
import { TouchableOpacity, View } from 'react-native';
import Text from '@/components/Text/Text';
import InactiveIcon from '@/assets/svgs/radio-inactive.svg';
import ActiveIcon from '@/assets/svgs/radio-active.svg';
import { DayTimeRadioProps } from './DayTimeRadio.types';
import { Colors } from '@/constants/Colors';

const DayTimeRadio: FC<DayTimeRadioProps> = props => {
  const Icon = props.icon;
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, props.selected && styles.containerSelected]}>
      <View style={styles.contentWrapper}>
        <Icon color={props.selected ? Colors.primary : Colors.dark} />
        <Text font="bold" style={[styles.title, props.selected && styles.textSelected]}>
          {props.title}
        </Text>
        <Text style={[styles.description, props.selected && styles.textSelected]}>
          The time range is{' '}
          <Text font="black" style={[styles.description, props.selected && styles.textSelected]}>
            {props.range}
          </Text>
        </Text>
      </View>
      {props.selected ? <ActiveIcon /> : <InactiveIcon />}
    </TouchableOpacity>
  );
};

export default DayTimeRadio;
