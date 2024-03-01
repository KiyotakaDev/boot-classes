import React, { useEffect, useState } from "react";

const TechTable = ({ tech, i }) => {
  const { name, icon, level } = tech;

  const [resolverdURL, setResolverdURL] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        // Resolve image by calling the import function
        const imageModule = await icon();
        // Extracts the URL of resolved image
        const imageURL = imageModule.default;
        // Updates the state with the image URL
        setResolverdURL(imageURL);
      } catch (error) {
        console.error("Loading imgae error: ", error);
      }
    };
    loadImage();
  }, []);

  return (
    <tr
      className={
        i % 2 == 0
          ? "bg-cyan-200 dark:bg-leveled-600"
          : "bg-cyan-300 dark:bg-leveled-700"
      }
    >
      <th className="flex flex-col justify-center items-center py-6">
        {resolverdURL ? (
          <img src={resolverdURL} alt={name} className="w-14 h-14" />
        ) : null}
        <span className="font-bold text-md text-slate-600 dark:text-white dark:dark-neon-shadow">
          {name}
        </span>
      </th>
      <th className="text-xl">{level}</th>
    </tr>
  );
};

export default TechTable;
