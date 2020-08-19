import * as yup from 'yup';

const schemeLogin = yup.object().shape({
  email: yup.string()
    .email('Valid email required')
    .required('Email is required'),
  password: yup.string()
    .min(5, 'password min 5 caracters.')
    .required('Password is required'),
});

export {
  schemeLogin,
};
