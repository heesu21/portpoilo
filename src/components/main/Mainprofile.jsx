"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import profileImg from "../../../public/assets/images/profileimg.png";

const Mainprofile = () => {
  const koreanMessage = "프론트엔드 개발자 윤희수입니다.";
  const englishMessage = "I am Heesu, a front-end developer.";
  const typingSpeed = 200;

  const [displayText, setDisplayText] = useState(koreanMessage);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < englishMessage.length) {
        const newText = englishMessage.substring(0, index + 1) + koreanMessage.substring(index + 1);
        setDisplayText(newText);
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [koreanMessage, englishMessage]);

  return (
    <>
      {/* 프로필 이미지 섹션 */}
      <div className="w-full flex justify-center mb-6">
        <div className="flex flex-col items-center">
          <Image src={profileImg} alt="profile image" width={200} height={200} className="rounded-full" />
        </div>
      </div>

      {/* 이름 또는 간단한 소개 텍스트 섹션 */}
      <div className="w-full flex justify-center mb-6">
        <div className="relative flex justify-center">
          <p className="font-bold text-4xl text-center">{displayText}</p>
        </div>
      </div>

      {/* 상세 소개 텍스트 섹션 */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-2xl flex flex-col items-center text-center font-medium text-xl px-4 space-y-6">
          <p>안녕하세요 프론트엔드 개발자 윤희수입니다.</p>
          <p>
            저는 의류 이커머스 사업을 운영하며, 이커머스 플랫폼의 운영과 사용자 경험에 대한 깊은 이해를 쌓았습니다. 이커머스 도메인 지식을 바탕으로, 사용자 중심의 웹 환경을 구축하는 데 열정을 가진
            프론트엔드 개발자입니다.
          </p>
          <p>이커머스 업계에서의 도메인 지식과 웹디자인 기술을 결합하여, 시각적으로 매력적이면서도 기능적인 웹페이지를 구현하는데 강점을 가지고 있습니다.</p>
          <p>저는 이러한 도메인 지식과 경험을 바탕으로 사용자 중심의 웹 환경을 구축하는 데 기여하고자 하며, 지속적인 학습을 통해 끊임없이 성장하는 프론트엔드 개발자가 되고자 합니다.</p>
        </div>
      </div>
    </>
  );
};

export default Mainprofile;
