import Image from "next/image";
import React from "react";
import profileImg from "../../../public/assets/images/profileimg.png";

const Mainprofile = () => {
  return (
    <div className="flex flex-col items-center pl-[350px] top-14 relative">
      <Image
        src={profileImg}
        alt="profile image"
        width={300}
        height={300}
        className="rounded-full"
      />
    </div>
  );
};

export default Mainprofile;
