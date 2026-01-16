import Link from "next/link";
export default async function Comment({params}) {
  console.log("params",await params)

    const {id,commentId} = await params;
  return (
    <div>
      <h1>Comment no {commentId} on page {id}</h1>
    </div>
  );
}