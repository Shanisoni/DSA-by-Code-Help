import React, { useEffect } from 'react'
import { useState } from 'react'

function Api() {

    const [posts , setPosts] = useState([]);

    useEffect( () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
    .then(  (response) => {

      response.json().then( (result) =>{
        setPosts(result);
        console.log(result);
      })
        
        console.log(response);
    })
    })
  return (
    <div>

        <h1>
            Fetch API
            <ul>
              {
                posts.map( (post) => <li key={post.id}>{post.title}</li>) 
              }
            </ul>
        </h1>
    
    
    </div>
  )
}

export default Api