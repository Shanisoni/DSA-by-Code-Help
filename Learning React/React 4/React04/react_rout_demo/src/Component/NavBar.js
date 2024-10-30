import React from 'react'
import { NavLink }  from 'react-router-dom';
// import './.css';

function NavBar() {
  return (
    <div>
        <nav>
            <NavLink to= '/'  > Home </NavLink>
            <br/>
            <br/>

            <NavLink to= '/About'> About </NavLink>

            <br/>
            <br/>

            <NavLink to= '/Contact'> Contact </NavLink>
            <br/>
            <br/>
        </nav>
        

    </div>
  )
}

export default NavBar