import React from "react";

const projects = [
  {
    name: "Fixer FM",
    url: "https://fixerfm.com/ar",
    role: "Web Designer & Developer",
    focus: "B2B Service Website",
    description:
      "A service-oriented website developed to improve how facility management services are presented and accessed, with a focus on clear content structure, usability, and responsive user experience.",
    responsibilities: [
      "Designed and customized responsive website pages",
      "Structured service content for better usability",
      "Improved website performance and user experience",
      "Supported deployment and content updates",
    ],
    impact:
      "Enhanced service visibility and improved user navigation through structured layout and responsive design.",
    stack: ["WordPress", "UI/UX", "SEO Basics", "Responsive Design"],
  },
  {
    name: "Techtrum",
    url: "https://techtrum.net/en",
    role: "Web Designer & Developer",
    focus: "B2B Corporate Website",
    description:
      "A corporate WordPress website developed to organize digital and professional services in a clear, structured, and intuitive way, supporting easier navigation and a stronger user experience.",
    responsibilities: [
      "Customized WordPress pages and layouts",
      "Improved navigation structure and UX flow",
      "Developed and customized service and content pages",
      "Ensured cross-device responsiveness",
    ],
    impact:
      "Improved clarity of digital services and created a smoother browsing experience across devices.",
    stack: ["WordPress", "JavaScript", "Responsive Design", "Content Structure"],
  },
  {
    name: "SmartCat",
    url: "https://smartcat.sa/en",
    role: "Web Designer & Developer",
    focus: "Bilingual Service Website",
    description:
      "A bilingual WordPress platform developed to present translation and localization services through clear content structure, accessible layout, and user-friendly navigation.",
    responsibilities: [
      "Built bilingual Arabic and English content structure",
      "Managed WordPress content and localization workflows",
      "Improved readability and content accessibility",
      "Ensured responsive behavior across devices",
    ],
    impact:
      "Improved multilingual usability and made service information easier to access for different audiences.",
    stack: ["WordPress", "Bilingual UI", "SEO Basics", "Usability"],
  },
  {
    name: "Codexa – Next.js Mentor Internship",
    url: "#",
    role: "Next.js Mentor",
    focus: "Mentorship & Frontend Training",
    description:
      "A practical mentorship internship focused on guiding junior developers through Next.js fundamentals, reusable components, project structure, responsive UI, and portfolio-based learning.",
    responsibilities: [
      "Prepared and delivered practical Next.js training sessions",
      "Mentored interns on reusable components and project structure",
      "Guided students in building responsive frontend sections",
      "Reviewed code and explained best practices during live sessions",
    ],
    impact:
      "Supported junior developers in improving their React and Next.js skills through hands-on learning and real project practice.",
    stack: ["Next.js", "React", "Mentorship", "Reusable Components"],
  },
  {
    name: "Samaaka – Samaka",
    url: "https://samaaka.com.sa/en/samaka",
    role: "Web Designer & Developer",
    focus: "Service Page Design",
    description:
      "A service page developed to communicate engineering services through a clean layout, strong visual hierarchy, and responsive presentation.",
    responsibilities: [
      "Developed and customized service pages",
      "Improved visual hierarchy and content clarity",
      "Ensured responsive behavior across devices",
      "Enhanced UI consistency across sections",
    ],
    impact:
      "Strengthened presentation of services and improved readability for website visitors.",
    stack: ["React", "UI Design", "Responsive Layout", "Service Pages"],
  },
  {
    name: "Samaaka – Samaakat",
    url: "https://samaaka.com.sa/en/samaakat",
    role: "Web Designer & Developer",
    focus: "Content Organization",
    description:
      "A dedicated section developed to organize and present specialized services with improved clarity, consistency, and content flow.",
    responsibilities: [
      "Organized complex content into structured sections",
      "Improved user navigation experience",
      "Maintained design consistency across pages",
      "Supported content organization and page updates",
    ],
    impact:
      "Improved content flow and reduced user confusion through better organization of specialized services.",
    stack: ["React", "Content Strategy", "UI Consistency", "Navigation"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-[#0EA5E9] bg-[#E0F2FE] px-4 py-2 rounded-full mb-4">
            Selected Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-5">
            Web Design & Development Projects
          </h2>

          <p className="text-gray-600 leading-7 text-base md:text-lg">
            I design and develop professional websites that transform complex
            content into clear, user-friendly digital experiences, with
            experience across WordPress, B2B service websites, bilingual
            platforms, React, Next.js, responsive design, SEO basics, and
            usability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>

                <span className="ml-3 text-xs text-gray-500 truncate">
                  {project.url !== "#"
                    ? project.url.replace(/^https?:\/\//, "")
                    : "codexa mentorship / training project"}
                </span>
              </div>

              <div className="overflow-hidden bg-gray-100">
                {project.url !== "#" ? (
                  <img
                    src={`https://api.microlink.io/?url=${encodeURIComponent(
                      project.url
                    )}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=900`}
                    alt={project.name}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-56 bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#0EA5E9] flex items-center justify-center text-center px-6">
                    <div>
                      <p className="text-white text-xl font-bold mb-2">
                        Next.js Mentorship
                      </p>
                      <p className="text-white/80 text-sm">
                        React • Next.js • Reusable Components • Live Training
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center text-xs font-semibold bg-[#EEF6FF] text-[#1E3A8A] px-3 py-1 rounded-full">
                    {project.focus}
                  </span>
                  <span className="inline-flex items-center text-xs font-semibold bg-[#F8FAFC] text-[#475569] px-3 py-1 rounded-full border border-gray-200">
                    {project.role}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] mb-3 min-h-[56px]">
                  {project.name}
                </h3>

                <p className="text-gray-600 text-sm leading-6 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="text-gray-500 text-xs leading-5 mb-4 space-y-1">
                  {project.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#1E3A8A]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-green-600 font-medium mb-6">
                  Impact: {project.impact}
                </p>

                {project.url !== "#" ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-[#1E3A8A] hover:bg-[#163172] text-white text-sm font-semibold px-5 py-3 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    View Website
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="mt-auto inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-600 text-sm font-semibold px-5 py-3 rounded-lg">
                    Internal Training Project
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;