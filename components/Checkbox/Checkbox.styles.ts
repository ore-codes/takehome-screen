import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const CheckboxStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 6,
    backgroundColor: Colors.light,
    borderRadius: 4,
  },
  label: {
    fontSize: 16,
    lineHeight: 21.86,
  },
});

export default CheckboxStyles;
