import Link from "next/link";
import { cookies } from "next/headers";
export const metadata = {
  title:"Services"
}
// export const dynamic = "force-dynamic"
export default async function Services ({searchParams}) {
  const search = await searchParams;
  console.log("search params",search);
  // const myCookies = await cookies();
  return (
    <div>
      <h1>Services Page</h1>
      <p>
        <Link href="/services/web-dev">Web Development</Link>
      </p>
      <p>
        <Link href="/services/app-dev">App Development</Link>
      </p>
     
    </div>
  );
}
