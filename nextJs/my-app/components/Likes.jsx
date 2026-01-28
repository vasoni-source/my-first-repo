"use client"

import { useState } from "react"

export default function Likes() {
    const [likes,setLikes] = useState(0);
  return (
    <div onClick={()=>setLikes((prev)=>prev+1)} className="cursor-pointer"> {likes} likes</div>
  )
}
