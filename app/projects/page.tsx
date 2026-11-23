import Link from "next/link";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        Hello, my name is Juliana Mira Requierme
      </h1>

      <p className="mt-4">
        I am an Information Technology student who enjoys learning
        about technology and programming.
        I want to improve my skills and become a successful developer.
      </p>

      <Link href="/projects" className="text-blue-600 underline">
        See my projects
      </Link>
    </main>
  );
}