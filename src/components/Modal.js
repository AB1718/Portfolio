import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Modal.css'; // Import the CSS file for transitions

const Modal = ({ isOpen, onClose }) => {
  const modalClass = isOpen ? 'modal-open' : 'modal-closed';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = 'service_r90rti2';
    const templateID = 'template_yz1pc2n';
    const userID = 'wySU7sEj3uAT8f5Fb';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        onClose();
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };


  if (!isOpen) return null;

  return (
   

    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${modalClass}`}>
      <div className="bg-white rounded-lg shadow-lg p-6 w-80 md:w-96 transition-transform duration-300 transform">
        <h2 className="text-2xl text-gray-800 font-bold mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-4 mb-4">
            <label className="block text-gray-700 font-medium w-1/3" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 transition duration-300"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <label className="block text-gray-700 font-medium w-1/3" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 transition duration-300"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <label className="block text-gray-700 font-medium w-1/3" htmlFor="contact">Contact Number</label>
            <input
              type="text"
              id="contact"
              name="contact"
              required
              className="w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 transition duration-300"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 transition duration-300"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="submit"
              className="bg-gray-800 text-white font-bold py-2 px-4 rounded shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 transition duration-300"
            >
              Submit
            </button>
            <button
              type="button" // Change to type button to prevent form submission on click
              onClick={onClose}
              className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 transition duration-300"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
