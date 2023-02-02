import * as yup from 'yup'

export const createClientSerializer = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  tel: yup.string().required(),
})