import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blogs  from './pages/Blogs';
import Homepage from './pages/homepage';
import About from './pages/about';
import Products from './pages/products';
//import Student from './pages/prop';
import Button from './pages/button';
import Counter from './pages/counter';
import Component from './pages/handler';
import Component1 from './pages/componentA';



function App(){

  return(
    <BrowserRouter>
      <Routes>
          <Route path= "/" element = {<Homepage/>}/>
          <Route path="blogs/" element={<Blogs />} />
          <Route path="about/" element={<About />} />
          <Route path="products/" element={<Products />} />
          <Route path="test/" element={<Button />} />
          <Route path="counter/" element={<Counter />} />
          <Route path="comp/" element={<Component />} />
          <Route path="samp/" element={<Component1 />} />
          
        
      </Routes>
    </BrowserRouter>
  );

}


export default App