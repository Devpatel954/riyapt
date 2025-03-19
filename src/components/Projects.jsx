import React from "react";
import { ExternalLink, Github, Calendar, Code } from "lucide-react";

const projectData = [
  {
    title: "Sweet Home Finder",
    date: "November 2024",
    description:
      "Developed a web application to streamline pet adoption with features like a personalized quiz, real-time chat, and adoption tracking, enhancing user experience and shelter operations.",
    technologies: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "PostgreSQL",
      "Sequelize",
      "Socket.IO",
      "Multer",
      "Chakra UI",
    ],
    github: "https://github.com/riyagmehta/sweet-home-finder",
    highlight: true,
  },
  {
    title: "Hand Me Down",
    date: "May 2023",
    description:
      "Developed a community-driven platform to streamline the exchange of academic resources, furniture, and materials, featuring dynamic user-generated posts, real-time search, and secure authentication.",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/riyagmehta/hand-me-down",
    highlight: false,
  },
  {
    title: "Mind Matter—Mental Health Care System",
    date: "March 2023",
    description:
      "Engineered a fully functional web application aimed at enhancing users' mental well-being by integrating features for appointment scheduling, educational resources on mental health topics, and secure daily journaling capabilities.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    github: "https://github.com/riyagmehta/mind-matter",
    highlight: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 relative mb-16">
          Projects
        </h2>

        <div className="space-y-10">
          {projectData.map((project, index) => (
            <div key={index} className="border-l-4 pl-6 border-purple-500">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-semibold text-purple-900">
                  {project.title}
                </h3>
                {project.highlight && (
                  <span className="text-sm bg-purple-600 text-white px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <div className="flex items-center mt-2 text-purple-500 text-sm">
                <Calendar size={16} className="mr-1" />
                <span>{project.date}</span>
              </div>

              <p className="text-gray-700 mt-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium bg-purple-100 text-purple-800 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-purple-700 hover:text-purple-900 transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    Source Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-purple-700 hover:text-purple-900 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/riyagmehta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-200 hover:bg-purple-300 text-purple-800 px-5 py-2.5 rounded-full transition-all duration-300"
          >
            <Code size={18} />
            <span>View More Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
