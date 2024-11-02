import { Field, Formik, Form  } from 'formik'
import React from 'react'

function FormikForm2() {
  return (
    <div>
        <h1>Welcome To Formik Form  </h1>
        <Formik initialValues={{name : 'Shani'}} 
        onSubmit={(values) => {

            console.log(values);
            

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
        
    </div>
  )
}

export default FormikForm2