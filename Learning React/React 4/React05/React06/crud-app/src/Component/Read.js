import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';

function Read() {

  const [APIdata, setAPIdata] = useState([]);


  function getData() {
    axios.get('https://6729ac1e6d5fa4901b6de2b6.mockapi.io/crud')
    .then( (response) => {
      setAPIdata(response.data)
    })
  }

  useEffect( () => {
    getData();
  } , [])

  getData();
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
              { 
                APIdata.map( (data) => {
                  return (
                    <tr key={data.id}>
                      <td>{data.id}</td>
                      <td>{data.Employee_name}</td>
                      <td>{data.Employee_Age}</td>
                      <td>{data.Employee_Email}</td>
                      <td><button className='btn btn-primary'>Edit</button></td>
                      <td><button className='btn btn-danger'>Delete</button></td>
                    </tr>
                  )
                })




                // <tr>
                //         <td>{item.id} </td>
                //         <td>{item.Employee_name} </td>
                //         <td>{item.Employee_Age} </td>
                //         <td>{item.Employee_Email} </td>
                //         <td>Edit </td>
                //         <td>Delete</td>
                //       </tr>
                 
              }
          </tbody>
        </table>
      </div>
        
     
        
    </div>
    </>
  )
}

export default Read