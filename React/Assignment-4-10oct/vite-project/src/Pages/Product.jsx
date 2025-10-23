import React, { useContext, useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
// import { UserContext } from "../context/User";
// ----------------------------------------------------
import { singleProduct } from "../features/Product/productSlice";
import { useSelector, useDispatch } from 'react-redux'
// ----------------------------------------------------

// import './Home.css';
import "./Product.css";
export default function Product() {
  const { id } = useParams();
  // const location = useLocation();
    // const {state,dispatch} = useContext(UserContext)
  // const updatedProduct = location.state?.formInfo;
  // -------------------------------------------------------
  const user = useSelector((state)=>state.user.user)
  const product = useSelector((state)=>state.product.singleProduct)
  const isLogin = useSelector((state)=>state.user.isLogin)
   const dispatch = useDispatch();
  // -------------------------------------------------------
  // const updatedProduct = state?.singleProduct;
  // const allProducts = state?.allProduct|| [];
  // -------------------------------------------
    const allProducts = useSelector((state)=>state.product.allProduct)
  // --------------------------------------------
  // const singleProduct = state?.singleProduct ;
  console.log("all poduct from product",allProducts)
  let result = allProducts?.find((item) => item.id === id);
//   if (updatedProduct) {
//   result = updatedProduct;
// }
// -----------------------------------------------------------
  if (product) {
    result = product;
  }

// ------------------------------------------------------------
  // useEffect(() => {
  //   if (updatedProduct) {
  //     result = updatedProduct;
  //   }
  // },[]);
  // console.log("updated product from product",updatedProduct)
  console.log("updated product from product",product)
  console.log("result from product ",result);

  // const [formData, setFormData] = useState({
  //   title: "",
  //   description: "",
  //   price: "",
  // });
  const navigator = useNavigate();

  const handleEditClick = () => {
    console.log("islogin from product",isLogin)
   if(isLogin){
    console.log("islogin from product",isLogin)
    //  navigator(`/product/${id}/edit`, { state: { formData: formData } });
     navigator(`/product/${id}/edit`);

   }
   else{
    navigator("/");
   }
  };

  useEffect(() => {
    if (result) {
      // setFormData({
      //   title: result.title,
      //   description: result.description,
      //   price: result.price,
      // });
      // dispatch({type:"fetchSingleProduct",payload:result});
      // ---------------------------------------------------------
      dispatch(singleProduct(result));
      // ---------------------------------------------------------
    }
  }, [result]);

  return (
    <div className="product">
      {product ? (
        <div className="product-content">
          <img src={product?.images[0]} alt="" className="product-img" />
          <div>
            <p className="product-title">{product.title}</p>
            <p className="product-description">{product.description}</p>
          </div>
          <div className="product-price-btn">
            <p className="product-price">${product.price}</p>
            <div className="product-btn">
              <button className="product-addToCartBtn">Add to cart</button>
              <button onClick={handleEditClick} className="editCart">
                Edit
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}
