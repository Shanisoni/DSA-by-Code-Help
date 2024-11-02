import React from 'react'
import { useFormik } from 'formik';

function Form() {

    const formInitialValues = {
        name : '',
        email : ''
    }

  const formik = useFormik({
     initialValues : formInitialValues,

     onSubmit : (values) => {
            alert(JSON.stringify('Form Data : ' + values.email + ' ' + values.name));  
            console.log(values);
            console.log(values.name);
            console.log(values.email);
     }

  });


  return (
    <div style={{position : 'center'}}>

        <h1>
            Formik Demo
        </h1>


        <form style={{position : 'center'}}  onSubmit={formik.handleSubmit}>
            <label htmlFor='' > Enter Your Name </label>
            <input type='text' name='name' value={formik.values.name} onChange={formik.handleChange} />
            <br/>
            <br/>

            <label htmlFor='' > Enter Your Email </label>
            <input type='text' name='email' value={formik.values.email} onChange={formik.handleChange} />

            <br/>
            <br/>

            {/* <label htmlFor='' > Submit </label> */}
            <input type='submit' name='name' value= 'Submit' />

        </form>
        
        
        
        
        </div>
  )
}

export default Form