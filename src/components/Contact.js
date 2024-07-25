// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white p-8">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full p-2 border border-gray-300 rounded-lg"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Send</button>
      </form>
    </section>
  );
};

export default Contact;
