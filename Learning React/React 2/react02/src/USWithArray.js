import React, { useState } from 'react'

function USWithArray() {
    let shani = [11 , 22 , 33 , 44 , 55];
    let [name , setName] =  useState(shani);

    const ChangState = () => {
            setName([10 , 20 , 30 , 40 , 50]);

          
    }
  return (
    <>
    <div>USWithArray</div>
    <ul>
        { 
            name.map((val , i) => <li key={i}>{val}</li>)
            
        }
    </ul>
    <button onClick={ChangState}>Click Me</button>

    </>

  )
}

export default USWithArray