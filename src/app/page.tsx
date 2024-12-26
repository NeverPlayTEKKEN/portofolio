import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <p>Naoki</p>
        <p>Okamoto</p>
      </section>
      <section>
        <Link href="/sample-site" >Sample Site</Link>
        <Link href="/with-ts" >Playing With TypeScript</Link>
        <Link href="/" >About Me</Link>
        <Link href="/" >Work History</Link>
      </section>
    </main>

  );
}
