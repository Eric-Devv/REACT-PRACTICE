import { useState } from "react";


function Counter(){



const [count, setCount] = useState(0);

const increament = () => {

        setCount(count + 1)
}


return(

    <>
       <p>{count}</p>
       <button onClick={increament}> Increase </button>
    
    </>
)

}

export default Counter;