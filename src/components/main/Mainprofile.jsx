import Image from "next/image";
import React from "react";
import profileImg from "../../../public/assets/images/profileimg.png";

const Mainprofile = () => {
  return (
    <div className="flex flex-col items-center pl-[350px] top-14 fixed">
      <Image
        src={profileImg}
        alt="profile image"
        width={500}
        height={500}
        className="rounded-full"
      />
    </div>
  );
};

export default Mainprofile;
