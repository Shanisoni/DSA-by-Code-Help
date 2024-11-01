import React, { useState } from 'react'

function Validation() {

    const  [name , setName ] = useState ( '');
    const [email , setEmail]  = useState('');
    const [nameError , setNameError] = useState( false  ) ;

    const handleName=  (e) => {
      let name = e.target.value;
      if( name.length < 3){
        setNameError('True');
      }
         
    }
   return (
    <div>


        <h1> Form Validation </h1>
 
        <form>
        <label htmlFor='Name'>  Name </label>
        <input type='text'  name='name' value={name} required  onChange={handleName} />

        <br/>
        {nameError  ? <span> Name is valid </span> : <span> Name is invalid </span> }
        <br/>

        <label htmlFor='Email'>  Email </label>
        <input type='text'  name='email'  value={email} required/>

        <br/>
        <br/>

        <label htmlFor='Submit'>  Submit </label>
        <input type='submit'   />


        </form>

        




    </div>
  )
}

export default Validation