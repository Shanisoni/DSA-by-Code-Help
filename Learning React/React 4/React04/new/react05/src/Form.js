import React from 'react'
import { useFormik } from 'formik';
import { FormSchema } from './FormSchema';

function Form() {

    const formInitialValues = {
        name : '',
        email : '',
        Age : ''
    }

//   const formik = useFormik({
//      initialValues : formInitialValues,

//      onSubmit : (values) => {
//             alert(JSON.stringify('Form Data : ' + values.email + ' ' + values.name));  
//             console.log(values);
//             console.log(values.name);
//             console.log(values.email);
//      }

//   });


const {handleChange , handleSubmit , values , errors , handleBlur , touched } = useFormik({
    initialValues : formInitialValues,
    validationSchema : FormSchema,

    onSubmit : (values) => {
           alert(JSON.stringify('Form Data : ' + values.email + ' ' + values.name));  
           console.log(values);
           console.log(values.name);
           console.log(values.email);
           console.log(values.Age);
    }

 });


  return (
    <div style={{position : 'center'}}>

        <h1>
            Formik Demo
        </h1>


        <form style={{position : 'center'}}  onSubmit={handleSubmit}>

            <label htmlFor='' > Enter Your Name </label>
            <input type='text' name='name' value={values.name} onChange={handleChange}  onBlur={handleBlur} />
            <br/>

            {errors.name && touched.name ?  <span style={{color: 'red'}}>  {errors.name} </span> : null}
            {/* <span style={{color: 'red'}}>  {errors.name} </span> */}

            <br/>  

            <label htmlFor='' > Enter Your Email </label>
            <input type='text' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />

            <br/>
            {/* <span style={{color: 'red'}}>  {errors.email} </span> */}
            {errors.email && touched.email ? (<span style={{color: 'red'}}>  {errors.email} </span> ) : null}
            <br/>

            {/* <label htmlFor='' > Submit </label> */}
            <input type='submit' name='name' value= 'Submit' />

        </form>
        
        
        
        
        </div>
  )
}

export default Form