import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Home.css"
export default function Home() {
    const [data,setData] = useState([]);
    const navigator = useNavigate();
    const handleNavigate = (id)=>{
      navigator(`/Home/product/${id}`, { state: { product: data } })
    }
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data.products);
        });
        console.log(data);
    },[])
  return (
    <div className='home-main'>
      {
        data.map((item)=>(
          <div className="home-card" key={item.id} onClick={()=>handleNavigate(item.id)}>
            <img src={item.images[0]} alt=""  className="home-card-img"/>
            <div className='home-cart-content'>
            <p className='home-cart-title'>{item.title}</p>
            <p className='home-cart-description'>{item.description}</p>
            <div className='cart-price-btn'>
            <p className='home-cart-price'>{item.price}</p>
            <button className='cart-btn'>Add to cart</button>
            </div>
            </div>
          </div>
        ))
      }
    
    </div>
  )
}