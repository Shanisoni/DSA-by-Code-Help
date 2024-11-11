import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GetAxios() {
    const [Mydata, setData] = useState([]);

    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(() =>  {
        axios.get(baseUrl).then((response) => {
            setData(response.data); 
        });
    }, []); // Dependency array to run this effect only once

    return (
        <>
            <h1>Posts</h1>
            <ul>
                {Mydata.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default GetAxios;
