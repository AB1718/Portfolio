import React from 'react';
import ProjectCard from './ProjectCard';
import QmchImage from '../assets/Qmch.png';
import BlogImage from '../assets/Blog.png';
import EdTech from '../assets/StudyNotion.png';
import Ecomzy from '../assets/Ecomzy.png'

const projectData = [
  {
    image: QmchImage,
    title: 'Hospital Website',
    description: 'Developed an intuitive and responsive website for QMCH, enhancing patient engagement and streamlining healthcare services online. The platform features user-friendly navigation.',
    githubLink: 'https://github.com/yourusername/project-one',
    liveDemoLink: 'https://qmch.in/',
  },
  {
    image: EdTech,
    title: 'Edtech Platform',
    description: 'Designed and developed StudyNotion, a dynamic edtech platform that enhances student learning through interactive tools and resources. The platform features personalized learning paths, real-time feedback.',
    githubLink: 'https://github.com/AB1718/Study-Notion.git',
    liveDemoLink: 'https://study-notion-olive.vercel.app/',
  },
  {
    image: Ecomzy,
    title: 'Shopping Cart',
    description: 'Developed a feature-rich e-commerce platform, Shopping Cart, offering seamless browsing and secure checkout experiences. The site includes intuitive product management and user-friendly navigation to enhance online shopping efficiency.',
    githubLink: 'https://github.com/yourusername/project-one',
    liveDemoLink: 'https://project-one-demo.com',
  },
  {
    image: BlogImage,
    title: 'Blog Website',
    description: 'Designed and developed a sleek, responsive blog platform for Blaze Leather, featuring engaging content and seamless navigation. The site offers a modern look and user-friendly interface to enhance reader experience and interaction.',
    githubLink: 'https://github.com/yourusername/project-one',
    liveDemoLink: 'https://www.blaze-leather.com/',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-200  py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl text-gray-800 font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 p-6 ">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              liveDemoLink={project.liveDemoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
