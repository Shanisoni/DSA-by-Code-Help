import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <div>

        <h1>
            Welcome To Products Page
        </h1> 
        <nav>
            <Link to={'Shirts'} > Shirt &nbsp; </Link>
          

            <Link to={'Jeans'} > Jeans &nbsp;</Link>
   

            <Link to={'Woolen'} > Woolen &nbsp;</Link>
      
            <Link to={'Shocks'} > Shocks &nbsp;</Link>
        </nav>
        <Outlet/>



    </div>
  )
}

export default Products