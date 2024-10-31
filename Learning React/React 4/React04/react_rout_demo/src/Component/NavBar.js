import React from 'react'
import { NavLink }  from 'react-router-dom';
// import './.css';

function NavBar() {
  return (
    <div>
        <nav className='main-nav'>
            <NavLink to= '/'  > Home </NavLink>
            <br/>
            <br/>

            <NavLink to= '/About'> About </NavLink>

            <br/>
            <br/>

            <NavLink to= '/Contact'> Contact </NavLink>
            <br/>
            <br/>

            <NavLink to= '/Products'> Products </NavLink>

            <br/>
            <br/>

            <NavLink to= '/UserDetails'> UserDetails </NavLink>

        </nav>
        

    </div>
  )
}
   
export default NavBar