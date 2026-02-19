import Link from "next/link";

type Project = {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  tech: string[];
};

const colors = [
  "bg-blue-100 text-blue-800",
  "bg-green-100 text-green-800",
  "bg-purple-100 text-purple-800",
  "bg-pink-100 text-pink-800",
  "bg-yellow-100 text-yellow-800",
  "bg-red-100 text-red-800",
  "bg-indigo-100 text-indigo-800",
];

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="group cursor-pointer border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">

        {/* Image */}
        <div className="h-48 bg-gray-200 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-gray-600 mb-3">
            {project.shortDescription}
          </p>

            <div className="flex flex-wrap gap-2">
  {project.tech.map((t, i) => (
    <span
      key={t}
      className={`text-xs px-2 py-1 rounded-full font-medium ${colors[i % colors.length]}`}
    >
      {t}
    </span>
  ))}
</div>
        </div>
      </div>
    </Link>
  );
}
