
export const metadata = {
  title: "Projects | Juliana Mira Requierme",
};

const projects = [
  {
    id: 1,
    name: "TripEase",
    description:
      "A travel management website that helps users organize their trips.",
  },
  {
    id: 2,
    name: "Senior Citizen Management System",
    description:
      "A system designed to manage senior citizen information and assistance requests.",
  },
  {
    id: 3,
    name: "Personal Portfolio Website",
    description:
      "A personal website showcasing my information, skills, and projects.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">
        My Projects
      </h1>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {project.name}
            </h2>

            <p className="text-gray-600">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}