"use client";
import { useEffect } from "react";

const CursorEffect = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor-effect");
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "0.5";
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "1";
    };

    document.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll("p, img, a, div");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      cursor.remove();
    };
  }, []);

  return null;
};

export default CursorEffect;
