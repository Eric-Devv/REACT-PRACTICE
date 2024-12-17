import Navbar from "../assets/components/navbar/navbar";
import productpic from "../assets/images/demo.jpg";


function Products(){


return(
<>

<Navbar />

    <div className="card">
        <img src={productpic} alt="product pic" /> 
        <h2>Product</h2>
        <p>This is a demo product</p>

    </div>






</>

)


}

export default Products;