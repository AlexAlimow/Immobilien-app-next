import Link from "next/link";

export default function About() {
  return (
    <section className="">
      <h2>Text: About us </h2>

      <Link href="/about/me">Learn more about developer</Link>
      <div className="">
        <Link href="/">Back to home</Link>
      </div>
    </section>
  );
}
