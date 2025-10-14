import React, { useEffect, useState } from "react";
import "./Cart.css";
export default function Cart({ cartItems }) {
  console.log("product for cart", cartItems);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleTotal = () => {
    const arr = cartItems.map((item) => item.price);
    console.log("arr", arr);
    // const total = arr.reduce((acc, curr) => acc + curr,0);
    const total = arr.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue),
      0
    );
    console.log("---", total);
    setTotalPrice(total);
    console.log("total price :", totalPrice);
  };
  useEffect(() => {
    handleTotal();
  }, [cartItems]);
  return (
    <div className="cart-main-div">
          <h2>Shopping cart</h2>
      {cartItems.map((item) => (
        <div className="cart" key={item.id}>
          <img src={item.images[0]} alt="" className="cart-img" />
          <div className="cart-title-desc">
            <p className="cart-title">{item.title}</p>
            <p className="cart-description">{item.description}</p>
          </div>
          <p className="cart-price">${item.price}</p>
        </div>
      ))}
      <div className="cart-total">
        <h3>Total Amount : </h3>
        <h3>${totalPrice}</h3>
      </div>
    </div>
  );
}
