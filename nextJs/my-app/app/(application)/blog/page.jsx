"use client";
import Likes from "@/components/Likes";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";

// export const metadata = {
//   title:"Blog"
// }
export default // async
function Blog({ params }) {
 
  return (
    <div>
      <h1>Blog</h1>
      <Link href="blog/1">Blog-1</Link>
      <Link href="blog/2">Blog-2</Link>
      <Link href="blog/3">Blog-3</Link>
      <br />
      
        <Likes/>
     
    </div>
  );
}
