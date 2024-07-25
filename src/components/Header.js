// src/components/Header.js
import React, { useState } from 'react';

const Header = () => {


  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold ">My Portfolio</h1>
        </div>
        <div className="hidden md:flex space-x-8 items-center text-lg font-medium">
          <ul className="flex space-x-8">
            <li className="hover:text-gray-300 transition duration-300">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-gray-300 transition duration-300">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-gray-300 transition duration-300">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:text-gray-300 transition duration-300">
              <a href="#experience">Experience</a>
            </li>
            <li className="hover:text-gray-300 transition duration-300">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
