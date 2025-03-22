import React from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 relative">
          About Me
          <span className="block w-16 h-1 bg-portfolio-purple mx-auto mt-2"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              "I'm a passionate software developer with a strong foundation in full-stack development. Currently pursuing my Master's in Computer Science at the University of Illinois Chicago, I'm constantly expanding my skills and knowledge in the field.",
              "With a background in Information Technology from Dharmsinh Desai University, I've developed expertise in various programming languages and frameworks, allowing me to create efficient and user-friendly applications.",
              "I'm enthusiastic about solving complex problems and building innovative solutions that make a positive impact. I'm always eager to learn new technologies and collaborate on challenging projects.",
            ].map((text, index) => (
              <div
                key={index}
                className="relative pl-6 border-l-4 border-portfolio-purple"
              >
                <p className="text-gray-700 text-lg">{text}</p>
              </div>
            ))}

          
            <div className="mt-8 flex gap-8 justify-center md:justify-start">
              {[
                { icon: <BookOpen size={32} />, label: "Continuous Learning" },
                { icon: <Award size={32} />, label: "Problem Solving" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto shadow-md">
                    {React.cloneElement(item.icon, {
                      className: "text-portfolio-purple",
                    })}
                  </div>
                  <p className="mt-2 font-medium text-gray-800">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-portfolio-gray mb-6 flex items-center">
              <GraduationCap className="mr-2 text-portfolio-purple" size={28} />
              Education
            </h3>

            <div className="space-y-6">
              {[
                {
                  university: "University of Illinois Chicago",
                  degree: "Master of Science in Computer Science",
                  duration: "Expected May 2026",
                  gpa: "4.0/4.0",
                },
                {
                  university: "Dharmsinh Desai University",
                  degree: "Bachelor of Technology in Information Technology",
                  duration: "Aug 2020 - May 2024",
                  gpa: "CGPA: 8.7/10.0",
                },
              ].map((edu, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-2 bg-gradient-to-r from-portfolio-purple to-portfolio-lightPurple"></div>
                  <div className="p-6 flex gap-4 items-start">
                    <div className="bg-portfolio-lightPurple p-3 rounded-full text-portfolio-purple shadow-md">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {edu.university}
                      </h4>
                      <p className="text-gray-600">{edu.degree}</p>
                      <p className="text-gray-500">{edu.duration}</p>
                      <div className="mt-2 inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                        {edu.gpa}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
