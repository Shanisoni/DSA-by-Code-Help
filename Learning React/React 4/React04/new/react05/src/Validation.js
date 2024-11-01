import React, { useState } from 'react'

function Validation() {

    const  [name , setName ] = useState ( '');
    const [email , setEmail]  = useState('');
   return (
    <div>


        <h1> Form Validation </h1>

        <form>
        <label htmlFor='Name'>  Name </label>
        <input type='text'  name='Name' value={name} required />

        <br/>
        <br/>

        <label htmlFor='Email'>  Email </label>
        <input type='text'  name='Email'  value={email} />

        <br/>
        <br/>

        <label htmlFor='Submit'>  Submit </label>
        <input type='submit'   />


        </form>

        




    </div>
  )
}

export default Validation