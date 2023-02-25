import React, { useState } from 'react'

export default function Calculator() {
    const [number1, SetNumber1] = useState(0)
    const [number2, SetNumber2] = useState(1)
    const [result, setResult] = useState(0)

    const handleAdd = () => {
        setResult(parseInt(number1) + parseInt(number2))
    }

    const handleSub = () => {
        setResult(parseInt(number1) - parseInt(number2))
    }

    const handleMul = () => {
        setResult(parseInt(number1) * parseInt(number2))
    }

    const handleDiv = () => {
        setResult(parseInt(number1) / parseInt(number2))
    }
    return (
        <div>
            <input type="text" value={number1} onChange={e => SetNumber1(e.target.value)} />
            <input type="text" value={number2} onChange={e => SetNumber2(e.target.value)} />
            <p>Result:{result}</p>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSub}>-</button>
            <button onClick={handleMul}>*</button>
            <button onClick={handleDiv}>/</button>
        </div>
    )
}

