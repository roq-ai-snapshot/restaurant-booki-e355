import * as yup from 'yup';

export const tableValidationSchema = yup.object().shape({
  number: yup.number().integer().required(),
  capacity: yup.number().integer().required(),
  location_description: yup.string().nullable(),
  is_reserved: yup.boolean().nullable(),
  restaurant_id: yup.string().nullable().required(),
});
