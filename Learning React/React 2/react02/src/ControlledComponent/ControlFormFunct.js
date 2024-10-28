import React, { useState } from 'react'

function ControlFormFunct() {

    const handler = (event) => {
        event.preventDefault()
        console.log('Form Submitted')
        console.log(event.target[0].value) 
        // event.target.reset()

        // setState({

        //     data : event.target.value.toLowerCase().substring(0 , 10)

        // })
    }
    const [data , setName] =  useState('Shani')
    
    
    return (
    <>

    <form onSubmit={handler}>

        <label htmlFor='' > Enter Name </label>
        <input type='text' value= {data}  onChange = { (event) => setName( event.target.value.toUpperCase()) } />

        <br/>

        <input type='submit' value={'Submite'}  /> 

    </form>
    
    {/* <div>ControlFormFunct</div> */}

    </>
  )
}

export default ControlFormFunct