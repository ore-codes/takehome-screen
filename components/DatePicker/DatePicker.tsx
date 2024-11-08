import Text from '@/components/Text/Text';
import { FC, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { DatePickerProps } from './DatePicker.types';
import styles from './DatePicker.styles';
import dayjs from 'dayjs';
import CalendarIcon from '@/assets/svgs/calendar.svg';

const DatePicker: FC<DatePickerProps> = props => {
  const [show, setShow] = useState(false);

  const onChangeDate = (date: Date) => {
    setShow(false);
    props.onChangeText && props.onChangeText(dayjs(date).format('DD - MM - YYYY'));
  };

  return (
    <>
      <TouchableOpacity style={styles.trigger} onPress={() => setShow(true)}>
        {props.value && <Text font="semibold">{props.value}</Text>}
        {props.value === undefined && (
          <Text style={styles.placeholder}>{props.placeholder ?? 'Select date'}</Text>
        )}
        <CalendarIcon />
      </TouchableOpacity>
      <DateTimePickerModal
        mode="date"
        display="spinner"
        isVisible={show}
        onConfirm={onChangeDate}
        onCancel={() => setShow(false)}
        textColor="#000"
      />
    </>
  );
};

export default DatePicker;
