import { useContext } from "react"
import {userContext} from "./componentA"

function Component4(){

    const user = useContext(userContext)

    return(

        <>
            <h1>Component4</h1>
            <h2>Bye {user}</h2>
        </>
    )

}

export default Component4