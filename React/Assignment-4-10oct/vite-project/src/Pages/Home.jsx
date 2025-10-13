import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Home.css"
export default function Home({handleCart}) {
    const [data,setData] = useState([]);
    const navigator = useNavigate();
    const handleNavigate = (id)=>{
      navigator(`/products/${id}`, { state: { product: data } })
    }
    const handleChange = (product)=>{
      handleCart(product);
      console.log("product from home",product)
    }
    useEffect(()=>{
        fetch('http://localhost:4000/products')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log("data from api ",data);
          setData(data);
        });
        console.log(data);
        
    },[])
  return (
    <div className='home-main'>
      {
        data.map((item)=>(
          <div className="home-card" key={item.id} >
            <img src={item.images[0]} alt=""  className="home-card-img"/>
            <div className='home-cart-content'>
            <p className='home-cart-title'>{item.title}</p>
            <p className='home-cart-description' onClick={()=>handleNavigate(item.id)}>{item.description}</p>
            <div className='cart-price-btn'>
            <p className='home-cart-price'>${item.price}</p>
            <button className='cart-btn' onClick={()=>handleChange(item)}>Add to cart</button>
            </div>
            </div>
          </div>
        ))
      }
    
    </div>
  )
}