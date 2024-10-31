import React from "react";
import Image from "next/image";
import Link from "next/link";
import Bakery from "../../../public/assets/images/Bakery.png";
import helpme from "../../../public/assets/images/helpme.png";
import jeju from "../../../public/assets/images/jeju.png";
import portpolio from "../../../public/assets/images/portpolio.png";

const ProjectImages = () => {
  return (
    <div className="w-full max-w-3xl mt-10 min-h-screen flex flex-col items-center ml-[400px]">
      <hr className="w-full border-gray-700 my-8 pt-[100px]" />
      <h2 className="text-3xl font-bold mb-4">PROJECTS</h2>
      <div className="grid grid-cols-1 gap-24 mt-8">
        <Link href={"/portpolio"}>
          <button>
            <Image
              src={portpolio}
              alt="portpolio"
              width={800}
              height={800}
              className="rounded-lg cursor-pointer"
            />
          </button>
        </Link>
        <Link href={"/helpme"}>
          <button>
            <Image
              src={helpme}
              alt="helpme"
              width={800}
              height={800}
              className="rounded-lg cursor-pointer"
            />
          </button>
        </Link>
        <Link href={"/bakery"}>
          <button>
            <Image
              src={Bakery}
              alt="Bakery"
              width={800}
              height={800}
              className="rounded-lg cursor-pointer"
            />
          </button>
        </Link>
        <Link href="/jeju">
          <button>
            <Image
              src={jeju}
              alt="jeju"
              width={800}
              height={800}
              className="rounded-lg cursor-pointer"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectImages;
