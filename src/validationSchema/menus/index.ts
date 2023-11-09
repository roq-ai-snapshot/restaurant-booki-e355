import * as yup from 'yup';

export const menuValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  price: yup.number().integer().required(),
  available_from: yup.date().required(),
  available_to: yup.date().required(),
  restaurant_id: yup.string().nullable().required(),
});
