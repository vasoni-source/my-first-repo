
interface ApiResponse {
 userId:number,
 id:number,
    title:string,   
    completed:boolean
}

const fetchData = async()=>{
try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
        throw new Error(`Network response was not ok ${response.statusText}`);
    }
    const data:ApiResponse = await response.json();
    console.log("Data received:", data);
} catch (error:any) {
   
}
}