// src/components/Sidebar.tsx
import Link from "next/link";
import Image from "next/image";
import githubIcon from "../../public/assets/images/git_icon.png";
import mailIcon from "../../public/assets/images/mail_icon.png";
import logo from "../../public/assets/images/logo.png";

export default function Header() {
  return (
    <header className="container-l ">
      <div className="fixed left-0 h-full w-[25%] bg-header-bg flex flex-col items-center">
        <div>
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={300} height={200} />
          </Link>
        </div>

        <nav>
          <ul className="flex justify-center pl-[29px] space-x-6 text-center">
            <li>
              <Link href={"/"} className=" font-semibold text-black">
                HOME
              </Link>
            </li>
            <li>
              <Link href={"/about"} className=" font-semibold text-black">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href={"/portfolio"} className="font-semibold text-black">
                PORTFOLIO
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex justify-center relative z-10 mt-auto space-x-4 p-2">
          <Link href="mailto:heesuuuuuu@gmail.com">
            <Image src={mailIcon} alt="Mail" width={40} height={40} />
          </Link>
          <Link href="https://github.com/">
            <Image src={githubIcon} alt="GitHub" width={40} height={40} />
          </Link>
        </div>

        <p className="mt-4 p-4 text-black text-center">© heesu 2024</p>
      </div>
    </header>
  );
}
