import React, { useEffect, useState } from "react";

// function FCoffee (props){
//     <p>Hello {props.firstName}</p>

// function FCoffee ({firstName}){
//     const [count, setCount] = useState(0)   // HOOK to declare a state
//     const handleClick = () => {             // function to change the state
//         setCount(count + 1)                 // use the state method setCount to change the state
//     }
//     return (
//         <>
//             <h1>Coffee List (FC)</h1>
//             <p>Hello {firstName}</p>   
//             <p>You clicked the button {count} times.</p>
//             <button onClick={handleClick}>Click Me</button>
//         </>
//     )
// }

function FCoffee ({firstName}){
    const [coffeeList, setCoffeeList] = useState()  //undefined so we can get the list
    const [temperature, setTemperature] = useState('hot')
    
    // const getIcedCoffee = async () => {
    //     const res = 
    // }

    useEffect(()=>{
        fetch(`https://api.sampleapis.com/coffee/${temperature}`)
            .then(res => res.json())
            // .then(data => setCoffeeList(data)) same as bellow because it is data on both sides
            .then(setCoffeeList)
            .catch(err => console.error(err))
        // return () => { 
            
        // }
    },[temperature])
    
    const handleClick = () => {
        //fetch cold coffee api
        temperature === 'hot' 
        ? setTemperature('iced')
        : setTemperature('hot')
    }

    return (
        <>
            <h1>Coffee List</h1>
            <p>Hello {firstName}. How would you like your coffee today?</p>
            <button onClick={handleClick}>Get {temperature === 'iced'? 'Hot' : 'Iced'} Coffee list</button>
            {!coffeeList
             ? <h2>Ready to load coffee list</h2>
             : <>
                <h3>Coffees</h3>
                <ul>
                {coffeeList.map(coffee => {
                    return <li key={coffee.id}>{coffee.title}</li>
                })}
                </ul>
               </>
            }
        </>
    )
}

export default FCoffee;