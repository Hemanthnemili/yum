import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1>Hi This is Hemanth</h1>

      <p>
        <Link href={`/meals/post-1`}>Post 1</Link>
      </p>
    </main>
  );
}
