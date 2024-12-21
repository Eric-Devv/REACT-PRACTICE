//import { li } from "framer-motion/client";
//import {useState, useEffect} from "react";
// HOW TO UPDATE OBJECTS IN STATE
/*function Component(){

   const [car, setCar] = useState({year:2005, name:"toyota", model:"prado"})
 
   const handle_year = (e) => {
        setCar(c => ({...c, year: e.target.value}))
    }
    const handle_name = (e) => {
        setCar(c => ({...c, name: e.target.value}))
    }
    const handle_model = (e) => {
        setCar(c => ({...c, model: e.target.value}))
    }


return(

    <>
    <p>i love a car that looks like a: {car.year} {car.name} {car.model}</p>
     <input type="number" value = {car.year} onChange={handle_year}/>   
     <input type="text" value = {car.name} onChange={handle_name}/>
     <input type="text" value = {car.model} onChange={handle_model}/>
    </>

)

}

export default Component
*/


// HOW TO UPDATE ARRAYS IN STATE

/*
function Component(){

 const [foods, setFoods] = useState(["apple", "orange", "banana"]);  
 
function handle_add_food(){
    const add = document.getElementById("foodinput"). value; 
    document.getElementById("foodinput"). value = "";

    setFoods(f => ([...f, add]))

}

function handle_remove_food(index){
  
    setFoods(foods.filter((_, i) => i !== index));

}




 
 return(
 
     <>
        <h2>list of food</h2>
        <ul>
            {foods.map((food, index) => <li key={index} onClick={() => handle_remove_food(index)}>{food}</li>)}
        </ul>
        <input type="text" id="foodinput" placeholder="enter food name" />
        <button onClick={handle_add_food}>add food</button>
     </>
 
 )
 
 }
 
 export default Component


*/







/*
useEffect() => react hook that tells react to do some code when
                this code re-renders whereby this component mounts
                the state of a value.

                or to do this code when the usestate variable changes

useEffect(function, [dependancies])

uses:
in event listeners.
dom manipulation
real-time update(subscription)
fetching data from an api
cleans up when a component unmounts

*/
/*
function Component(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = (count);
    }, [count]);

    function addition(){
        setCount(c => c + 1);
    
    }
    
    
    return(
    
        <>
          <p>count: {count}</p>
          <button onClick={addition}> add </button>
        </>
    
    )
    
    }
    
    export default Component

*/





// useContext = React hook that allows you to share values
//              between multiple levels of components
//              without passing props through each level


import Component1 from "./componentA";

function Component(){
    
    
    
    return(
    
        <>
         <Component1 />
        </>
    
    )
    
    }
    
    export default Component
