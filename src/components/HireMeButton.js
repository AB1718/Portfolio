import React, { useState } from 'react';
import Modal from './Modal'; // Import the modal component

const HireMeButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="bg-white text-gray-800 font-bold py-2 px-4 rounded shadow-md hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-800 transition duration-300 transform"
      >
        Hire Me
      </button>
      <Modal isOpen={isModalOpen} onClose={handleClose} />
    </>
  );
};

export default HireMeButton;
