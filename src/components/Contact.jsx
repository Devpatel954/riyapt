import React from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "mriya842@gmail.com",
      href: "mailto:mriya842@gmail.com",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Academic Email",
      value: "rmeht43@uic.edu",
      href: "mailto:rmeht43@uic.edu",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "(312)-358-8464",
      href: "tel:3123588464",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Chicago, IL",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="flex justify-center items-center min-h-screen "
    >
      <div className="bg-white/80 p-10 rounded-2xl shadow-xl text-center w-full max-w-2xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 relative mb-6">
          Get In Touch
        </h2>
        <p className="text-gray-700 mb-8">
          I'm currently looking for opportunities to collaborate on exciting
          projects. Whether you have a question or just want to say hello, feel
          free to reach out and I'll get back to you as soon as possible!
        </p>

        <div className="grid grid-cols-1 gap-4">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500"
            >
              <div className="bg-purple-200 p-2.5 rounded-full text-purple-700">
                {contact.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500">{contact.label}</p>
                {contact.href ? (
                  <a
                    href={contact.href}
                    className="text-purple-700 hover:text-purple-500 transition-colors font-medium"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-purple-700 font-medium">{contact.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://github.com/riyagmehta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-purple-500 text-purple-700 rounded-full hover:bg-purple-500 hover:text-white transition-all"
          >
            <Github className="h-5 w-5" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/riya-mehta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-purple-500 text-purple-700 rounded-full hover:bg-purple-500 hover:text-white transition-all"
          >
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
          <a
            href="mailto:mriya842@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-full shadow-md hover:shadow-lg hover:bg-purple-600 transition-all"
          >
            <Mail className="h-5 w-5" /> Send Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
