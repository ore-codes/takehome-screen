import { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Text from '@/components/Text/Text';
import styles from './LocationForm.styles';
import ServiceRadio from '@/chunks/ServiceRadio/ServiceRadio';
import Checkbox from '@/components/Checkbox/Checkbox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DatePicker from '@/components/DatePicker/DatePicker';
import SelectedIcon from '@/assets/svgs/checkbox-selected.svg';
import DeselectedIcon from '@/assets/svgs/checkbox-default.svg';
import DayTimeRadio from '@/chunks/DayTimeRadio/DayTimeRadio';
import Button from '@/components/Button/Button';
import useLocationForm from '@/chunks/LocationForm/useLocationForm';
import {
  daytimeOptions,
  flexibilityOptions,
  locationFields,
  locationTypes,
} from '@/chunks/LocationForm/LocationForm.config';
import FormInput from '@/components/FormInput/FormInput';

const LocationForm: FC = () => {
  const h = useLocationForm();
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}>
      <Text font="bold" style={styles.heading}>
        Location & Date
      </Text>
      <Text>Select the category that best fits your needs.</Text>
      <View style={styles.selectServiceContainer}>
        {locationTypes.map(location => (
          <ServiceRadio
            key={location.value}
            isActive={h.locationType === location.value}
            title={location.title}
            description={location.description}
            onPress={() => h.form.setValue('locationType', location.value)}
          />
        ))}
      </View>
      {h.locationType === 'residential' && (
        <>
          <Text font="semibold" style={styles.label}>
            Where do you want the task done?
          </Text>
          <View style={styles.taskLocationsContainer}>
            {locationFields.map(({ name, dependsOn, ...props }) => (
              <View key={name}>
                {(!dependsOn || !!(h.form.watch(dependsOn) as string)?.length) && (
                  <FormInput control={h.form.control} name={name} {...props} />
                )}
              </View>
            ))}
          </View>
        </>
      )}
      {(!!h.form.watch('landmarks')?.length || h.locationType === 'on site') && (
        <>
          <Text font="semibold" style={styles.label}>
            When do you need this done?
          </Text>
          <View style={styles.selectFlexibility}>
            {flexibilityOptions.map(option => (
              <Checkbox
                key={option.value}
                onPress={() => h.form.setValue('deadlineFlexibility', option.value)}
                selected={option.value === h.deadlineFlexibility}
                label={option.label}
              />
            ))}
          </View>
          {h.deadlineFlexibility === 'on date' && (
            <DatePicker
              value={h.form.watch('deadline')}
              onChangeText={text => h.form.setValue('deadline', text)}
            />
          )}
          {(!!h.form.watch('deadline') || h.deadlineFlexibility === 'flexible') && (
            <TouchableOpacity
              style={styles.needCertainDay}
              onPress={() => h.form.setValue('certainTime', !h.certainTime)}>
              {h.certainTime ? <SelectedIcon /> : <DeselectedIcon />}
              <Text font="semibold">I need a certain time of day</Text>
            </TouchableOpacity>
          )}
          {!!h.deadlineFlexibility && h.certainTime && (
            <>
              {daytimeOptions.map(option => (
                <DayTimeRadio
                  key={option.value}
                  selected={option.value === h.form.watch('deadlineTime')}
                  icon={option.icon}
                  title={option.title}
                  range={option.range}
                  onPress={() => h.form.setValue('deadlineTime', option.value)}
                />
              ))}
            </>
          )}
        </>
      )}
      <View style={{ flex: 1 }} />
      <Button
        disabled={!h.form.formState.isValid}
        onPress={h.form.handleSubmit(
          () => alert('success'),
          () => alert('error'),
        )}>
        Continue
      </Button>
    </KeyboardAwareScrollView>
  );
};

export default LocationForm;
