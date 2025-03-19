import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ChevronDown,
} from "lucide-react";

const Hero = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative bg-gradient-to-b from-white via-purple-50 to-gray-100"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-purple-100 opacity-20"></div>
        <div className="absolute top-1/3 right-10 w-72 h-72 rounded-full bg-purple-100 opacity-20"></div>
        <div className="absolute bottom-1/4 -left-16 w-64 h-64 rounded-full bg-purple-100 opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10 text-center">
        <span className="inline-block mb-3 px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
          Masters Student & Software Developer
        </span>

        <h1 className="text-6xl font-bold text-gray-800 mt-4 mb-3 leading-tight">
          <span className="text-purple-700">Riya</span> Mehta
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Crafting elegant, user-centric web experiences with modern
          technologies.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-gray-600">
          {[
            {
              icon: Mail,
              text: "mriya842@gmail.com",
              link: "mailto:mriya842@gmail.com",
            },
            {
              icon: Mail,
              text: "rmeht43@uic.edu",
              link: "mailto:rmeht43@uic.edu",
            },
            { icon: Phone, text: "(312)-358-8464", link: "tel:3123588464" },
            { icon: MapPin, text: "Chicago, IL" },
          ].map(({ icon: Icon, text, link }, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white shadow rounded-full px-4 py-2 transition duration-300 hover:shadow-lg"
            >
              <Icon size={16} className="text-purple-700" />
              {link ? (
                <a href={link} className="hover:text-purple-700">
                  {text}
                </a>
              ) : (
                <span>{text}</span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://github.com/riyagmehta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 border rounded-full text-gray-800 hover:border-purple-700 hover:text-purple-700 transition"
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/riya-mehta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 border rounded-full text-gray-800 hover:border-purple-700 hover:text-purple-700 transition"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a
            href="#projects"
            className="px-5 py-3 bg-purple-700 text-white rounded-full shadow hover:bg-purple-800 transition"
          >
            View Projects
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToNextSection}
          className="text-purple-700 hover:text-purple-800 transition"
        >
          <span className="text-sm">Scroll Down</span>
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
