import React from "react";
import Image from "next/image";
import logo from "../../../../public/assets/images/logo.png";

const Portfoliopage = () => {
  return (
    <div className=" min-h-screen p-8 flex flex-col items-center ml-[400px]">
      {/* 프로필 섹션 */}
      <div className="flex flex-col items-center">
        <Image
          src={logo}
          alt="Profile Image"
          width={120}
          height={120}
          className="rounded-full"
        />
        <h1 className="text-3xl font-bold mt-4">윤희수</h1>
        <p className="text-lg">1995.02.21</p>
        <div className="flex gap-2 mt-2">
          <span className="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">
            Frontend-Developer
          </span>
          <span className="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">
            React.js
          </span>
        </div>
        <p className="text-center mt-4 text-sm max-w-md">
          안녕하세요 사용자와 개발자 모두가 만족할 수 있는 코드를 작성하는
          프론트엔드 개발자 윤희수 입니다.
        </p>
      </div>

      {/* 구분선 */}
      <hr className="w-full border-gray-700 my-8" />

      {/* 스킬 섹션 */}
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">SKILLS ABILITY</h2>

        {/* 언어 및 프레임워크 섹션 */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Language/Framework/Library</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-gray-800 text-white px-2 py-1 rounded-md">
              React.js
            </span>
            <span className="bg-gray-800 text-white px-2 py-1 rounded-md">
              Next.js
            </span>
            <span className="bg-gray-800 text-white px-2 py-1 rounded-md">
              JavaScript(ES6+)
            </span>
            <span className="bg-gray-800 text-white px-2 py-1 rounded-md">
              HTML5
            </span>
            <span className="bg-gray-800 text-white px-2 py-1 rounded-md">
              CSS3
            </span>
            <span className="bg-gray-800 text-white px-2 py-1 rounded-md">
              styled components
            </span>
            <span className="bg-gray-800 text-white px-2 py-1 rounded-md">
              MySQL
            </span>
            <span className="bg-gray-800 text-white px-2 py-1 rounded-md">
              jQuery
            </span>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">
            Design, Deployment & Version Control
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-gray-800 text-white px-2 py-1 rounded-md">
              Git
            </span>
            <span className="bg-gray-800 text-white px-2 py-1 rounded-md">
              Vercel
            </span>
            <span className="bg-gray-800 text-white px-2 py-1 rounded-md">
              Photoshop
            </span>
            <span className="bg-gray-800 text-white px-2 py-1 rounded-md">
              Figma
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfoliopage;
