import * as Yup from 'yup' ;

export const FormSchema = Yup.object({
       
    name : Yup.string().min(3).max(15).required('Name is Required'),

    email : Yup.string().email().required('Email is Required') ,
    Age : Yup.number('Only Numbers Allowed').required('Age is Required').positive().integer()
});