import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blogs  from './pages/Blogs';
import Homepage from './pages/homepage';
import About from './pages/about';
import Products from './pages/products';

function App(){

  return(
    <BrowserRouter>
      <Routes>
          <Route path= "/" element = {<Homepage/>}/>
          <Route path="blogs/" element={<Blogs />} />
          <Route path="about/" element={<About />} />
          <Route path="products/" element={<Products />} />
          
        
      </Routes>
    </BrowserRouter>
  );

}


export default App