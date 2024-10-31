"use client";
import React, { useState, useEffect } from "react";

const Maintext = () => {
  const koreanMessage = "프론트엔드 개발자 윤희수입니다.";
  const englishMessage = "I am Heesu, a front-end developer.";
  const typingSpeed = 200;

  const [displayText, setDisplayText] = useState(koreanMessage);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < englishMessage.length) {
        const newText =
          englishMessage.substring(0, index + 1) +
          koreanMessage.substring(index + 1);
        setDisplayText(newText);
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [koreanMessage, englishMessage]);

  return (
    <div className="h-screen flex pl-96 pt-[100px] relative">
      <p className="font-bold text-4xl">{displayText}</p>
    </div>
  );
};

export default Maintext;
