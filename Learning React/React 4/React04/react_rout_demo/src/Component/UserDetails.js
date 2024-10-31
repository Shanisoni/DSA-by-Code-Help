import React from 'react'
import { Link } from 'react-router-dom'

function UserDetails() {
  return (

         <div>
        
        <h1> Welcome To UserDetails Page </h1>

        <h1>  <Link to='/user/1' > User 1</Link> </h1>

        <h1>  <Link to='/user/2' > User 2</Link> </h1>

        <h1>  <Link to='/user/3' > User 3</Link> </h1>

        <h1>  <Link to='/user/4' > User 4</Link> </h1>
        
         </div>
  )
}

export default UserDetails