import React from "react";
import { Briefcase, FileText, Calendar, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Fuzzy Cloud",
      period: "December 2023 - April 2024",
      description:
        "Collaborated with senior team members on a live client project, developing and integrating multiple applications using ReactJS, NextJS, SQLite, and other new libraries.",
      type: "work",
      skills: ["ReactJS", "NextJS", "SQLite"],
    },
    {
      title: "Web Designing and Development Intern",
      company: "Oasis Infobyte",
      period: "July 2023 - August 2023",
      description:
        "Designed and implemented an interactive web application, enhancing user engagement and functionality using ReactJS, NodeJS, ExpressJS and MongoDB.",
      type: "work",
      skills: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    },
    {
      title:
        "Speech Based Recognition of Gujarati Numerals using Supervised Learning",
      company: "International Journal of Engineering Research & Technology",
      period: "December 2023",
      description:
        "Developed an audio classification model using MFCC features, achieving 88.40% accuracy with Random Forest and 87% with SVM, significantly advancing automated Gujarati numeral recognition.",
      type: "publication",
      skills: ["Machine Learning", "Audio Processing", "Random Forest", "SVM"],
    },
  ];

  return (
    <section id="experience" className="bg-white py-20">
      <div className="section-container">
        <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2 mb-16  text-4xl font-bold text-center text-gray-900 mb-12 relativemb-6">
          Experience
        </h2>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-400 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row md:items-center gap-6"
              >
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-2 w-5 h-5 rounded-full bg-white border-4 border-purple-500 z-10"></div>

                <div
                  className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"}`}
                >
                  <div className="p-6 bg-gradient-to-br from-white to-purple-50 border border-purple-200 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold text-portfolio-darkPurple">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                      <Building size={14} className="text-purple-500" />{" "}
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                      <Calendar size={14} className="text-purple-500" />{" "}
                      {exp.period}
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
