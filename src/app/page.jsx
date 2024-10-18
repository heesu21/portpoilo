import React from "react";
import Mainprofile from "../components/main/Mainprofile";
import Maintext from "../components/main/Maintext";

const MainPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start">
      <Mainprofile />

      <Maintext />
    </div>
  );
};

export default MainPage;
