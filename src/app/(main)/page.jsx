import React from "react";
import MainProfile from "../../components/main/MainProfile";
import Skill from "src/components/main/Skill";
import ProjectImages from "src/components/main/ProjectImages";

const MainPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start">
      {/* 스크롤바 아예 없애거나 커스텀 */}
      {/* 섹션 하부에 border 추가로 변경 */}
      <section id="profile" className="w-full flex justify-center flex-col border-gray-700">
        <MainProfile />
      </section>

      <section id="skills" className="w-full flex justify-center flex-col border-gray-700">
        <Skill />
      </section>

      <section id="projects" className="w-full flex justify-center flex-col pb-10">
        <ProjectImages />
      </section>
    </div>
  );
};

export default MainPage;
