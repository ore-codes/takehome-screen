import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const ServiceRadioStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 14,
    flex: 1,
    borderRadius: 8,
  },
  active: {
    backgroundColor: Colors.primary,
  },
  inactive: {
    backgroundColor: Colors.light,
  },
  title: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 19.3,
  },
  activeText: {
    color: 'white',
  },
  description: {
    fontSize: 12,
    lineHeight: 16.39,
  },
});

export default ServiceRadioStyles;
