// src/app/layout.tsx
import Header from "../components/Header";
import "./globals.css";

export default function Layout({ children }) {
  return (
    <html lang="ko">
      <body>
        <div>
          <Header />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
