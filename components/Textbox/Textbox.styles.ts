import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const TextboxStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.light,
    borderRadius: 8,
  },
  containerFocused: {
    backgroundColor: '#FAFCFB',
    borderWidth: 1.5,
    borderColor: Colors.primary,
  },
  input: {
    flex: 1,
    fontFamily: 'Medium500',
    fontSize: 14,
    lineHeight: 19.12,
    color: Colors.text,
  },
});

export default TextboxStyles;
