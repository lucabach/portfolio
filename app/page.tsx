"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import { education, experience } from "@/data/experience";
import Skillset from "@/components/Skillset";
import Contact from "@/components/Contact";
import TypewriterChar from "@/components/TypewriterChar";
import BackgroundSlideshow from "@/components/BackgroundSlideshow";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">

     {/* Intro */}
<section className="h-screen snap-start flex items-center px-12 relative overflow-hidden">

  {/* Background slideshow */}
  <BackgroundSlideshow
    images={[
      "/slideshow/img3.jpg",
      "/slideshow/img4.jpg",
      "/slideshow/img5.jpg",
      "/slideshow/img6.jpg",
      "/slideshow/img9.jpg",
      "/slideshow/img10.jpg",
    ]}
    interval={3000}
    opacity={0.55}
  />

  {/* Foreground content */}
  <div className="relative z-10 max-w-3xl text-white">

    {/* Title typing */}
    <TypewriterChar
      text="Hi, I’m Luca 👋"
      speed={35}
      className="text-5xl font-bold mb-6"
      cursor={false}
    />

    {/* Subtitle typing */}
    <TypewriterChar
      text="I'm a Computer Science student passionate about the intersection of Machine Learning, healthcare, and sustainability."
      speed={25}
      delay={1000}
      className="text-xl text-white/90"
    />

  </div>
</section>

      {/* Skillset */}
      <section className="h-screen snap-start flex items-center px-12">
        <div className="w-full">
          <Skillset />
        </div>
      </section>

      {/* Projects */}
      <section className="h-screen snap-start flex items-center px-12">
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="h-screen snap-start flex items-center px-12">
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-12">Experience</h2>
          <Timeline left={education} right={experience} />
        </div>
      </section>

      {/* Contact */}
      <section className="h-screen snap-start flex items-center px-12">
        <div className="w-full max-w-4xl">
          <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
          <Contact />
        </div>
      </section>

    </main>
  );
}