import React from "react";
import { education, experience } from "../constants";

const Experience_Education = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-start lg:gap-8 xl:gap-16">
      <div>
        <h2 className="about-title">Experience</h2>
        {experience.map((exp) => (
          <div key={exp.company} className="mt-5">
            <h3 className="about-charge">{exp.charge}</h3>
            <h4 className="about-place">{exp.company}</h4>
            <span className="about-date">{exp.date}</span>
            <ul className="list-disc list-inside about-points">
              {exp.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 lg:mt-0">
        <h2 className="about-title">Educación</h2>
        {education.map((edu) => (
          <div key={edu.name} className="mt-8">
            <h3 className="about-charge">{edu.name}</h3>
            <h4 className="about-place">{edu.place}</h4>
            <span className="about-date">{edu.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience_Education;
