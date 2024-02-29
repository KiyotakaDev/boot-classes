import React from 'react'
import ProjectCard from '../components/ProjectCard';
import { projects } from '../constants';

const ProjectsPage = () => {
  return (
    <main>
      <div className='w-full h-screen flex flex-col lg:flex-row justify-center items-center'>
        {projects.map((project) => (
          <ProjectCard key={project.name} data={project} />
        ))}
      </div>
    </main>
  );
}

export default ProjectsPage