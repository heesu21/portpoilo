import React from "react";
import Image from "next/image";

const Skill = () => {
  return (
    <div className="w-full flex justify-center min-h-screen mt-8 p-8">
      <div className="w-full max-w-3xl flex flex-col items-center">
        {/* 프로필 섹션 */}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mt-4">SKILLS ABILITY</h1>
          {/* 언어 및 프레임워크 섹션 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold">Language/Framework/Library</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-gray-800 text-white px-2 py-1 rounded-md">React.js</span>
              <span className="bg-gray-800 text-white px-2 py-1 rounded-md">Next.js</span>
              <span className="bg-gray-800 text-white px-2 py-1 rounded-md">JavaScript(ES6+)</span>
              <span className="bg-gray-800 text-white px-2 py-1 rounded-md">HTML5</span>
              <span className="bg-gray-800 text-white px-2 py-1 rounded-md">CSS3</span>
              <span className="bg-gray-800 text-white px-2 py-1 rounded-md">Tailwind CSS</span>
              <span className="bg-gray-800 text-white px-2 py-1 rounded-md">Bootstrap</span>
              <span className="bg-gray-800 text-white px-2 py-1 rounded-md">Styled Components</span>
              <span className="bg-gray-800 text-white px-2 py-1 rounded-md">Postgresql</span>
            </div>
          </div>

          {/* 디자인, 배포 및 버전 관리 섹션 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold">Design, Deployment & Version Control</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-gray-800 text-white px-2 py-1 rounded-md">Git</span>
              <span className="bg-gray-800 text-white px-2 py-1 rounded-md">Vercel</span>
              <span className="bg-gray-800 text-white px-2 py-1 rounded-md">Photoshop</span>
              <span className="bg-gray-800 text-white px-2 py-1 rounded-md">Figma</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
