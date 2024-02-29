import React from 'react'
import ProjectCard from '../components/ProjectCard';
import { projects } from '../constants';

const ProjectsPage = () => {
  return (
    <main>
      <h2 className='font-bold text-4xl py-[4%]'>Projects</h2>
      <div className='flex flex-col lg:flex-row mr-10'>
        {projects.map((project) => (
          <ProjectCard key={project.name} data={project} />
        ))}
      </div>
    </main>
  );
}

export default ProjectsPage