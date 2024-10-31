import React from "react";
import Mainprofile from "../components/main/Mainprofile";
import Maintext from "../components/main/Maintext";
import About from "src/components/main/About";

const MainPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start">
      <Mainprofile />

      <Maintext />

      <About />
    </div>
  );
};

export default MainPage;
