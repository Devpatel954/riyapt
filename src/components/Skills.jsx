import React from "react";
import { Code, Database, Layout, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code className="h-6 w-6 text-purple-700" />,
      skills: ["JavaScript", "Java", "C++", "Python", "TypeScript"],
    },
    {
      name: "Frameworks",
      icon: <Layout className="h-6 w-6 text-blue-700" />,
      skills: [
        "ReactJS",
        "NextJS",
        "NodeJS",
        "ExpressJS",
        "Bootstrap",
        "Tailwind CSS",
        "Chakra UI",
      ],
    },
    {
      name: "Databases",
      icon: <Database className="h-6 w-6 text-green-700" />,
      skills: ["MongoDB", "PostgreSQL"],
    },
    {
      name: "Tools & Technologies",
      icon: <Settings className="h-6 w-6 text-yellow-700" />,
      skills: [
        "Git",
        "GitHub",
        "Data Visualization",
        "Linux",
        "Microsoft Excel",
        "Adobe Photoshop",
        "Canva",
      ],
    },
  ];

  return (
    <section id="skills" className>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 tracking-wide">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-200 to-blue-200 shadow flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="inline-block px-3 py-1 bg-purple-100 text-sm text-purple-900 rounded-full border border-purple-300 transition-all duration-300 hover:bg-purple-700 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
