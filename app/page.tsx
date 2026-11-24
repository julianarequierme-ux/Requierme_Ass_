
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-6">
        Hello, my name is Juliana Mira Requierme!
      </h1>

      <p className="text-lg text-gray-600 leading-relaxed mb-8">
        Welcome to my personal website! I am a student
        interested in programming, web development, and
        modern technologies. I enjoy creating projects
        and learning new skills to improve my knowledge.
      </p>

      <Link
        href="/projects"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        See My Projects
      </Link>
    </main>
  );
}
