import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string().required('name is required').min(3, 'name must be 3 characters or longer'),
    email: yup.string().email('Must be a valid email address').required('email is required'),
    password: yup.string().required('password is required').min(6, 'password must be 6 characters or longer'),
    ToS: yup.boolean(),
})