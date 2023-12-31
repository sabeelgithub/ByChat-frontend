import * as yup from 'yup';

// const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export const registrationSchema = yup.object().shape({
    mobile: yup
        .number('mobile number must be a 10 digit number')
        .positive()
        .integer()
        .test('len', 'mobile number should be a 10 digit number', val => /^\d{10}$/.test(val))
        .required('mobile number required'),
    
    email: yup.string().email('Please enter a valid email').required('Email required'),
    username: yup
        .string()
        .min(2, 'username must be at least 2 characters')
        .max(20)
        .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed')
        .required('username required'),
    specification: yup
        .string()
        .min(2, 'specification must be at least 2 characters')
        .max(20)
        .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed')
        .required('specification required'),
    
    password: yup
        .string()
        .min(5, 'password should contain 5-16 characters')
        .max(16, 'password should contain 5-16 characters')
        // .matches(passwordRule, 'Please create a stronger password')
        .required('password required'),
    confirm_password: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Password must match')
        .required('password required'),
       
});