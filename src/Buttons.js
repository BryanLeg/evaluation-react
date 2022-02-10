import React from 'react'

const Buttons = ({ counterValue, setCounterValue }) => {
    return (
        <div className="counter-buttons">
            <button className="btn" onClick={() => setCounterValue(counterValue - 1)}>-1</button>
            <button className="btn" onClick={() => setCounterValue(0)}>reset</button>
            <button className="btn" onClick={() => setCounterValue(counterValue + 1)} > +1</button>
        </div >
    )
}

export default Buttons