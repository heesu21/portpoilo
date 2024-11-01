"use client";
import Link from "next/link";
import Image from "next/image";
import githubIcon from "../../public/assets/images/git_icon.png";
import mailIcon from "../../public/assets/images/mail_icon.png";
import logo from "../../public/assets/images/logo.png";

export default function Sidebar() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <aside className="h-full w-1/4 md:w-1/5 lg:w-64 flex flex-col items-center justify-between bg-header-bg p-4">
      {/* Logo Section */}
      <div>
        <Link href="/">
          <Image src={logo} alt="logo" width={400} height={300} />
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul className="text-left text-2xl font-semibold space-y-4">
          <li>
            <Link href="/" className="text-black hover:underline">
              HOME
            </Link>
          </li>
          <li>
            <button onClick={() => handleScroll("projects")} className="text-black hover:underline">
              PROJECTS
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll("skills")} className="text-black hover:underline">
              SKILLS
            </button>
          </li>
        </ul>
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 p-2 mt-auto">
        <Link href="mailto:heesuuuuuu@gmail.com">
          <Image src={mailIcon} alt="Mail" width={30} height={30} />
        </Link>
        <Link href="https://github.com/">
          <Image src={githubIcon} alt="GitHub" width={30} height={30} />
        </Link>
      </div>

      {/* Footer Text */}
      <p className="mt-4 p-4 text-black text-center">© heesu 2024</p>
    </aside>
  );
}
