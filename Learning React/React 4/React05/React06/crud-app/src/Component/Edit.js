// import React from 'react'

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




function Edit() {

    const navigate = useNavigate(); 


    const [Name, setName] = useState(0);
    const [Age, setAge] = useState('');
    const [Email, setEmail] = useState('');
    const [id, setId] = useState(false); 

    useEffect( () => {

        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('Name'));
        setAge(localStorage.getItem('Age'));
        setEmail(localStorage.getItem('Email'));


    } , [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios
        .put(`https://6729ac1e6d5fa4901b6de2b6.mockapi.io/crud/${id}`, {

            Employee_name : Name,
            Employee_Age : Age,
            Employee_Email : Email,
            
        })
        
        .then(() => {
            navigate('/')
        });


        // }){
        //   Employee_name: name,
        //   Employee_Age: age,
        //   Employee_Email: email,
        // })
        // .then(() => {
        //   setSubmitted(true); // Show success message
        //   setName(''); // Clear input fields
        //   setAge('');
        //   setEmail('');
        //   setTimeout(() => {
        //     setSubmitted(false); // Hide message after 3 seconds
        //     navigate('/'); // Redirect to the database view after successful submission
        //   }, 3000);
        // })
        // .catch((error) => {
        //   console.error('Error submitting data:', error);
        // });

    }
  
    // const navigate = useNavigate(); // Correct use of useNavigate
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   axios
    //     .post('https://6729ac1e6d5fa4901b6de2b6.mockapi.io/crud', {
    //       Employee_name: name,
    //       Employee_Age: age,
    //       Employee_Email: email,
    //     })
    //     .then(() => {
    //       setSubmitted(true); // Show success message
    //       setName(''); // Clear input fields
    //       setAge('');
    //       setEmail('');
    //       setTimeout(() => {
    //         setSubmitted(false); // Hide message after 3 seconds
    //         navigate('/'); // Redirect to the database view after successful submission
    //       }, 3000);
    //     })
    //     .catch((error) => {
    //       console.error('Error submitting data:', error);
    //     });
    // };

  return (                  
    <Container>
    <div className='row'>
      <div className='col-md-4'>
        <div className='bg-success text-white p-3'>
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
        <form onSubmit={handleUpdate} >
          <div className='form-group mt-3'>
            <label>Enter your Name</label>
            <input
              type='text'
              placeholder='Name'
              className='form-control'
              value={Name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className='form-group mt-3'>
            <label>Enter your Age</label>
            <input
              type='number'
              placeholder='Age'
              className='form-control'
              value={Age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <div className='form-group mt-3'>
            <label>Enter your Email</label>
            <input
              type='email'
              placeholder='Email'
              className='form-control'
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Submit button without Link */}
          <input type='submit' value='Update' className='btn btn-primary mt-3'   />
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