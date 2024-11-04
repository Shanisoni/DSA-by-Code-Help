import React from 'react'

function Api() {

    fetch('https://jsonplaceholder.typicode.com/posts')
    .them(  (response) => {
        
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

export default Api