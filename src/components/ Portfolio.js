import React from 'react';

const projects = [
  {
    name: 'Gandour Construction',
    description: 'A professional portfolio website showcasing construction services and projects.',
    link: 'https://gandour-construction.netlify.app/',
  },
  {
    name: 'VetInsight Hub',
    description: 'An interactive resource hub for pet owners and veterinarians.',
    link: 'https://vetinsight-hub.netlify.app/',
  },
  {
    name: 'Fixer FM',
    description: 'A modern, user-friendly website for facility management services.',
    link: 'https://fixerfm.com/',
  },
  {
    name: 'Thickness',
    description: 'An innovative platform offering cutting-edge engineering and design solutions.',
    link: 'https://thickness.sa/',
  },
];

const Portfolio = () => {
  return (
    <section className="bg-offWhite text-darkGreen py-12 px-6">
      <h2 className="text-4xl font-semibold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-veryLightGreen rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Background Animation */}
            <div className="absolute inset-0 bg-mediumGreen scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-transform duration-500"></div>
            
            <div className="relative z-10 p-6">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-lightGreen transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-lg mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-darkGreen text-offWhite rounded-lg font-semibold hover:bg-lightGreen transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;