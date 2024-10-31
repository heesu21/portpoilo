"use client";
import Link from "next/link";
import Image from "next/image";
import githubIcon from "../../public/assets/images/git_icon.png";
import mailIcon from "../../public/assets/images/mail_icon.png";
import logo from "../../public/assets/images/logo.png";

export default function Header() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <header className="container-l ">
      <div className="fixed left-0 h-full justify-between w-[10%] bg-header-bg flex flex-col items-center p-4">
        <div>
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={400} height={300} />
          </Link>
        </div>

        <nav>
          <ul className="text-left text-2xl font-semibold  ">
            <li>
              <Link href={"/"} className=" text-black hover-underline ">
                HOME
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleScroll("projects")}
                className="text-black hover:underline cursor-pointer"
              >
                PROJECTS
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("skills")}
                className="text-black hover:underline cursor-pointer"
              >
                SKILLS
              </button>
            </li>
          </ul>
        </nav>

        <div className="flex justify-center relative z-10 mt-auto space-x-4 p-2">
          <Link href="mailto:heesuuuuuu@gmail.com">
            <Image src={mailIcon} alt="Mail" width={30} height={30} />
          </Link>
          <Link href="https://github.com/">
            <Image src={githubIcon} alt="GitHub" width={30} height={30} />
          </Link>
        </div>

        <p className="mt-4 p-4 text-black text-center">© heesu 2024</p>
      </div>
    </header>
  );
}
