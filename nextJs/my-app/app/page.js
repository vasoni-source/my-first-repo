import Image from "next/image";
import Link from "next/link";
import Test from "./_components/test";

export default function Home() {
  return (
    <div>
      <Test/>
      <h1>Technical agency</h1>
      <p>
        <Link href="/about">About</Link>{" "}
      </p>
      <p>
        <Link href="/services">Services</Link>
      </p>
      <p>
        <Link href="/blog">Blog</Link>
      </p>
       <p>
        <Link href="/posts">Posts</Link>
      </p>
       <p>
        <Link href="/todos">Todos</Link>
      </p>
    </div>
  );
}
