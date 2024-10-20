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

// import React, { useState } from 'react'

// function UScomponent() {
//     const myarray = useState("Shani")
//     let ChangState = () => {
//         myarray[1] ('Soni')
//     }
//   return (
//     <>
//     <div>UScomponent</div>
//     <h1> {myarray[0]} </h1>
//     <button onClick = {ChangState}  >Click Me</button>
//     </>
//   )
// }

// export default UScomponent

// import React, { useState } from 'react'

// function UScomponent() {
//     const [name , setName] = useState("Shani")
//     let ChangState = () => {
//          setName('Soni')
//     }
//   return (
//     <>
//     <div>UScomponent</div>
//     <h1> {name} </h1>
//     <button onClick = {ChangState}  >Click Me</button>
//     </>
//   )
// }

// export default UScomponent

// import React, { useState } from "react";

// function UScomponent() {
//   const shani = {
//     name: "shani",
//     class: "B.Tech",
//     Roll: 101,
//     City: "Delhi",
//   };

//   const [persion , setName] = useState(shani);

//   const ChangState = () => {
//     setName({
//       name : "soni",
//       class : "M.Tech",
//       Roll : 202 ,
//       City : "Mumbai"

//     })
//   }

//   return (
//     <>
//     <h1> {persion.City}</h1>
//     <h1> {persion.Roll}</h1>
//     <h1> {persion.class}</h1>
//       <div>UScomponent</div>
//       {/* <h1> {Persion} </h1> */}
//       <button onClick={ChangState}>Click Me</button>
//     </>
//   );
// }

// export default UScomponent;










// import React, { useState } from "react";

// function UScomponent() {
//   const shani = {
//     name: "shani",
//     class: "B.Tech",
//     Roll: 101,
//     City: "Delhi",
//   };

//   const [persion , setName] = useState(shani);

//   let ChangState = () => {
//     setName(previousState => {
//       return {
//         ...previousState,
//         City : "Mumbai"
//       }
     
      
      
//     })
//   }

//   return (
//     <>
//     <h1> {persion.City}</h1>
//     <h1> {persion.Roll}</h1>
//     <h1> {persion.class}</h1>
//       <div>UScomponent</div>
//       {/* <h1> {Persion} </h1> */}
//       <button onClick={ChangState}>Click Me</button>
//     </>
//   );
// }

// export default UScomponent;
