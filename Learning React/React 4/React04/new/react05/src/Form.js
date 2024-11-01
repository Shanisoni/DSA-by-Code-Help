import React from 'react'

function Form() {
  return (
    <div style={{position : 'center'}}>

        <h1>
            Formik Demo
        </h1>


        <form style={{position : 'center'}}>
            <label htmlFor='' > Enter Your Name </label>
            <input type='text' name='name' />
            <br/>
            <br/>

            <label htmlFor='' > Enter Your Email </label>
            <input type='email' name='name' />

            <br/>
            <br/>

            <label htmlFor='' > Submit </label>
            <input type='sumit' name='name' />

        </form>
        
        
        
        
        </div>
  )
}

export default Form