import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Create() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false); // State to show success message

  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://6729ac1e6d5fa4901b6de2b6.mockapi.io/crud', {
        Employee_name: name,
        Employee_Age: age,
        Employee_Email: email,
      })
      .then(() => {
        setSubmitted(true); // Show success message
        setName(''); // Clear input fields
        setAge('');
        setEmail('');
        setTimeout(() => setSubmitted(false), 3000); // Hide message after 3 seconds
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
      });
  };

  return (
    <Container>
      <div className='row'>
        <div className='col-md-4'>
          <div className='bg-primary text-white p-3'>
            <h1>Create Database</h1>
          </div>
          {submitted && (
            <div className="alert alert-success mt-3" role="alert">
              Data submitted successfully!
            </div>
          )}
           <div className=' mb-2 mt-2'>
            <Link to='/'>
              <button className='btn btn-primary'>View the Database </button>
            </Link>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='form-group mt-3'>
              <label>Enter your Name</label>
              <input
                type='text'
                placeholder='Name'
                className='form-control'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className='form-group mt-3'>
              <label>Enter your Age</label>
              <input
                type='number'
                placeholder='Age'
                className='form-control'
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <div className='form-group mt-3'>
              <label>Enter your Email</label>
              <input
                type='email'
                placeholder='Email'
                className='form-control'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <input type='submit' value='Submit' className='btn btn-primary mt-3' />
          </form>

          <div className='mt-3'>
            <strong>Preview:</strong>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Email: {email}</div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Create;
