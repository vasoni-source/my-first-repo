import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
// import './Home.css';
import "./Product.css";
export default function Product() {
  const { id } = useParams();
  const location = useLocation();
  const updatedProduct = location.state?.updatedProduct;
  const allProducts = location.state?.product || [];
  let result = allProducts.find((item) => item.id === id);
  if (updatedProduct) {
  result = updatedProduct;
}
  // useEffect(() => {
  //   if (updatedProduct) {
  //     result = updatedProduct;
  //   }
  // },[]);
  console.log("updated product from product",updatedProduct)
  console.log(result);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });
  const navigator = useNavigate();
  const handleEditClick = () => {
    navigator(`/product/${id}/edit`, { state: { formData: formData } });
  };

  useEffect(() => {
    if (result) {
      setFormData({
        title: result.title,
        description: result.description,
        price: result.price,
      });
    }
  }, [result]);

  return (
    <div className="product">
      {result ? (
        <div className="product-content">
          <img src={result.images[0]} alt="" className="product-img" />
          <div>
            <p className="product-title">{result.title}</p>
            <p className="product-description">{result.description}</p>
          </div>
          <div className="product-price-btn">
            <p className="product-price">${result.price}</p>
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
