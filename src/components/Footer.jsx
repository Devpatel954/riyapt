import React from "react";
import { Github, Heart, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="text-black py-12 relative text-center">
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToTop}
          className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="text-purple-600" />
        </button>
      </div>

      <div className="container mx-auto px-6 flex flex-col items-center">
        <a href="#" className="text-3xl font-bold text-white">
          <span className="text-purple-500">Riya</span>{" "}
          <span className="text-black">Mehta</span>
        </a>
        <p className="text-black-200 text-sm mt-2">
          Software Developer & Masters in Computer Science
        </p>

        <div className="flex space-x-6 mt-4">
          <a
            href="https://github.com/riyagmehta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black-200 hover:text-purple transition-transform transform hover:scale-125"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/riya-mehta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black-200 hover:text-purple transition-transform transform hover:scale-125"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:mriya842@gmail.com"
            className="text-black-200 hover:text-purple transition-transform transform hover:scale-125"
            aria-label="Email Contact"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="border-t border-purple-400 mt-6 pt-4 w-full max-w-md">
          <p className="text-black-300 text-sm">
            © {currentYear} Riya Mehta. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="#about"
              className="text-black-300 hover:text-purple text-sm transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-black-300 hover:text-purple text-sm transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-black-300 hover:text-purple text-sm transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
