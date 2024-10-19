// import React, { useState } from 'react'

// function UScomponent() {
//     const myarray = useState("Shani")
//   return (
//     <>
//     <div>UScomponent</div>
//     <h1> {myarray[0]} </h1>
//     <button onClick = { () => myarray[1] ('Soni')} >Click Me</button>
//     </>
//   )
// }

// export default UScomponent




import React, { useState } from 'react'

function UScomponent() {
    const myarray = useState("Shani")
    let ChangState = () => {
        myarray[1] ('Soni')
    }
  return (
    <>
    <div>UScomponent</div>
    <h1> {myarray[0]} </h1>
    <button onClick = {ChangState}  >Click Me</button>
    </>
  )
}

export default UScomponent