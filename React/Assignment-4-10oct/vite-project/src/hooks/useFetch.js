 import { useState ,useEffect} from "react";
 export const useFetch = ({
    method="GET",
    body=null,
    headers={},
    url="",
})=>{
    const [data,setData]=useState({})
    useEffect(()=>{
        const fetchData = async()=>{
            console.log("++++++");
            const res = await fetch(`http://localhost:4000/${url}`,{
                method,
                headers :{
                    'Content-Type': 'application/json',
                    ...headers
                },
                body,
               

            })
            const result = await res.json();
            console.log("result from usefetch",result);
            setData(result);
            console.log("data from usefetch",data);
            
        }
        fetchData();
        
    },[method,url,body])
    return {data};
}
