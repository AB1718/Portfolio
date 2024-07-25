import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ image, title, description, githubLink, liveDemoLink }) => {
  return (
    <div className="bg-gray-800 w-full  max-w-md md:max-w-2xl lg:max-w-4xl rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 flex flex-col md:flex-row mx-auto">
      <div className="w-full  md:w-1/2">
        <img src={image} alt={title} className="w-full h-full"/>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-white text-left mb-4">{description}</p>
        <div className="flex justify-between items-center">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-800">
              <FaGithub className="text-xl md:text-2xl" />
            </a>
          )}
          {liveDemoLink && (
            <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-800">
              <FaExternalLinkAlt className="text-xl md:text-2xl" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
