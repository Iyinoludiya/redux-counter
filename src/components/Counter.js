import React, {useState} from "react";

function Counter(){
    const[counter, setCount]=useState(0)

    const increase = () => {
        let currentCount = counter + 1
        setCount(currentCount)
    }

    const decrease = () => {
        let currentCount = counter - 1
        setCount(currentCount)
    }

    const reset = () => {
        let currentCount = 0
        setCount(currentCount)
    }
    

    return (
        <div>
            <p id="counter-value">Count is: {counter}</p>
            <button id="increase-button" onClick={() => increase()}>Increase Count</button>
            <button id="decrease-button" onClick={() => decrease()}>Decrease Count</button>
            <button id="reset-button" onClick={() => reset()}>Reset Count</button>
        </div>
    ) 
}

export default Counter