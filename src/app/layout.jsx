import CursorEffect from "src/components/CursorEffect";
import Sidebar from "../components/Sidebar";
import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "Front-end developer heesu",

  description: "도메인 지식과 커뮤니케이션에 특별한 강점을 가진 프론트엔드 개발자입니다.",

  keywords: "Front-end, 프론트엔드, SW개발자, UX, UI, developer, react, next.js, designer, 소프트웨어",

  authors: [{ name: "윤희수" }],

  openGraph: {
    title: "Front-end developer heesu",

    description: "도메인 지식과 커뮤니케이션에 특별한 강점을 가진 프론트엔드 개발자입니다.",

    url: "https://github.com/",

    type: "website",

    images: [
      {
        url: "/og.png",
        width: 516,
        height: 504,
        alt: "Front-end developer heesu",
      },
    ],
  },
};

const lineBold = localFont({
  src: "./fonts/subset-LINESeedSansKR-Bold.woff2",
  weight: "700",
  display: "swap",
  variable: "--font-line-bold",
});

const lineRegular = localFont({
  src: "./fonts/subset-LINESeedSansKR-Regular.woff2",
  weight: "600",
  display: "swap",
  variable: "--font-line-regular",
});

const lineThin = localFont({
  src: "./fonts/subset-LINESeedSansKR-Thin.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-line-thin",
});

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${lineRegular.variable} ${lineBold.variable} ${lineThin.variable}`}>
      <body>
        <CursorEffect />
        <div className="flex w-full h-screen">
          {/* Sidebar */}
          <Sidebar />
          {/* Main content area */}
          <div className="flex-1 overflow-y-auto">
            <main className="w-full flex items-center justify-center p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
