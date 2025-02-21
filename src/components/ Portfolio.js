import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons"; 
import "../components/portfolio.css"; // Import the CSS file

// Importing images
import gandourImage from "../assets/gandour.png"; 
import vetinsightImage from "../assets/vetinsight.png"; 
import fixerfmImage from "../assets/fixerfm.png"; 
import thicknessImage from "../assets/thickness.png"; 
import smartcatImage from "../assets/smartcat.png"; 
import techtrumImage from "../assets/techtrum.png"; 

const projects = [
  {
    name: "Gandour Construction",
    description: "A professional portfolio website showcasing construction services and projects.",
    link: "https://gandour-construction.netlify.app/",
    image: gandourImage,
  },
  {
    name: "VetInsight Hub",
    description: "An interactive resource hub for pet owners and veterinarians.",
    link: "https://vetinsight-hub.netlify.app/",
    image: vetinsightImage,
  },
  {
    name: "Fixer FM",
    description: "A modern, user-friendly website for facility management services.",
    link: "https://fixerfm.com/",
    image: fixerfmImage,
  },
  {
    name: "Samaaka",
    description: "An innovative platform offering cutting-edge engineering and design solutions.",
    link: "https://Samaaka.com.sa/",
    image: thicknessImage,
  },
  {
    name: "Real Estate Platform",
    description: "A modern real estate platform built with React and Laravel. Coming soon!",
    link: "#",
    image: "",
    isComingSoon: true,
  },
  {
    name: "SmartCat",
    description: "A comprehensive platform for translation and localization services.",
    link: "https://smartcat.sa/",
    image: smartcatImage,
  },
  {
    name: "Techtrum",
    description: "A technology platform providing innovative solutions and services.",
    link: "https://techtrum.net/",
    image: techtrumImage,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-[#F4F4F4] text-[#333333] py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#1E3A8A]">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              
              {/* Front Side */}
              <div className="flip-card-front">
                {project.isComingSoon ? (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200">
                    <FontAwesomeIcon icon={faBuilding} className="text-[#1E3A8A] text-6xl mb-4" />
                    <h3 className="text-lg font-bold text-[#1E3A8A]">Coming Soon</h3>
                    <p className="text-sm text-gray-600">Real Estate Platform</p>
                  </div>
                ) : (
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                )}
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center p-4">
                  <h3 className="text-lg font-bold">{project.name}</h3>
                </div>
              </div>

              {/* Back Side */}
              <div className="flip-card-back">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 ${
                    project.isComingSoon ? "bg-gray-400 cursor-not-allowed" : "bg-[#22D3EE] hover:bg-[#F59E0B]"
                  } text-white font-semibold rounded-lg transition-all duration-300`}
                >
                  {project.isComingSoon ? "Coming Soon" : "View Project"}
                </a>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;