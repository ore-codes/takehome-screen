import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const DatePickerStyles = StyleSheet.create({
  trigger: {
    marginTop: 20,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.light,
    borderRadius: 8,
  },
  placeholder: {
    color: Colors.placeholder,
  },
});

export default DatePickerStyles;
