import React from 'react'

function ControlFormFunct() {

    const handler = (event) => {
        event.preventDefault()
        console.log('Form Submitted')
        // event.target.reset()

        // setState({

        //     data : event.target.value.toLowerCase().substring(0 , 10)

        // })
    }
  return (
    <>

    <form>

        <label htmlFor='' > Enter Name </label>
        <input type='text' value= ' Enter Your Data' />

        <br/>

        <input type='submit' value={'Submitted'} onChange={handler} />

    </form>
    
    {/* <div>ControlFormFunct</div> */}

    </>
  )
}

export default ControlFormFunct