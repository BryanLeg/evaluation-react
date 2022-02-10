import React, { useEffect, useState } from 'react'

const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';

const APIList = () => {
    const [apiList, setApiList] = useState([])

    const getList = async () => {
        try {
            const response = await fetch(url);
            const list = await response.json();
            setApiList(list)
        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        getList();
    }, [])

    return (
        <section className="api-list">
            <ul>
                {apiList.map(item => {
                    const { id, name, email, body } = item;
                    return (
                        <li key={id}>
                            <h5>{id} - {name}</h5>
                            <h6>{email}</h6>
                            <div className="title-underline"></div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default APIList