import Link from "next/link";
export default async function FilePath({params}) {
  console.log("params",await params)

    const {filePath} = await params;
  return (
    <div>
      <h1>This is Filepath page /{filePath?.join("/")} </h1>
    </div>
  );
}