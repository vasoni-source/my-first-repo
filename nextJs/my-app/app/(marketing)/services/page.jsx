import Link from "next/link";
export const metadata = {
  title:"Services"
}
export default function Services() {
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
