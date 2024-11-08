import { FC } from 'react';

export type DayTimeRadioProps = {
  icon: FC<any>;
  title: string;
  range: string;
  selected?: boolean;
  onPress?: () => void;
};
