import React, { useEffect, useState } from 'react'
import axios from 'axios'

const HelloWorld = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/hello-world/')
            .then(response => {
                setMessage(response.data.message);
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, [])
    return (
        <>
            <p>{message}</p>
        </>
    )
}

export default HelloWorld