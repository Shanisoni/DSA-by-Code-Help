import { Field, Formik, Form  } from 'formik'
import React from 'react'

function FormikForm2() {
  return (
    <div>
        <h1>Welcome To Formik 2 </h1>
        <Formik>

            <Form>
                
            <label htmlFor='' > Enter Your Name </label>
            <Field type='text' name='name' />

            </Form>
            
        </Formik>
        
    </div>
  )
}

export default FormikForm2