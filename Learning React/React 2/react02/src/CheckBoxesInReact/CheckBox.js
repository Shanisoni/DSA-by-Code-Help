import React, { useState } from 'react'

function CheckBox() {


    const [fruits , setFruits]  = useState([])

    const handlechange = (event) => {
        const value = event.target.value;
        const checked = event.target.checked
        console.log(value, checked)
        if(checked) {
            setFruits([
                ...fruits, value
            ])

        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(fruits)
    }

  return (
    <div>

        <form onSubmit={handleSubmit}>

            <label htmlFor='' > Select Fruit: &nbsp;</label>
            <input type='checkbox' name='fruit' value='Apple' onChange={handlechange} />

            <label htmlFor='' >Apple</label>
            
            &nbsp;


            <input type='checkbox' name='fruit' value='Mnago'  onChange={handlechange} />

            <label htmlFor='' >Mnago</label>

            &nbsp;


            <input type='checkbox' name='fruit' value='Guava'  onChange={handlechange} />

            <label htmlFor='' > Guava</label>

            &nbsp;

            <input type='checkbox' name='fruit' value='Grapes'  onChange={handlechange} />

            <label htmlFor='' > Grapes </label>
            
            <br/>
            <br/>

            <input type='submit' value={'Submit' } />









        </form>





    </div>
  )
}

export default CheckBox