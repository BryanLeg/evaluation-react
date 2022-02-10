import React, { useState } from 'react'
import FormList from './FormList'

const Form = () => {
    const [name, setName] = useState('')
    const [nameList, setNameList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const NewNameList = [...nameList, { id: new Date().getTime().toString(), name }]
            setNameList(NewNameList)
            setName('')
        }

    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button>Submit</button>
            <FormList nameList={nameList} />
        </form>
    )
}

export default Form