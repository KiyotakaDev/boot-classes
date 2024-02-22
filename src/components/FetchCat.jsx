import React, { useEffect, useState } from "react";

const App = () => {
  const [catFact, setCatFact] = useState("");
  const [catURL, setCatURL] = useState("");

  useEffect(() => {
    const fetchCatFat = async () => {
      try {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        setCatFact(data.fact);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCatFat();
  }, []);

  useEffect(() => {
    const generateCatImage = async (fact) => {
      try {
        const phrase = fact.split(' ', 3).join(' ')
        const response = await fetch(`https://cataas.com/cat/says/${phrase}`);
        setCatURL(response.url);
      } catch (error) {
        console.error("Fetching image error: ", error);
      }
    };

    generateCatImage(catFact);
  }, [catFact]);

  return (
    <div
      className="container"
    >
      <div className="card">
        <h1>Random Cat Fact</h1>
        <p>{catFact}</p>
        {catURL ? (
          <img loading="lazy" src={catURL} alt="cat" className="cat-img" />
        ) : (<div>Loading...</div>)}
      </div>
    </div>
  );
};

export default App;
