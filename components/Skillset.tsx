import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiC,
  SiCplusplus,
  SiRust,
  SiGo,
  SiScala,
  SiPhp,
  SiR,
  SiKotlin,

  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFlask,
  SiSpringboot,

  SiTailwindcss,
  SiCss3,
  SiHtml5,

  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiRedis,

  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiGitlab,
  SiLinux,
  SiNginx,

  SiAmazon,
  SiGooglecloud,

  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiNumpy,
  SiPandas,

  SiApachespark,
  SiApachekafka,

  SiGraphql,
  SiSwagger,
  SiPostman,

  SiFigma,
  SiAdobe,
  SiVercel,
  SiHeroku,

  SiOpencv,
  SiJupyter,
  SiAnaconda,
  SiLatex,
  SiUnity,
  SiBlender
} from "react-icons/si";

const skills = [
  // Languages
  SiPython, SiJavascript, SiTypescript, SiC, SiCplusplus,
  SiRust, SiGo, SiScala, SiPhp, SiR, SiKotlin,

  // Frontend / Backend
  SiReact, SiNextdotjs, SiVuedotjs, SiNodedotjs, SiExpress, SiDjango, SiFlask, SiSpringboot,

  // Styling
  SiTailwindcss, SiCss3, SiHtml5,

  // Databases
  SiPostgresql, SiMysql, SiSqlite, SiMongodb, SiRedis,

  // DevOps / Tools
  SiDocker, SiKubernetes, SiGit, SiGithub, SiGitlab, SiLinux, SiNginx,

  // Cloud
  SiAmazon, SiGooglecloud,

  // AI / Data
  SiPytorch, SiTensorflow, SiScikitlearn, SiNumpy, SiPandas,

  // Big Data
  SiApachespark, SiApachekafka,

  // APIs / Dev tools
  SiGraphql, SiSwagger, SiPostman,

  // Design / Deployment / Misc
  SiFigma, SiAdobe, SiVercel, SiHeroku,
  SiOpencv, SiJupyter, SiAnaconda, SiLatex, SiUnity, SiBlender
];

const colors = [
  "#3776AB", // Python blue
  "#F7DF1E", // JS yellow
  "#3178C6", // TS blue
  "#00599C", // C++
  "#A8B9CC", // C
  "#239120", // C#
  "#007396", // Java
  "#DEA584", // Rust
  "#00ADD8", // Go
  "#DC322F", // Scala
  "#777BB4", // PHP
  "#276DC3", // R
  "#7F52FF", // Kotlin
  "#61DAFB", // React
  "#000000", // Next.js
  "#42B883", // Vue
  "#339933", // Node
  "#000000", // Express
  "#092E20", // Django
  "#000000", // Flask
  "#6DB33F", // Spring
  "#38BDF8", // Tailwind
  "#1572B6", // CSS
  "#E34F26", // HTML
  "#336791", // PostgreSQL
  "#4479A1", // MySQL
  "#003B57", // SQLite
  "#47A248", // MongoDB
  "#4285F4", // BigQuery
  "#DC382D", // Redis
  "#2496ED", // Docker
  "#326CE5", // Kubernetes
  "#F05032", // Git
  "#181717", // GitHub
  "#FC6D26", // GitLab
  "#FCC624", // Linux
  "#009639", // Nginx
  "#FF9900", // AWS
  "#4285F4", // GCP
  "#0078D4", // Azure
  "#EE4C2C", // PyTorch
  "#FF6F00", // TensorFlow
  "#F7931E", // sklearn
  "#013243", // NumPy
  "#150458", // pandas
  "#E25A1C", // Spark
  "#231F20", // Kafka
  "#E10098", // GraphQL
  "#85EA2D", // Swagger
  "#FF6C37", // Postman
  "#F24E1E", // Figma
  "#FF0000", // Adobe
  "#000000", // Vercel
  "#430098", // Heroku
  "#5C3EE8", // OpenCV
  "#F37626", // Jupyter
  "#44A833", // Anaconda
  "#008080", // LaTeX
  "#000000", // Unity
  "#E87D0D", // Blender
];

export default function Skillset() {
  return (
    <section className="mt-32">
      <h2 className="text-3xl font-bold mb-8">Skillset</h2>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-6">
        {skills.map((Icon, i) => (
          <div
            key={i}
            className="flex items-center justify-center p-4 rounded-xl border bg-white shadow-sm hover:shadow-xl transition hover:scale-110"
          >
            <Icon size={36} style={{ color: colors[i % colors.length] }} />
          </div>
        ))}
      </div>
    </section>
  );
}

