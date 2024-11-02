import * as Yup from 'yup' ;

export const FormSchema = Yup.object({
       
    name : Yup.string().min(3).max(15).required('Name is Required'),

    email : Yup.string().email().required('Email is Required') ,
    Age : Yup.number().required('Age is Required').positive().integer().min(4).max(10),
    password : Yup.string().required(' Password is Required ').matches(/(?=.*[0-9]) (?=.*[a-z]) (?=.*[A-Z]) (?=.*[@#$%^&*]) /,'Password must contain atleast one uppercase, one lowercase, one number and one special character' )

    
});