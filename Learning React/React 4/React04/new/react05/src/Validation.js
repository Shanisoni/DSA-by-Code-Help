import React from 'react'

function Validation() {
  return (
    <div>


        <h1> Form Validation </h1>

        <form>
        <label htmlFor='Name'>  Name </label>
        <input type='text'  name='Name' />

        <br/>
        <br/>

        <label htmlFor='Email'>  Email </label>
        <input type='text'  name='Email' />

        <br/>
        <br/>

        <label htmlFor='Submit'>  Submit </label>
        <input type='submit'   />


        </form>

        




    </div>
  )
}

export default Validation