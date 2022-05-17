import React, { useState } from "react";

// function FCoffee (props){
//     <p>Hello {props.firstName}</p>

function FCoffee ({firstName}){
    const [count, setCount] = useState(0)   // HOOK to declare a state
    const handleClick = () => {             // function to change the state
        setCount(count + 1)                 // use the state method setCount to change the state
    }
    return (
        <>
            <h1>Coffee List (FC)</h1>
            <p>Hello {firstName}</p>   
            <p>You clicked the button {count} times.</p>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default FCoffee;