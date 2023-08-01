import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './myComponents/Cart';
import Contact from './myComponents/Contact';
import Material from './myComponents/Material';
import Error from './myComponents/Error'
import Home2 from './myComponents/Home2';


function App() {

  return (
    <div>
      
      <nav>

      <BrowserRouter>
        <Routes className>
          <Route path="/" element={<Home2 />} />
          <Route path="home" element={<Home2 />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="material" element={<Material />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      </nav>
    </div>
  );
}

export default App;
