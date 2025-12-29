import axios from "axios";
import type {AxiosResponse} from "axios";
// axios.get("https://api.example.com/data")
//   .then(response => {
//     console.log("Data received:", response.data);
//   })
//   .catch(error => {
//     console.error("Error fetching data:", error);
//   });

interface ApiResponse {
 userId:number,
 id:number,
    title:string,   
    completed:boolean
}

const fetchData = async()=>{
try {
    const response: AxiosResponse<ApiResponse> = await axios.get("https://api.example.com/data");
    const data = response.data;
    console.log("Data received:", data);
} catch (error:any) {
    if (axios.isAxiosError(error)) {
        console.error("Axios error fetching data:", error.message);
    } else {
        console.error("Unexpected error:", error);
    }
}
}
fetchData();