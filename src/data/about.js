// src/data/about.js
import awsBadge from "../assets/certifications/aws-cloud-practitioner.png";
import azureBadge from "../assets/certifications/azure-fundamentals.png";
import googleBadge from "../assets/certifications/google-cloud.png";
import msAssociateBadge from "../assets/certifications/microsoft-certified-associate-badge.svg";
import msSecurityBadge from "../assets/certifications/microsoft-certified-Security-fundamentals-badge.svg";
import msFundamentalsBadge from "../assets/certifications/microsoft-certified-fundamentals-badge.svg";

import pythonBadge from "../assets/courses/python-badge.svg";
import fullstackBadge from "../assets/courses/fullstack-badge.png";
import reactBadge from "../assets/courses/react-badge.svg";
import kubernetesBadge from "../assets/courses/kubernetes-badge.svg";

// Education
export const EDUCATION = [
  {
    degree: "B.Tech Computer Science",
    institution: "IIT Bombay",
    years: "2019 - 2023",
    details: "CGPA: 8.9/10 • Major in Algorithms, System Design, Networks",
  },
  {
    degree: "Class XII",
    institution: "Delhi Public School",
    years: "2017 - 2019",
    details: "Science PCM • 93.5%",
  },
];

// Achievements
export const ACHIEVEMENTS = [
  "1st Place - National College Hackathon, 2022",
  "Published research on scalable distributed databases",
  "Google Code Jam - India Top 500 (2023)",
];

// Courses
export const COURSES = [
  {
    name: "Python Programming",
    platform: "Coursera",
    year: "2021",
    url: "https://www.coursera.org/learn/python",
    badge: pythonBadge,
  },
  {
    name: "Full Stack Web Development",
    platform: "Udemy",
    year: "2022",
    url: "https://www.udemy.com/course/fullstack",
    badge: fullstackBadge,
  },
  {
    name: "ReactJS Advanced",
    platform: "Frontend Masters",
    year: "2022",
    url: "https://frontendmasters.com/courses/react",
    badge: reactBadge,
  },
  {
    name: "Kubernetes for Developers",
    platform: "Linux Foundation",
    year: "2023",
    url: "https://training.linuxfoundation.org",
    badge: kubernetesBadge,
  },
];


// Internships
export const INTERNSHIPS = [
  {
    company: "Flipkart",
    title: "SDE Intern",
    period: "Summer 2022",
    work: "Worked on backend microservices, CI/CD, and cloud migrations.",
  },
  {
    company: "Tata Consultancy",
    title: "DevOps Intern",
    period: "Winter 2021",
    work: "Built automated deployment pipelines, Kubernetes operations.",
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    quote: "A proactive leader and one of the best engineers I've mentored.",
    author: "A. Singh, Flipkart",
  },
  {
    quote: "Knows his craft. Always delivers beyond expectation.",
    author: "M. Roy, Tata Consultancy",
  },
];


export const CERTIFICATIONS = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2023",
    url: "#", // replace with real link
    badge: awsBadge,
  },
  {
    title: "Microsoft Certified: Associate",
    issuer: "Microsoft",
    year: "2023",
    url: "#",
    badge: msAssociateBadge,
  },
  {
    title: "Azure Fundamentals",
    issuer: "Microsoft",
    year: "2023",
    url: "#",
    badge: azureBadge,
  },
  {
    title: "Google Cloud Certified",
    issuer: "Google",
    year: "2023",
    url: "#",
    badge: googleBadge,
  },
  {
    title: "Microsoft Certified: Security Fundamentals",
    issuer: "Microsoft",
    year: "2023",
    url: "#",
    badge: msSecurityBadge,
  },
  {
    title: "Microsoft Certified: Fundamentals",
    issuer: "Microsoft",
    year: "2023",
    url: "#",
    badge: msFundamentalsBadge,
  },
];
