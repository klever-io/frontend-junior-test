import * as yup from 'yup'

export const TokenSchema = yup.object().shape({
  token: yup.string().required('Token is a required field'),
  balance: yup.string().required('Balance is a required field'),
})
