import React from "react";
import { technologies } from "../constants";
import TechTable from "../components/TechTable";
import Experience_Education from "../components/Experience_Education";

const About = () => {
  return (
    <main className="relative h-screen">
      <div className="w-[95%] absolute">
        <h1 className="page-title">About me</h1>

        <div className="mx-auto w-full p-4">
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">Technologies and Tools</h2>
            <div className="h-[15.5rem] overflow-y-scroll">
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Thecnologies/Tools</th>
                    <th className="px-4 py-2">Experience Level</th>
                  </tr>
                </thead>
                <tbody className="">
                  {technologies.map((tech) => (
                    <TechTable key={tech.name} tech={tech} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="h-[21rem] overflow-y-scroll text-2xl">
            <div className="mb-8">
              <Experience_Education />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
