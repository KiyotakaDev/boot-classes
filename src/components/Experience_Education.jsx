import React from "react";
import { education, experience } from "../constants";

const Experience_Education = () => {
  return (
    <>
      <h2 className="mb-4 text-2xl font-bold">Experience</h2>
      {experience.map((exp) => (
        <div key={exp.company} className="mb-4">
          <div>
            <h3 className="text-xl font-bold">{exp.charge}</h3>
            <h4 className="text-lg font-bold">{exp.company}</h4>
            <span>{exp.date}</span>
          </div>
          <ul className="list-disc list-inside">
            {exp.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      ))}

      <div>
        <h2 className="text-2xl font-bold mb-2">Educación</h2>
        {education.map((edu) => (
          <div key={edu.name} className="mt-5">
            <h3>{edu.name}</h3>
            <p>{edu.place}</p>
            <span>{edu.date}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience_Education;
