import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const ButtonStyles = StyleSheet.create({
  container: {
    marginTop: 104,
    padding: 16,
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 8,
  },
  containerDisabled: {
    opacity: 0.5,
  },
  text: {
    color: 'white',
    fontSize: 15,
    lineHeight: 20.49,
  },
});

export default ButtonStyles;
