import React, { useState } from 'react'
import Buttons from './Buttons'
const Counter = () => {
    const [counterValue, setCounterValue] = useState(0)

    return (
        <>
            <h1>Counter</h1>
            <h3>{counterValue}</h3>
            <Buttons counterValue={counterValue} setCounterValue={setCounterValue} />
        </>
    )
}

export default Counter