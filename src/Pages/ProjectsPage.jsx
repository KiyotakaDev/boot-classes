import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";

const ProjectsPage = () => {
  return (
    <main>
      <h1 className="text-white text-4xl font-bold mb-12 light-neon-shadow dark:dark-neon-shadow">
        Projects
      </h1>

      <div className="flex flex-col flex-wrap justify-center items-center gap-8 lg:flex-row pb-24 sm:pb-28">
        {projects.map((project) => (
          <ProjectCard key={project.name} data={project} />
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;
