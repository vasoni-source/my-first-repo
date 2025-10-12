import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
// import './Home.css';
import "./Product.css"
export default function Product() {
  const { id } = useParams();
  const location = useLocation();

  const allProducts = location.state?.product || [];
  const result = allProducts.find((item) => item.id === Number(id));

  console.log(result);

  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
  });

  const handleEditClick = () => {
    setOpenForm(!openForm);
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'PUT', // use PUT to update product
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const updatedProduct = await response.json();
      console.log('✅ Updated product:', updatedProduct);

      // close the form and update UI
      setOpenForm(false);
      Object.assign(result, updatedProduct);
    } catch (error) {
      console.error('❌ Error updating product:', error);
    }
  };

  return (
    <div className='product'>
    { !openForm ?
       ( 
         <div className='product-detail'>
         {result ? (
            <div className='product-content'>
              <img src={result.images[0]} alt="" className='product-img'/>
             <div>
             <p className='product-title'>{result.title}</p>
              <p className='product-description'>{result.description}</p>
              
             </div>
              <div className='product-price-btn'>
              <p className='product-price'>{result.price}</p>
              <div className='product-btn'>
                <button className='product-addToCartBtn'>Add to cart</button>
              <button onClick={handleEditClick} className="editCart">Edit</button>
              </div>
              </div>
            </div>
          ) : (
            <p>Product not found</p>
          )}
         </div>): null
    }

      {openForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
          <button type="submit" className='product-submit-btn'>Submit</button>
        </form>
      )}
    </div>
  );
}
