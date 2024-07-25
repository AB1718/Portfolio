// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Home />
    </div>
  );
};

export default App;
