import React from 'react'

const FormList = ({ nameList, removeItem }) => {


    return (
        <ul>
            {nameList.map(person => {
                const { id, name } = person;
                return <h3 key={id} onClick={() => removeItem(id)}> {name}</h3>
            })}
        </ul >
    )
}

export default FormList