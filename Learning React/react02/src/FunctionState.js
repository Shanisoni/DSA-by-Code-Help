import React, { useState } from 'react'

function FunctionState() {
  // const firstt = 0 ;

  
  const[first , second ] = useState(0)


   let ChangeState =() => {
    second (
        first + 1
   )


   } 

  return (
    
    <>

    <div>FunctionState</div>

    <h1>  {first} </h1>

    <button onClick={ChangeState}>Incrase</button>


    

    </>
    
  )
}

export default FunctionState