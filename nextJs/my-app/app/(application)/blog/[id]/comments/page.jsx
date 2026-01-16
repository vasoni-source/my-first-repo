import Link from "next/link";
export default async function Comments({params}) {
  console.log("params",await params)

    const {id} = await params;
  return (
    <div>
      <h1>All comments on  {id}  </h1>
    </div>
  );
}