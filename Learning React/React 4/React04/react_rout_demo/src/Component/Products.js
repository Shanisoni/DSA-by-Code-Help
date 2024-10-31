import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div>

        <h1>
            Welcome To Products Page
        </h1>
        <nav>
            <Link to={'Shirts'} > Shirt &nbsp; </Link>
            <Link to={'Shirts'} > Jeans &nbsp;</Link>
            <Link to={'Shirts'} > Woolen &nbsp;</Link>
            <Link to={'Shirts'} > Shocks &nbsp;</Link>
        </nav>



    </div>
  )
}

export default Products