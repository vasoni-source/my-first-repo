"use client"

import Likes from "@/components/Likes";
import Views from "@/components/Views";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import Comments from "@/components/Comments";
// export async function generateMetadata({ params }) {
//   const { id } = await params;

//   return {
//     title: `Blog ${id}`,
//   };
// }
// export const dynamicParams = false;
// export const revalidate = 5;
// export async function generateStaticParams() {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/todos"
//   );
//   const data = await response.json();

//   return data.map(({ id }) => ({
//     id: id.toString(),
//   }));
// }
export default function Blog1({ params }) {
  // console.log("params", await params);

  // const { id } = await params;
 console.log("like")
console.log(localStorage)
console.log(window)
 
  //   if (ids.includes(id)) {
  //   notFound();
  // }
  
  return (
    <div>
      {/* <h1>Blog {id} detail </h1> */}
      <h2>{new Date().toLocaleString()}</h2>

     {/* <Suspense fallback="Loading">
       <Views/>
     </Suspense> */}
      <div onClick={()=> console.log("Like button clicked")
      }>
        <Likes/>
      </div>
  
      <Comments/>
      <Views/>
    </div>
  );
}
