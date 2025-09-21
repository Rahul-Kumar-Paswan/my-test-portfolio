// src/components/Projects.jsx
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const allProjects = [
    {
      title: "CI/CD Pipeline Automation",
      description:
        "Automated build, test, and deployment pipelines using GitHub Actions and Docker. Reduced release time by 40%.",
      tech: ["GitHub Actions", "Docker", "Kubernetes"],
      github: "https://github.com/your-username/cicd-pipeline",
      live: "https://your-demo-link.com",
    },
    {
      title: "Cloud Cost Optimizer",
      description:
        "Developed a tool to analyze and reduce AWS costs by automating unused resource detection and scheduling.",
      tech: ["AWS", "Terraform", "Node.js"],
      github: "https://github.com/your-username/cloud-cost-optimizer",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React, Tailwind, and animated background. Fully responsive and SEO optimized.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/your-username/portfolio",
      live: "https://rahulverse.com",
    },
    {
      title: "Monitoring Dashboard",
      description:
        "Built a real-time monitoring dashboard for servers and apps with Prometheus + Grafana.",
      tech: ["Prometheus", "Grafana", "Node.js"],
    },
    {
      title: "ChatOps Bot",
      description:
        "Created a Slack bot for automated deployments, monitoring alerts, and team notifications.",
      tech: ["Slack API", "Node.js", "Docker"],
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const projectsToShow = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono text-[#00ffea] mb-12 text-center">
        $ ./projects
      </h2>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectsToShow.map((project, idx) => (
          <div
            key={idx}
            className="bg-lightbg dark:bg-darkbg2 p-6 rounded-xl shadow-lg hover:shadow-accent/30 transition flex flex-col"
          >
            <h3 className="text-xl font-bold text-accent mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 flex-1">
              {project.description}
            </p>

            {/* Tech Stack */}
            <ul className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((t, i) => (
                <li
                  key={i}
                  className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full"
                >
                  {t}
                </li>
              ))}
            </ul>

            {/* Links */}
            <div className="flex gap-4 mt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent transition"
                >
                  <FaGithub /> Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* See All Button */}
      {!showAll && allProjects.length > 3 && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 rounded-lg bg-accent text-white font-medium hover:bg-accent/80 transition"
          >
            See All Projects
          </button>
        </div>
      )}
    </section>
  );
}
