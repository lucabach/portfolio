export const projects = [

  {
    id: "clinical-data-dashboard",
    title: "Clinical Data Dashboard",
    shortDescription:
      "Privacy-aware clinical dashboard for cohort-level and patient-level data analysis.",
    description:
      "Designed and implemented a full-stack, privacy-aware clinical data dashboard for the Swiss HIV Cohort Study at the University of Zurich. The system enables interactive filtering, aggregation, and export of patient- and cohort-level data. The project involved optimizing SQL queries and REST API endpoints, implementing role-based access control, and building a dynamic frontend with reusable components and interactive visualizations.",
    image: "/projects/dataDashboard.png",
    tech: ["Django", "Python", "SQL", "REST APIs", "Vue.js"],
  },

  {
    id: "mapsonal",
    title: "Mapsonal – Route Comparison App",
    shortDescription:
      "Full-stack web app for comparing travel modes by time, cost, and CO₂.",
    description:
      "Developed at IVIA Lab (ETH Zurich), Mapsonal is a full-stack web application that compares travel modes based on time, cost, and CO₂ emissions. The project focused on API integration, data visualization, and accessibility. It integrates multiple external APIs including GraphHopper, OJP, and Nominatim to provide multimodal route analysis.",
    image: "/projects/mapsonal.png",
    tech: ["React", "TypeScript", "Express.js", "Docker", "Leaflet"],
  },

  {
    id: "deep-learning-research",
    title: "Deep Learning Research Projects",
    shortDescription:
      "Research projects across NLP, audio, GNNs, RL, and generative models.",
    description:
      "A collection of deep learning projects developed at the Distributed Computing Group at ETH Zurich. The work involved training and evaluating CNNs, transformers, graph neural networks, GANs, VAEs, and reinforcement learning agents across diverse domains including NLP, audio processing, graph learning, and generative modeling. Projects leveraged GPU clusters, SLURM, and cloud resources such as Google Colab for scalable training.",
    image: "/projects/hodl.jpg",
    tech: ["PyTorch", "Python", "SLURM", "GPU Computing", "Deep Learning"],
  },

  {
    id: "epfl-data-science-lab",
    title: "Sustainable Food Analytics Platform",
    shortDescription:
      "Large-scale data analysis of campus food consumption for sustainability research.",
    description:
      "As a Research Assistant at the Data Science Lab at EPFL, I analyzed over 4 million campus food transactions using pandas and NumPy. The project involved feature engineering on meal composition, pricing, and demographics, and applying linear and regression models to study sustainable food choices. I extended the post-thesis analysis pipeline with improved visualizations and predictive modeling using scikit-learn to support data-driven sustainability interventions.",
    image: "/projects/megabites.jpg",
    tech: ["Python", "pandas", "NumPy", "scikit-learn", "Data Science"],
  },
    {
    id: "portfolio-website",
    title: "This website",
    shortDescription:
      "A modern portfolio website built with the latest web frameworks.",
    description:
      "This website was built as a personal engineering project to explore the most up-to-date and novel web technologies in modern full-stack development. It uses Next.js App Router, TypeScript, and Tailwind CSS, with an architecture focused on scalability, performance, and clean code structure. The project serves both as a personal portfolio and as a technical playground for experimenting with modern frameworks, AI-assisted development workflows, and production-grade frontend architecture.",
    image: "/projects/portfolio.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React", "AI-assisted dev"],
  },
];
