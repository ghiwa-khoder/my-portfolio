import React from "react";

const projects = [
  {
    name: "Fixer FM",
    url: "https://fixerfm.com/ar",
    description:
      "A service-oriented website designed to present information clearly, improve usability, and strengthen the client’s digital presence through a modern interface.",
    focus: "Service Clarity & Usability",
  },
  {
    name: "Techtrum",
    url: "https://techtrum.net/en",
    description:
      "A corporate website structured to organize digital services in a clear and intuitive way, supporting easier navigation and a stronger user experience.",
    focus: "Structured Service Presentation",
  },
  {
    name: "SmartCat",
    url: "https://smartcat.sa/en",
    description:
      "A bilingual platform designed to present translation and localization services through clear structure, accessible content, and user-friendly navigation.",
    focus: "Bilingual Content Structure",
  },
  {
    name: "Samaaka – Samaka",
    url: "https://samaaka.com.sa/en/samaka",
    description:
      "A service page developed to communicate engineering services through a clean layout, strong visual structure, and responsive presentation.",
    focus: "Clear Service Layout",
  },
  {
    name: "Samaaka – Samaakat",
    url: "https://samaaka.com.sa/en/samaakat",
    description:
      "A dedicated section designed to organize and present specialized services with improved clarity, consistency, and content flow.",
    focus: "Content Organization",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-[#F8FAFC] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-[#1E3A8A] mb-5">
            Selected Projects
          </h2>

          <p className="text-gray-600 leading-7">
            A selection of websites and digital platforms I developed with a
            focus on usability, responsive layouts, and clear content
            presentation to support stronger digital communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                <span className="ml-3 text-xs text-gray-500 truncate">
                  {project.url.replace(/^https?:\/\//, "")}
                </span>
              </div>

              <div className="overflow-hidden">
                <img
                  src={`https://api.microlink.io/?url=${encodeURIComponent(
                    project.url
                  )}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=900`}
                  alt={project.name}
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block text-xs font-semibold bg-[#EEF6FF] text-[#1E3A8A] px-3 py-1 rounded-full mb-4 w-fit">
                  {project.focus}
                </span>

                <h3 className="text-xl font-bold text-[#1E3A8A] mb-3 min-h-[56px]">
                  {project.name}
                </h3>

                <p className="text-gray-600 text-sm leading-6 mb-6 flex-grow">
                  {project.description}
                </p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#1E3A8A] hover:bg-[#163172] text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors duration-300"
                >
                  View Website
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;