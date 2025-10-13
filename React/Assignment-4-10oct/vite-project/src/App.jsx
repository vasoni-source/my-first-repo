import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Common-component/Navbar";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import { useEffect, useState } from "react";
import Login from "./Pages/Login";
import EditProduct from "./Pages/EditProduct";
import { UserContext } from "./context/user";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const handleCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  useEffect(() => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    setUser({ username, password });
    console.log("user from app :", user);
     if (username && password && username !== "" && password !== "") {
    setUser({ username, password });
    setIsLogin(true);
    console.log("logged in user");
  } else {
    setIsLogin(false);
  }
    if (isLogin == true) {
      console.log("logged in user");
    }
  }, [isLogin]);
  return (
    <BrowserRouter>
      <Navbar />
      <UserContext.Provider value={{ user, isLogin }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<Home handleCart={handleCart} />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/product/:id/edit" element={<EditProduct />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
