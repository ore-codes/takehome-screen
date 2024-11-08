import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './ServiceRadio.styles';
import Text from '@/components/Text/Text';
import InactiveIcon from '@/assets/svgs/radio-inactive.svg';
import ActiveIcon from '@/assets/svgs/radio-active.svg';
import { ServiceRadioProps } from './ServiceRadio.types';

const ServiceRadio: FC<ServiceRadioProps> = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, props.isActive ? styles.active : styles.inactive]}>
      {props.isActive ? <ActiveIcon /> : <InactiveIcon />}
      <Text font="bold" style={[styles.title, props.isActive && styles.activeText]}>
        {props.title}
      </Text>
      <Text font="semibold" style={[styles.description, props.isActive && styles.activeText]}>
        {props.description}
      </Text>
    </TouchableOpacity>
  );
};

export default ServiceRadio;
