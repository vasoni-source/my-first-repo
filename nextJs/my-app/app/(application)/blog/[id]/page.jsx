import Link from "next/link";
import { notFound } from "next/navigation";
export async function generateMetadata({ params }) {
  const { id } = await params;

  return {
    title: `Blog ${id}`,
  };
}

export default async function Blog1({ params }) {
  console.log("params", await params);

  const { id } = await params;
 ;
    if (!/^\d+$/.test(id)) {
    notFound();
  }
  
  return (
    <div>
      <h1>Blog {id} detail </h1>
    </div>
  );
}
