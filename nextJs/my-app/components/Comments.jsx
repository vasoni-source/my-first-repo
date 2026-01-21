"use client"

export default function Comments() {
  // if(typeof window === "undefined"){
  //    return (
  //   <div>500 comments client</div>
  // )
  // }
 
  // return <div>500 comments server {Math.random()}</div>
  // return <div>500 comments server {Date.now()}</div>
  return <div>500 comments server {Date.now() ?"5":"10"}</div>
}
