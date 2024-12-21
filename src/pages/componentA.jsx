/* eslint-disable react-refresh/only-export-components */
import { useState, createContext } from "react"
import Component2 from "./componentB"



export const userContext = createContext();


function Component1(){
    const [user, setUser] = useState("eric")


    return(

        <>
            <h1>Component1</h1>
            <h2>Hallo {user}</h2>
            <userContext.Provider value={user}>
            <Component2 />
                
            </userContext.Provider>
            
        </>
    )

}

export default Component1