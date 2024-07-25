import React from 'react';
import { FaCode, FaDatabase, FaMobileAlt } from 'react-icons/fa'; // Add icons as needed

const Card = ({ title, description }) => {
  const iconMap = {
    "Coding": <FaCode className="text-4xl text-blue-500 mb-4" />,
    "Databases": <FaDatabase className="text-4xl text-green-500 mb-4" />,
    "Mobile Development": <FaMobileAlt className="text-4xl text-purple-500 mb-4" />,
  };

  return (
    <div className="bg-white  rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
      {/* {iconMap[title] || <FaCode className="text-4xl text-blue-500 mb-4" />} Default icon */}
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
