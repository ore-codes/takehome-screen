import { Text as RNText } from 'react-native';

import type { FC } from 'react';
import { TextFont, TextProps } from './Text.types';
import styles from './Text.styles';

const Text: FC<TextProps> = ({ font = 'regular', style, ...props }) => {
  return <RNText style={[{ fontFamily: mapFont(font) }, styles.text, style]} {...props} />;
};

export default Text;

function mapFont(font: TextFont) {
  const map: Record<TextFont, string> = {
    regular: 'Regular400',
    semibold: 'Medium500',
    bold: 'Bold700',
    black: 'Black800',
  };
  return map[font];
}
