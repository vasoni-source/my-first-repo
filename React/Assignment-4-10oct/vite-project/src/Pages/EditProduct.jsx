import React, { useEffect, useState, useContext } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/User";
import { useFetch } from "../hooks/useFetch";
export default function EditProduct() {
  // const location = useLocation();
  // const formData = location.state?.formData || {};
  const { state, dispatch } = useContext(UserContext);
  const singleProduct = state?.singleProduct;
  console.log("single product from edit", singleProduct);
  const { id } = useParams();
  const navigator = useNavigate();
  // const [formInfo, setFormInfo] = useState(formData);
  const [formInfo, setFormInfo] = useState(singleProduct);
  const handleChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
    // dispatch({type:"fetchSingleProduct",payload:{[e.target.name]:e.target.value}})
    console.log("info", formInfo);
  };
  // const [data, setData] = useState(null);
  useEffect(() => {
    console.log("++++");
    const fetchData = async () => {
      const res = await useFetch({
        url: `products/${id}`,
        method: "PATCH",
        body: JSON.stringify(formInfo),
      });
      console.log("++++++", res);
      // setData(res);
      // dispatchEvent({type:"fetchAllProduct",payload:res})
    };
    fetchData();
  }, [formInfo]);
  // const {data,loading,error} = useFetch({url:`products/${id}`,method:"PATCH",body: JSON.stringify(formInfo)});
  console.log("form info from edit", formInfo);
  // useEffect(() => {
  //   // setFormInfo(data);
  //   Object.assign(formInfo, data);
  // }, [data]);
  //   console.log("+++",data);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // navigator(`/products/${id}`, { state: { formInfo } });
    navigator(`/products/${id}`);
    dispatch({type:"fetchSingleProduct",payload:formInfo})
    console.log("form ingfo from edit product", formInfo);
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
// try {
//   console.log("id from api fetch", id);
//   const response = await fetch(`http://localhost:4000/products/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formInfo),
//   });

//   const updatedProduct = await response.json();
//   console.log("Updated product:", updatedProduct);

//   Object.assign(formInfo, updatedProduct);
//   console.log("updated product from edit ",updatedProduct)
//  navigator(`/products/${id}`, { state: { updatedProduct } });
// } catch (error) {
//   console.error("Error updating product:", error);
// }
