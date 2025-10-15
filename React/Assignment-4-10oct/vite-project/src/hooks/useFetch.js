import { useState, useEffect } from "react";
export const useFetch = async({
  method = "GET",
  body = null,
  headers = {},
  url = "products",
}) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const initialState = {
//     data: null,
//     isloading: "false",
//     error: null,
//   };
//   const FetchReducer = (state, action) => {
//     switch (action.type) {
//       case "fetchStart":
//         return { ...state,isloading:true,error:null };
//       case "fetchSuccess":
//         return { ...state,isloading:false,data:action.payload };
//       case "fetchError":
//         return {...state,isloading:false,error:action.payload};
//       default:
//         return state;
//     }
//   };
//   const [state, dispatch] = useReducer(FetchReducer, initialState);

//   useEffect(() => {
//     const fetchData = async () => {
    //   console.log("++++++");
    //   setLoading(true);
    //   setError(null);
    // dispatch({type:"fetchStart"})
    //   try {
        const res = await fetch(`http://localhost:4000/${url}`, {
          method,
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          //   body: body ? JSON.stringify(body.formInfo) : null
          // body: JSON.stringify(body),
          body,
        });
        const data = await res.json();
        // console.log("result from usefetch", result);
        // setData(result);
        // dispatch({type:"fetchSuccess",payload:result})
        // console.log("data from usefetch", data);
    //   } catch (error) {
    //     console.log("error from usefetch",error)
        // setError(error);
        // dispatch({type:"fetchError",payload:error})
    //   } finally {
        // setLoading(false);
    //   }
    // };
    // fetchData();
//   }, [method, url, body]);
  return data;
};
