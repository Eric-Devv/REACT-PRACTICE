import { Link } from "react-router-dom"
import Navbar from "../assets/components/navbar/navbar"

function About(){


const about_content = (
    <>
    
    <h1> This is the about section of this application !!!!</h1>
    
    </>
)

return(
   
   <>
    <Navbar />
   <p>
        {about_content}
    </p>
    <p>
        <button>  <Link to="/blogs"> Back to blogs page </Link> </button>
          
        </p>
        
        </>

)





}

export default About