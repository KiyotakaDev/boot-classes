import React from "react";
import { technologies } from "../constants";
import TechTable from "../components/TechTable";
import Experience_Education from "../components/Experience_Education";

const About = () => {
  return (
    <main className="h-[85vh]">
      <h1 className="page-title">About me</h1>

      <div className="w-full h-[90%] mb-36">
        {/* Expereince */}
        <div className="w-full h-[40%] overflow-y-scroll mb-8">
          <Experience_Education />
        </div>

        {/* Technologies */}
        <div className="w-full h-[60%] overflow-y-scroll flex justify-center items-cente">
          <table className="w-full table-auto border-collapse lg:border-2 border-white">
            <thead>
              <tr className="bg-cyan-300 dark:bg-leveled-700">
                <th className="p-4 text-sm sm:text-lg lg:text-xl font-bold">
                  Technologies/Tools
                </th>
                <th className="p-4 text-sm sm:text-lg lg:text-xl font-bold">
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
