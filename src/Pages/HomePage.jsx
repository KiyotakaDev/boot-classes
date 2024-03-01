import React from "react";

const HomePage = () => {
  return (
    <main className="w-[85%] mt-[4%]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Workshop #1</h1>
      <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-800 dark:text-leveled-300 transition-colors duration-300 ease-out">
        Overview
      </p>
      <ol className="custom-list list-decimal px-10 text-xl md:text-2xl lg:text-3xl mt-10">
        <li>
          Add in the <b>Developers</b> menu, the carousel of developers images,
          each slide must have the <b>full name</b> of the deveoper, their{" "}
          <b>work area</b> and a <b>short review</b>. Add <b>three buttons</b>{" "}
          that open a new tab with their social networks.
        </li>
        <li>
          In the <b>Projects</b> section, freely publish at least 3 professional
          and/or personal projects that you have developed <b>programming</b>.
        </li>
        <li>
          In the <b>About me</b> section, create a page with a{" "}
          <b>professional profile</b>, include a table with the{" "}
          <i>technologies/tools</i> you use with your respective level of experience,
          in a <b>box</b> briefly describe your professional and academic{" "}
          <b>experiences</b>.
        </li>
        <li>
          Create a <b>completely free</b> free additional section in wich you apply the
          greates numbre of concepts seen so far in the bootcamp.
        </li>
        <li>
          Create a GitHub repository with the previously proposed exercises,
          create different branches to show progress in the workshop.
        </li>
      </ol>
    </main>
  );
};

export default HomePage;
