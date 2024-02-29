import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";

const ProjectsPage = () => {
  return (
    <main className="relative h-screen">
      <div className="w-[95%] absolute top-[5%]">
        <h1 className="text-4xl font-bold mb-[4%]">Projects</h1>

        <div className="flex flex-col lg:flex-row mr-10">
          {projects.map((project) => (
            <ProjectCard key={project.name} data={project} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
