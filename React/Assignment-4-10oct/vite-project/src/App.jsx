// import { useState } from 'react'
// import './App.css'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Home from './Pages/Home'
// import Product from './Pages/Product'
// import Navbar from './Common-component/Navbar'

// function App() {

//   return (
//     <div>
//       <BrowserRouter>
//       <Navbar/>
//       <Routes>
//       <Route path="/" element={<Home/>} />

//         {/* <Route path="/Home" element={<Home/>} /> */}
//         <Route path="/Home/:id" element={<Product />} />
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Common-component/Navbar';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Product from './Pages/Product';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* <Route path="/" element={<h1>Hello</h1>} /> */}
        <Route path="/" element={<Home/>} />
        <Route path="/Home/product/:id" element={<Product />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Cart" element={<Cart/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
