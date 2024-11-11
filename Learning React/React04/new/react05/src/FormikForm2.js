import { Field, Formik, Form  } from 'formik'
import React from 'react'
import { useState } from 'react'
import * as Yup from 'yup'

function FormikForm2() {
    const NewValidations = Yup.object({
        name : Yup.string().min(3).max(15).required('Name is Required'),
        email : Yup.string().email().required('Email is Required') ,
        Age : Yup.number().required('Age is Required').positive().integer().min(4).max(10),
        password : Yup.string().required(' Password is Required ').matches(/(?=.*[0-9]) (?=.*[a-z]) (?=.*[A-Z]) (?=.*[@#$%^&*]) /,"Password must contain atleast one uppercase, one lowercase, one number and one special character"),
        cpass : Yup.string().oneOf([Yup.ref('password'),null],'Password must match')
    })




    const [formData , setFormData] = useState({});
  return (
    <div>
        <h1>Welcome To Formik Form  </h1>
        <Formik initialValues={{name : 'Shani'}} 
        onSubmit={(values) => { 

            console.log(values);
            setFormData(values);
            

        }}

        
        >

            <Form>

            <label htmlFor='' > Enter Your Name </label>
            <Field type='text' name='name' />
            <br/>
            <br/>

            <button type='submit' > Submit </button>

            </Form>
            
        </Formik>
        <h1> {JSON.stringify(formData)} </h1>
        
    </div>
  )
}

export default FormikForm2