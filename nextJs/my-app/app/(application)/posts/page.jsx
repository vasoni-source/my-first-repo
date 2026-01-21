"use client"

import { useEffect, useState } from "react"

export default function page() {
    const [posts,setPosts] =useState([]);
    useEffect(()=>{
        async function fetchData (){
            const response =await  fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data);
        }
        fetchData();
    })
  return (
    <div>
        {posts.map((post)=>(
            <h2 key={post.id}>{post.title}</h2>
        ))}
    </div>
  )
}
