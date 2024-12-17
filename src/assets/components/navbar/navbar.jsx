//import { div } from "framer-motion/client"
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar(){


return(
    <div >
       <header className={styles.header}>
        
       <nav>
           
       <ul>
               
               <li ><a href="#"> Blogs page </a></li>
               <li> <Link to="/blogs"> Home </Link></li>
               <li> <Link to="/products"> Products </Link></li>
               <li><a href=""> services </a></li>
               <li> <Link to="/about"> About </Link></li>

              
               
       </ul>

       </nav>

       <hr></hr>
   </header>    
       
    </div>

 
)


}

export default Navbar