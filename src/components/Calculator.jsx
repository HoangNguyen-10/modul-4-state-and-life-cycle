import { Component, useState } from "react";

const Calcultator = () => {
    const [result, setResult] = useState()

    const handleClick = e => {
        setResult(result.concat(e.target.name))
    }

    const calculate = () => {
        try {

            setResult(eval(result).toString())
        } catch (err) {
            setResult('error')
        }
    }
    return (
        <div>
            <input type="text" placeholder="number 1" /><br />
            <input type="text" placeholder="number 2" />
            <button onClick={calculate}>Result: {result} </button>

            <div className="keypad">
                <button name='+' onClick={handleClick}>+</button>
                <button name='-' onClick={handleClick}>-</button>
                <button name='*' onClick={handleClick}>*</button>
                <button name='/' onClick={handleClick}>/</button>


            </div>
        </div>
    )
}
export default Calcultator