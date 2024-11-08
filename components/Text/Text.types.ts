import type { ComponentProps } from 'react';
import { Text as RNText } from 'react-native';

export type TextFont = 'regular' | 'semibold' | 'bold' | 'black';

export type TextProps = ComponentProps<typeof RNText> & {
  font?: TextFont;
};
