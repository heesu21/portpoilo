import React from "react";
import Mainprofile from "../components/main/Mainprofile";
import Maintext from "../components/main/Maintext";
import About from "../components/main/About";
import Skill from "src/components/main/Skill";
import ProjectImages from "src/components/main/ProjectImages";

const MainPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start">
      <Mainprofile />

      <Maintext />

      <About />

      <section id="projects" className="w-full min-h-screen">
        <ProjectImages />
      </section>

      <section id="skills" className="w-full min-h-screen">
        <Skill />
      </section>
    </div>
  );
};

export default MainPage;
