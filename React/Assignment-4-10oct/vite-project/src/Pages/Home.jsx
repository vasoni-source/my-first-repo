import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { UserContext } from "../context/user";
import { useFetch } from "../hooks/useFetch";
export default function Home({ handleCart }) {
  const { isLogin } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const navigator = useNavigate();
  const handleNavigate = (id) => {
    navigator(`/products/${id}`, { state: { product: data } });
  };
  const handleChange = (product) => {
    if (isLogin) {
      handleCart(product);
      console.log("product from home", product);
    } else {
      setMessage("Please login to add items to cart");
    }
  };
  const [url, setUrl] = useState("");
  const method="GET"
  useFetch({}).then((res)=>{
    setData(res)
  });
  useEffect( async()=>{
    const result =  await useFetch()
    setData(result)
  })
  console.log("===",data)
  // useEffect(async () => {
  //   fetch("http://localhost:4000/products")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log("data from api ", data);
  //       setData(data);
  //     });
  //   console.log(data);
  
  // }, []);
  return (
    <div className="home-main">
      {message ? (
        <div className="home-cart-toast">
          <p>{message}</p>
          <button className="home-cart-toast-btn">Login</button>
        </div>
      ) : null}
      {data?.map((item) => (
        <div className="home-card" key={item.id}>
          <img src={item.images[0]} alt="" className="home-card-img" />
          <div className="home-cart-content">
            <p className="home-cart-title">{item.title}</p>
            <p
              className="home-cart-description"
              onClick={() => handleNavigate(item.id)}
            >
              {item.description}
            </p>
            <div className="cart-price-btn">
              <p className="home-cart-price">${item.price}</p>
              <button className="cart-btn" onClick={() => handleChange(item)}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
