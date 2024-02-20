import React from "react";
import UserCard from "./components/UserCard";
import { devs } from "./constants";

const App = () => {
  return (
    <div className="container">
      {devs.map((dev, index) => (
        <div key={`dev-${index}`}>
          <UserCard info={dev} />
        </div>
      ))}
    </div>
  );
};

export default App;
