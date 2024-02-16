import React from "react";
import UserCard from "./components/UserCard";

const App = () => {
  return (
    <div className="user-container">
      <UserCard
        info={{
          name: 'Brais Moure',
          country: 'Spain',
          charge: 'Software Engineer',
          img: '/brais.png',
          company: 'Moure Dev Founder',
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam quae veniam, est at non, accusantium animi minima id sint consequuntur asperiores quas rem facilis in porro nemo voluptatibus! Nulla.'
        }}
      />

      <UserCard
        info={{
          name: 'Migel Angel Duran',
          country: 'Spain',
          charge: 'Software Engineer',
          img: '/midu.png',
          company: 'None',
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam quae veniam, est at non, accusantium animi minima id sint consequuntur asperiores quas rem facilis in porro nemo voluptatibus! Nulla.'
        }}
      />

      <UserCard
        info={{
          name: 'Lucas Dalto',
          country: 'Argentina',
          charge: 'Software Engineer',
          img: '/dalto.jpg',
          company: 'None',
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam quae veniam, est at non, accusantium animi minima id sint consequuntur asperiores quas rem facilis in porro nemo voluptatibus! Nulla.'
        }}
      />
    </div>
  );
};

export default App;
