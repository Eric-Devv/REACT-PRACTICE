import { Link } from "react-router-dom"

function Homepage(){

const message = (
 <div className="card">
    <h2>
        Welcome to our new Blog app
    </h2>

    <p>
            <button>  <Link to="/blogs">next page</Link>    </button>
           
        </p>

 </div>
)


return(

    <div className="home">
        <p>
            {message}
        </p>

        
    </div>
)

}

export default Homepage