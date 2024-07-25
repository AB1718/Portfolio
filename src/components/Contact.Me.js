import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <section className=" py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Contact Me</h2>
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center">
              <FaPhone className="text-4xl text-gray-800 mb-2" />
              <p className="text-lg font-semibold text-gray-800">Phone:</p>
              <a href="tel:+91 9755776396" className="text-blue-600 hover:underline">+91 9755776396</a>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaEnvelope className="text-4xl text-gray-800 mb-2" />
              <p className="text-lg font-semibold text-gray-800">Email:</p>
              <a href="mailto:abhaychouhan1718@gmail.com" className="text-blue-600 hover:underline">abhaychouhan1718@gmail.com</a>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaLinkedin className="text-4xl text-gray-800 mb-2" />
              <p className="text-lg font-semibold text-gray-800">LinkedIn:</p>
              <a href="https://www.linkedin.com/in/abhay-chouhan/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/abhay-chouhan/</a>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaGithub className="text-4xl text-gray-800 mb-2" />
              <p className="text-lg font-semibold text-gray-800">GitHub:</p>
              <a href="https://github.com/AB1718" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://github.com/AB1718</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
