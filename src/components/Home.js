// src/components/Home.js
import React from 'react';
import Card from './Card'; 
import HireMeButton from './HireMeButton';
import ContactMe from './Contact.Me';
import Projects from './Projects';


const cardData = [
  { title: 'HTML', description: '"Proficient in HTML, including semantic markup, forms, and responsive design principles."' },
  { title: 'CSS', description: 'Creating beautiful and responsive designs with utility-first CSS.' },
  { title: 'JavaScript', description: '"Proficient in JavaScript with experience in developing interactive web applications."' },
  { title: 'React', description: 'Creating dynamic user interfaces with React.' },
  { title: 'Redux', description: 'Managing application state with Redux.' },
  { title: 'Express', description: 'Building RESTful APIs with Express.' },
  { title: 'Node', description: 'Server-side programming with Node.js.' },
  { title: 'Restful APIs', description: 'Creating and consuming RESTful APIs.' },
  { title: 'MongoDB', description: 'Working with MongoDB for database management.' },
];

const experiences = [
  {
    company: 'Happitude Digital Solution',
    role: 'Web Developer Intern',
    duration: 'January 2024 - March 2024',
    description: 'Developed and maintained web applications, collaborated with cross-functional teams, and led various projects.',
  },
  {
    company: 'RankitRight Media Solution',
    role: 'Web Developer Intern',
    duration: 'April 2024 - June 2024',
    description: 'Worked on web development projects, including building responsive websites and optimizing web performance.',
  },
 
  // Add more experience objects as needed
];

const Home = () => {
  return (
    <section id="home" className="bg-gray-900 h-screen">
     
      {/* Introduction Section */}
     <div className='flex bg-gradient-to-r from-black via-gray-900 to-gray-800 h-screen text-white text-center py-20 '>
      <div className=" text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Hello, I'm Abhay Chouhan</h1>
        <p className="text-2xl mt-10">A Passionate Web Developer</p>
        <p className="mt-8 mx-auto text-md w-10/12 md:w-8/12 lg:w-6/12 writer-animation">Experienced web developer proficient in front-end and back-end technologies.. Skilled in creating responsive
and user-friendly web interfaces, with a strong understanding of web standards and best practices. Proven
ability to collaborate effectively in team environments, contributing to successful project delivery and client
satisfaction. Seeking to leverage expertise to create innovative and impactful web solutions.</p>

<div className="text-center py-20">
      <HireMeButton /> {/* Include the HireMeButton component */}
    </div>
       </div>
     </div>
    
      {/* Projects Section */}
      <Projects/>

      {/* Skills Section */}
      <div id='skills' className="bg-gradient-to-r from-black via-gray-900 to-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-white font-bold mb-8">Skills</h2>
         
            {/* Skill Card Example */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
            {/* Repeat the above div for more skills */}
          </div>
      </div>
       
      {/* Work Experience Section */}
      <div id="experience" className="py-16 bg-gray-200 text-white">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Work Experience</h2>
        <div className="space-y-8 w-7/12 mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md ">
              <h3 className="text-2xl font-semibold mb-2">{exp.company}</h3>
              <p className="text-xl mb-1">{exp.role}</p>
              <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* Call to Action Section */}
      <div id='contact' className=" bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Interested in working together?</h2>
        <p className="text-xl mb-8">Let's build something amazing! Get in touch with me.</p>
        <ContactMe/>
      </div>
      
    </section>
   
  );
};

export default Home;
