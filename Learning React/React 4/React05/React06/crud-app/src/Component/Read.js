import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Read() {

  function getData() {
    axios.get('https://6729ac1e6d5fa4901b6de2b6.mockapi.io/crud')
    .then( (response) => {
      console.log(response.data)
    })
  }
  return (
    <>
    <div className='row'>
      <div className='col-md-12'>
        <table className='table table-bordered table-striped table-dark table-hover' >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Edit</th>
              <th>DELETE</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>30</td>
              <td>shanisoni7083@gmail.com</td>
              <td>Edit </td>
              <td>Delete</td>
            </tr>

            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>30</td>
              <td>shanisoni7083@gmail.com</td>
              <td>Edit </td>
              <td>Delete</td>
            </tr>

            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>30</td>
              <td>shanisoni7083@gmail.com</td>
              <td>Edit </td>
              <td>Delete</td>
            </tr>

            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>30</td>
              <td>shanisoni7083@gmail.com</td>
              <td>Edit </td>
              <td>Delete</td>
            </tr>

          </tbody>
        </table>
      </div>
        
     
        
    </div>
    </>
  )
}

export default Read