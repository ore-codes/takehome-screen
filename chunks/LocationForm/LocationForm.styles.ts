import { StyleSheet } from 'react-native';

const LocationFormStyles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 20,
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 56,
    flexGrow: 1,
  },
  heading: {
    marginBottom: 9,
    fontSize: 24,
    lineHeight: 29.3,
  },
  subheading: {
    fontSize: 14,
    lineHeight: 19.12,
  },
  selectServiceContainer: {
    marginTop: 40,
    flexDirection: 'row',
    columnGap: 10,
  },
  taskLocationsContainer: {
    rowGap: 8,
  },
  label: {
    marginTop: 16,
    marginBottom: 8,
    fontSize: 16,
    lineHeight: 21.86,
  },
  textboxIconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
  },
  selectFlexibility: {
    flexDirection: 'row',
    columnGap: 13,
  },
  needCertainDay: {
    marginVertical: 20.5,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
  },
});

export default LocationFormStyles;
