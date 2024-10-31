import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div>

        <h1>
            Welcome To Products Page
        </h1>
        <nav>
            <Link to={'Shirts'} > Shirt </Link>
            <Link to={'Shirts'} > Jeans </Link>
            <Link to={'Shirts'} > Woolen </Link>
            <Link to={'Shirts'} > Shocks </Link>
        </nav>



    </div>
  )
}

export default Products