import React, { useState } from 'react'

function MultipleFunc() {





    const [data , setState] = useState({
        name : '',
        email : ''
    })

   const handleChange = (event) => {
    

    }
  return (
    <div>

        <form>

            <label  htmlFor=''> Enter Your Name</label>
            <input type='text' name='name' placeholder='Enter Your Name' value={data.name} onChange={handleChange} />
            <br/>
            <br/>

            <label htmlFor='' > Enter Your Email</label>
            <input type='email' name='email' placeholder='Enter Your Email' value={data.email} onChange={handleChange} />

            <input type='submit' value={'Submit'} />




        </form>





    </div>
  )
}

export default MultipleFunc