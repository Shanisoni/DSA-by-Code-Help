import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Read() {
  const [APIdata, setAPIdata] = useState([]);

  // Function to fetch data from API
  function getData() {
    axios.get('https://6729ac1e6d5fa4901b6de2b6.mockapi.io/crud')
      .then((response) => {
        setAPIdata(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  // Call getData when the component is mounted
  useEffect(() => {
    getData();
  }, []);  // Empty dependency array ensures this runs only once

  return (
    <>
      <div className='row'>
        <div className='col-md-12'>
          <div className=' mb-2 mt-2'>
            <Link to='/Create'>
              <button className='btn btn-primary'>Create a New Database</button>
            </Link>
          </div>
          <table className='table table-bordered table-striped table-dark table-hover'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {APIdata.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.Employee_name}</td>
                  <td>{item.Employee_Age}</td>
                  <td>{item.Employee_Email}</td>
                  <td>
                    <button className='btn btn-primary'>Edit</button>
                  </td>
                  <td>
                    <button className='btn btn-danger'>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Read;

// import React, { useEffect } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Read() {

//   const [APIdata, setAPIdata] = useState([]);


//   function getData() {
//     axios.get('https://6729ac1e6d5fa4901b6de2b6.mockapi.io/crud')
//     .then( (response) => {
//       setAPIdata(response.data)
//     })
//   }

//   useEffect( () => {
//     getData();
//   } , [])

//   getData();
//   return (
//     <>
//     <div className='row'>
//       <div className='col-md-12'>
//           <div className='bg-primary mb-2 mt-2'>
//          <Link to = '/Create' >
//          <button className='btn btn-primary' > Create a New DataBase </button>
//          </Link>
//           </div>
//         <table className='table table-bordered table-striped table-dark table-hover' >
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Age</th>
//               <th>Email</th>
//               <th>Edit</th>
//               <th>DELETE</th>

//             </tr>
//           </thead>
//           <tbody>
//               { 
//                   APIdata.map( (item) => {
//                     return (
//                       <>
//                       <tr>
//                         <td>{item.id} </td>
//                         <td>{item.Employee_name} </td>
//                         <td>{item.Employee_Age} </td>
//                         <td>{item.Employee_Email} </td>
//                         <td>
//                           <button className='btn btn-primary' > Edit </button>
//                         </td>
//                         <td>
//                           <button className='btn btn-primary' > Delete </button>
//                         </td>
//                       </tr>


//                       </>
                     
//                     )
//                  })
//               }

              
//           </tbody>
//         </table>
//       </div>
        
     
        
//     </div>
//     </>
//   )
// }

// export default Read  fix the issues 
