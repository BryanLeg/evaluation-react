import React from 'react'

const FormList = ({ nameList }) => {
    return (
        <ul>
            {nameList.map(person => {
                const { id, name } = person;
                return <h3 key={id}>{name}</h3>
            })}
        </ul>
    )
}

export default FormList