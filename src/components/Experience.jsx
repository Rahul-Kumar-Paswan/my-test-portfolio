// src/components/Experience.jsx
export default function Experience() {
  const experiences = [
    {
      role: "DevOps Engineer",
      company: "Tech Solutions Pvt. Ltd.",
      period: "2022 - Present",
      description:
        "Building and maintaining scalable cloud infrastructure, implementing CI/CD pipelines, and improving observability with monitoring and logging solutions.",
    },
    {
      role: "Cloud Engineer Intern",
      company: "Cloudify Systems",
      period: "2021 - 2022",
      description:
        "Worked on real-world cloud automation tasks using AWS and Terraform. Assisted in containerizing applications with Docker and orchestrating them with Kubernetes.",
    },
    {
      role: "Full-Stack Developer Intern",
      company: "WebStack Labs",
      period: "2020 - 2021",
      description:
        "Built and deployed responsive web applications using React, Node.js, and MongoDB. Gained hands-on experience with REST APIs and Git-based collaboration.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono text-[#00ffea] mb-12 text-center">
        $ ./experience
      </h2>

      {/* Timeline */}
      <div className="relative border-l-2 border-accent/40 pl-6 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative">
            {/* Dot */}
            <span className="absolute -left-3 top-2 w-5 h-5 rounded-full bg-accent border-4 border-lightbg dark:border-darkbg2"></span>

            {/* Content */}
            <div className="bg-lightbg dark:bg-darkbg2 p-6 rounded-xl shadow-lg hover:shadow-accent/30 transition">
              <h3 className="text-xl font-bold text-accent">
                {exp.role} @ {exp.company}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {exp.period}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
