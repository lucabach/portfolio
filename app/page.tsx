import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import { education, experience } from "@/data/experience";
import Skillset from "@/components/Skillset";
import Contact from "@/components/Contact";



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

      

    {/* Skillset */}
    <section className="mb-16">
    <Skillset />
    </section>


      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold mb-16">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

{/* Timeline Section */}
    <section>
      <h2 className="text-3xl font-bold mb-16">Experience</h2>
        <Timeline left={education} right={experience} />
    </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-3xl font-bold mb-16">Get in Touch</h2>
        <Contact />
      </section>

    </main>
  );
}
