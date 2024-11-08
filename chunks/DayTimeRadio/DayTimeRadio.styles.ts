import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const DayTimeRadioStyles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: Colors.light,
    borderRadius: 8,
  },
  containerSelected: {
    backgroundColor: Colors.primary,
  },
  contentWrapper: {
    flex: 1,
  },
  title: {
    marginTop: 12,
    marginBottom: 4,
  },
  textSelected: {
    color: 'white',
  },
  description: {
    fontSize: 12,
    lineHeight: 16.39,
  },
});

export default DayTimeRadioStyles;
