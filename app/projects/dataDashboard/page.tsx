import { projects } from "@/data/projects";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return <div className="p-8">Project not found</div>;
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-xl mb-6"
      />

      <p className="text-lg text-gray-700 mb-6">
        {project.description}
      </p>

      <div className="flex gap-2 flex-wrap">
        {project.tech.map((t) => (
          <span key={t} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
            {t}
          </span>
        ))}
      </div>
    </main>
  );
}
