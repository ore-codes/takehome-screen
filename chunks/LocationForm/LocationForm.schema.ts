import * as Yup from 'yup';

export const locationFormSchema = Yup.object({
  locationType: Yup.string()
    .required('Location type is required')
    .oneOf(['residential', 'on site'], 'Location type must be either "residential" or "on site"'),

  localGovernment: Yup.string().when('locationType', {
    is: 'residential',
    then: schema => schema.required('Local government is required for residential service'),
    otherwise: schema => schema.notRequired(),
  }),

  houseAddress: Yup.string().when('locationType', {
    is: 'residential',
    then: schema => schema.required('House address is required for residential service'),
    otherwise: schema => schema.notRequired(),
  }),

  closestBusStop: Yup.string().when('locationType', {
    is: 'residential',
    then: schema => schema.required('Closest bus stop is required for residential service'),
    otherwise: schema => schema.notRequired(),
  }),

  landmarks: Yup.string().when('locationType', {
    is: 'residential',
    then: schema => schema.required('Landmarks are required for residential service'),
    otherwise: schema => schema.notRequired(),
  }),

  deadlineFlexibility: Yup.string()
    .required('Deadline flexibility is required')
    .oneOf(['on date', 'flexible'], 'Deadline flexibility must be either "on date" or "flexible"'),

  deadline: Yup.string().when('deadlineFlexibility', {
    is: 'on date',
    then: schema => schema.required('Deadline is required when deadline flexibility is "on date"'),
    otherwise: schema => schema.notRequired(),
  }),

  certainTime: Yup.boolean().notRequired(),

  deadlineTime: Yup.string().when('certainTime', {
    is: true,
    then: schema =>
      schema
        .required('Deadline time is required when certainTime is true')
        .oneOf(['morning', 'afternoon', 'evening', 'all day'], 'Invalid deadline time'),
    otherwise: schema => schema.notRequired(),
  }),
});
