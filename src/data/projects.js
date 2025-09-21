import cicdImg from "../assets/projects/cicd.png";
import cloudImg from "../assets/projects/cloud.png";
import portfolioImg from "../assets/projects/portfolio.png";
import monitoringImg from "../assets/projects/monitoring.png";
import chatopsImg from "../assets/projects/chatops.png";

const projects = [
  {
    title: "CI/CD Pipeline Automation",
    description:
      "Automated build, test, and deployment pipelines using GitHub Actions and Docker. Reduced release time by 40%.",
    tech: ["GitHub Actions", "Docker", "Kubernetes"],
    github: "https://github.com/your-username/cicd-pipeline",
    live: "https://your-demo-link.com",
    image: cicdImg, // now imported
  },
  {
    title: "Cloud Cost Optimizer",
    description:
      "Developed a tool to analyze and reduce AWS costs by automating unused resource detection and scheduling.",
    tech: ["AWS", "Terraform", "Node.js"],
    github: "https://github.com/your-username/cloud-cost-optimizer",
    image: cloudImg,
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React, Tailwind, and animated background. Fully responsive and SEO optimized.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/your-username/portfolio",
    live: "https://rahulverse.com",
    image: portfolioImg,
  },
  {
    title: "Monitoring Dashboard",
    description:
      "Built a real-time monitoring dashboard for servers and apps with Prometheus + Grafana.",
    tech: ["Prometheus", "Grafana", "Node.js"],
    image: monitoringImg,
  },
  {
    title: "ChatOps Bot",
    description:
      "Created a Slack bot for automated deployments, monitoring alerts, and team notifications.",
    tech: ["Slack API", "Node.js", "Docker"],
    image: chatopsImg,
  },
];

export default projects;
