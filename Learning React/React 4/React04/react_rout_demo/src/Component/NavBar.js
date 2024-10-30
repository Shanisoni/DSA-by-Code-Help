import React from 'react'
import { Link }  from 'react-router-dom';
// import './.css';

function NavBar() {
  return (
    <div>
        <nav>
            <Link to= '/'  > Home </Link>
            <br/>
            <br/>

            <Link to= '/About'> About </Link>

            <br/>
            <br/>

            <Link to= '/Contact'> Contact </Link>
            <br/>
            <br/>
        </nav>
        

    </div>
  )
}

export default NavBar