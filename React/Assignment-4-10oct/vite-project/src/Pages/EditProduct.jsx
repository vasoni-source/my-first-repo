import React, { useState } from "react";
import { useLocation, useParams,useNavigate} from "react-router-dom";
export default function EditProduct() {
  const location = useLocation();
  const formData = location.state?.formData || {};
  const { id } = useParams();
  const navigator = useNavigate();
  const [formInfo, setFormInfo] = useState(formData);
  const handleChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
    console.log("info", formInfo);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("id from api fetch", id);
      const response = await fetch(`http://localhost:4000/products/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formInfo),
      });

      const updatedProduct = await response.json();
      console.log("Updated product:", updatedProduct);
     
      Object.assign(formInfo, updatedProduct);
      console.log("updated product from edit ",updatedProduct)
     navigator(`/products/${id}`, { state: { updatedProduct } });
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formInfo.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={formInfo.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          value={formInfo.price}
          onChange={handleChange}
        />
        <button type="submit" className="product-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
