import React from "react";
import { technologies } from "../constants";
import TechTable from "../components/TechTable";
import Experience_Education from "../components/Experience_Education";

const About = () => {
  return (
    <main>
      <h1 className="page-title">About me</h1>

      <div className="w-full h-screen pb-24">
        {/* Expereince */}
        <div className="w-full h-1/2 overflow-y-scroll mb-12">
          <Experience_Education />
        </div>

        {/* Technologies */}
        <div className="w-full h-1/2 overflow-y-scroll">
          <table className="w-full table-auto border-collapse border-2 border-white">
            <thead>
              <tr className="bg-cyan-300 dark:bg-leveled-700">
                <th className="p-4 text-xl font-bold">
                  Technologies/Tools
                </th>
                <th className="p-4 text-xl font-bold">
                  Experience Level
                </th>
              </tr>
            </thead>
            <tbody className="">
              {technologies.map((tech, index) => (
                <TechTable tech={tech} i={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default About;
