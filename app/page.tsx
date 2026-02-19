import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen p-8">

      {/* Intro Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Hi, I’m Luca 👋</h1>
        <p className="text-lg text-gray-600 max-w-xl">
          I'm a Computer Science Student passionate about the intersection of Machine Learnig and healthcare / sustainability.
        </p>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

    </main>
  );
}
