import Navbar from "../assets/components/navbar/navbar"
import Footer from "../assets/components/footer/footer"
import { Link } from "react-router-dom"


function Blogs(){

    const sample = (
        <div>
            <h2>
            Welcome to react master class
            </h2>
        </div>
    )


    return(
       <>

    <Navbar />
            <h1>
              {sample}
            </h1>

        <button> <Link to="/">Exit blog page</Link></button>

           

    <Footer />
       </>
    )

}

export default Blogs