import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ data }) => {
  const { name, image, description, tags, source_code_link, deploy_link } =
    data;

  const card = useRef(null);
  const [leave, setLeave] = useState(false)
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

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


  useEffect(() => {
    const rotateElement = (e) => {
      setLeave(false)
      const cardRect = card.current.getBoundingClientRect();
      
      const centerX = cardRect.width / 2;
      const centerY = cardRect.height / 2;
      
      const offsetX = e.clientX - cardRect.left;
      const offsetY = e.clientY - cardRect.top;
      
      const rotateX = ((centerY - offsetY) / centerY) * 6;
      setRotateX(rotateX);
      const rotateY = ((offsetX - centerX) / centerX) * 6;
      setRotateY(rotateY);
    };
    
    const onLeave = () => {
      setLeave(true)
      setRotateX(0)
      setRotateY(0)
    }
    
    card.current.addEventListener("mousemove", rotateElement);
    card.current.addEventListener("mouseleave", onLeave);
    
    return () => {
      if (!card.current) return
      card.current.removeEventListener("mousemove", rotateElement);
      card.current.removeEventListener("mouseleave", onLeave);
    };
  }, [card.current]);
  
  return (
    // Card background
    <div
      ref={card}
      style={leave ? {
        transformStyle: "preserve-3d",
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`, 
        transition: 'transform 0.3s ease'   
      } : {
        transformStyle: "preserve-3d",
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,   
      }}
      className="w-full lg:w-[40%] bg-gradient-to-br from-cyan-300 dark:from-leveled-400 to-cyan-700 dark:to-leveled-600 transition-colors duration-500 ease-out  to-50% p-6 mr-6 rounded-2xl shadow-2xl shadow-neon dark:shadow-leveled-200 h-auto"
    >
      {/* Cristal */}
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(100px)",
        }}
        className="inset-4 place-content-center bg-leveled-500 dark:bg-neon rounded-xl shadow-lg shadow-emerald-400 p-6 bg-opacity-50 dark:bg-opacity-20"
      >
        {/* Project image */}
        <div
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(100px)",
          }}
          className="relative w-full h-full"
        >
          {resolvedImage ? (
            <img
              src={resolvedImage}
              alt={name}
              className="w-full h-[50%] object-center object-cover rounded-lg"
            />
          ) : null}
        </div>

        <div className="text-cyan-100">
          <h3 className="text-xl py-4 tracking-wider font-bold light-neon-shadow dark:dark-neon-shadow">
            {name}
          </h3>
          <p className="text-lg font-semibold">
            {description}{" "}
            {deploy_link ? (
              <Link
                to={deploy_link}
                className="text-leveled-200 hover:text-neon transition-colors duration-300 flex flex-col mt-5"
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
              className={`bg-clip-text text-transparent bg-gradient-to-br ${tag.id}`}
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
