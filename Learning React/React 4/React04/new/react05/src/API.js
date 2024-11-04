import React from 'react'

function API() {

    fetch('https://jsonplaceholder.typicode.com/posts')
    .them(  (response) => {
        return response.json()
        console.log(response);
    })
  return (
    <div>

        <h1>
            Fetch API
        </h1>
    
    
    </div>
  )
}

export default API