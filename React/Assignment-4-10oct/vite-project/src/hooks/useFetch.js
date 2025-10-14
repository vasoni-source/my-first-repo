 export const useFetch = async({
    method="GET",
    body=null,
    headers={},
    url="",
})=>{
const res = await fetch(`http://localhost:4000/products/${url}`,{
    method,
    headers:{
          'Content-Type': 'application/json',
        ...headers
},
    body,
})
const data = await res.json();
console.log("data from useFetch",data)
return data;
}