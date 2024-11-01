import React from "react";
import NavbarComponent from "../component/navbar";

const Home: React.FC = () => {
  return (
    <div>
      <NavbarComponent />
      <h1 className="mt-10">Welcome to the Home Page</h1>
    </div>
  );
};

export default Home;
