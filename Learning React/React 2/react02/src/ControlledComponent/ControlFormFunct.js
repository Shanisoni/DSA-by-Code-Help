import React, { useState } from 'react'

function ControlFormFunct() {

    const handler = (event) => {
        event.preventDefault()
        console.log('Form Submitted')
        // event.target.reset()

        // setState({

        //     data : event.target.value.toLowerCase().substring(0 , 10)

        // })
    }
    const [data , setstate] =  useState('Shani')
    
    
    return (
    <>

    <form>

        <label htmlFor='' > Enter Name </label>
        <input type='text' value= {data} />

        <br/>

        <input type='submit' value={'Submitted'} onChange={handler} />

    </form>
    
    {/* <div>ControlFormFunct</div> */}

    </>
  )
}

export default ControlFormFunct