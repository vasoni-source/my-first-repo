import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
// import { UserContext } from "../context/User";
// ----------------------------------------------------------------
import { allProduct ,singleProduct} from "../features/Product/productSlice";
import { useSelector, useDispatch } from 'react-redux'
// ------------------------------------------------------------------
import { useFetch } from "../hooks/useFetch";
export default function Home({ handleCart }) {
  // const { isLogin } = useContext(UserContext);
  // const { state,dispatch } = useContext(UserContext);
  // ----------------------------------------------
  const allProducts = useSelector((state)=>state.product.allProduct);
  const dispatch = useDispatch();
  // ----------------------------------------------
  // console.log("product from home",state?.allProduct);
  // const [data, setData] = useState(null);
  const [message, setMessage] = useState("");
  const navigator = useNavigate();
  const handleNavigate = (item) => {
    // navigator(`/products/${id}`, { state: { product: data } });
    dispatch(singleProduct(item));
    navigator(`/products/${item.id}`);


  };
  const handleChange = (product) => {
    // if (isLogin) {
      handleCart(product);
      console.log("product from home", product);
    // } else {
      // setMessage("Please login to add items to cart");
    // }
  };
useEffect(()=>{
  console.log("PPpppp")
  const fetchData = async()=>{
    const res = await useFetch({url:"products"});
    console.log("response from fetcdata fn home",res)
    // setData(res)
    // --------------------------------------------
    // dispatch({type:"fetchAllProduct",payload:res})
    dispatch(allProduct(res));
    // --------------------------------------------
  }
  fetchData();
},[])
// console.log("datafromhome",data);

  // const {data,loading,error} = useFetch({url:"products"});
  
  //  useFetch({}).then((res)=>{setData(res)});
  // console.log("data from home",data1);
  // const [url, setUrl] = useState("");
  // const method="GET"
 
  // useEffect( async()=>{
  //   const result =  await useFetch()
  //   setData(result)
  // })
  // console.log("===",data)
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
      {allProducts?.map((item) => (
        <div className="home-card" key={item.id}>
          <img src={item.images[0]} alt="" className="home-card-img" />
          <div className="home-cart-content">
            <p className="home-cart-title">{item.title}</p>
            <p
              className="home-cart-description"
              onClick={() => handleNavigate(item)}
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
