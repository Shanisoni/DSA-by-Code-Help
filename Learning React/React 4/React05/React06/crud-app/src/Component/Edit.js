// import React from 'react'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Edit() {
  return (
    <Container>
    <div className='row'>
      <div className='col-md-4'>
        <div className='bg-primary text-white p-3'>
          <h1>Update Database</h1>
        </div>
        {/* {submitted && (
          <div className="alert alert-success mt-3" role="alert">
            Data submitted successfully!
          </div>
        )} */}
        <div className='mb-2 mt-2'>
          <Link to='/'>
            <button className='btn btn-primary'>View the Database</button>
          </Link>
        </div>  
        <form>
          <div className='form-group mt-3'>
            <label>Enter your Name</label>
            <input
              type='text'
              placeholder='Name'
              className='form-control'
            //   value={name}
            //   onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className='form-group mt-3'>
            <label>Enter your Age</label>
            <input
              type='number'
              placeholder='Age'
              className='form-control'
            //   value={age}
            //   onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <div className='form-group mt-3'>
            <label>Enter your Email</label>
            <input
              type='email'
              placeholder='Email'
              className='form-control'
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Submit button without Link */}
          <input type='submit' value='Update' className='btn btn-primary mt-3' />
        </form>

        {/* <div className='mt-3'>
          <strong>Preview:</strong>
          <div>Name: {name}</div>
          <div>Age: {age}</div>
          <div>Email: {email}</div>
        </div> */}
      </div>
    </div>
  </Container>
  )
}

export default Edit