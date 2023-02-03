import * as yup from 'yup'

export const createContactSerializer = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  tel: yup.string().required(),
})