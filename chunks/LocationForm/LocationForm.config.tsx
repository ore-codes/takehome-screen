import {
  DayTimeOption,
  FlexibilityOption,
  LocationField,
  LocationTypeOption,
} from './LocationForm.types';
import { View } from 'react-native';
import styles from './LocationForm.styles';
import DropdownIcon from '@/assets/svgs/dropdown.svg';
import MorningIcon from '@/assets/svgs/morning.svg';
import AfternoonIcon from '@/assets/svgs/afternoon.svg';
import EveningIcon from '@/assets/svgs/evening.svg';
import AllDaysIcon from '@/assets/svgs/allday.svg';

export const locationTypes: LocationTypeOption[] = [
  {
    value: 'residential',
    title: 'Residential Service',
    description: 'Select this if you need the task done at a particular location of your choice',
  },
  {
    value: 'on site',
    title: 'On-Site Service',
    description: 'Select this if you are more happy to go to the registered business address',
  },
];

export const locationFields: LocationField[] = [
  {
    name: 'localGovernment',
    placeholder: 'Local government',
    accessoryRight: (
      <View style={styles.textboxIconWrapper}>
        <DropdownIcon />
      </View>
    ),
  },
  {
    name: 'houseAddress',
    dependsOn: 'localGovernment',
    placeholder: 'House address',
  },
  {
    name: 'closestBusStop',
    dependsOn: 'houseAddress',
    placeholder: 'Closest bus stop',
  },
  {
    name: 'landmarks',
    dependsOn: 'closestBusStop',
    placeholder: 'Landmarks',
  },
];

export const flexibilityOptions: FlexibilityOption[] = [
  {
    value: 'on date',
    label: 'On date',
  },
  {
    value: 'flexible',
    label: "I'm flexible",
  },
];

export const daytimeOptions: DayTimeOption[] = [
  {
    value: 'morning',
    icon: MorningIcon,
    title: 'Morning',
    range: '7:00am to 11:59am',
  },
  {
    value: 'afternoon',
    icon: AfternoonIcon,
    title: 'Afternoon',
    range: '12:00pm to 4:59pm',
  },
  {
    value: 'evening',
    icon: EveningIcon,
    title: 'Evening',
    range: '5:00pm to 9:59pm',
  },
  {
    value: 'all day',
    icon: AllDaysIcon,
    title: 'All Day',
    range: '7:00am to 9:59pm',
  },
];
