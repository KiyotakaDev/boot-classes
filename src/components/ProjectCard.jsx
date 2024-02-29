import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ data }) => {
  const { name, image, description, tags, source_code_link, deploy_link } =
    data;

  const [resolvedImage, setResolvedImage] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        // Resolve image by calling the import function
        const resolvedImageModule = await image();
        // Extracts the URL of resolved image
        const resolvedURl = resolvedImageModule.default;
        // Updates the state with the image URL
        setResolvedImage(resolvedURl);
      } catch (error) {
        console.error("Image load error: ", error);
      }
    };
    loadImage();
  }, []);

  return (
    // Card background
    <div
      style={{
        transformStyle: "preserve-3d",
      }}
      className="w-full lg:w-5/12 bg-gradient-to-br from-blue-300 dark:from-leveled-400 to-blue-600 transition-colors duration-500 ease-out dark:to-leveled-600 to-50% p-4 m-2 rounded-2xl"
    >
      {/* Cristal */}
      <div
        style={{
          transformStyle: "preserve-3d",
        }}
        className="inset-4 place-content-center bg-slate-500 rounded-xl shadow-lg shadow-emerald-400 p-3 bg-opacity-60"
      >
        {/* Project image */}
        <div
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(100px)",
          }}
          className="relative w-full h-full shadow-2xl"
        >
          {resolvedImage ? (
            <img
              src={resolvedImage}
              alt={name}
              className="w-full h-full object-center object-cover rounded-lg"
            />
          ) : null}
        </div>

        <div className="">
          <h3 className="py-4 tracking-wider">{name}</h3>
          <p>
            {description}{" "}
            {deploy_link ? (
              <Link
                to={deploy_link}
                className="hover:text-emerald-500 transition-colors duration-300"
              >
                {"Got to deployment"}
              </Link>
            ) : null}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-5">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`bg-clip-text text-transparent bg-gradient-to-br ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
