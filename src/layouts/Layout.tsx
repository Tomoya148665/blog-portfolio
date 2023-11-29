import type { ReactNode } from "react";
import Footer from "./Footer";

type PropsType = {
  pathname: string;
  children: ReactNode;
};

const Layout = ({ pathname, children }: PropsType) => {
  const firstPath = pathname.split("/")[1];
  return (
    <div className="bg-white">
      <div className="navbar bg-white shadow-sm">
        <div className="flex-1">
          {firstPath === "media" && (
            <a href="/">
              <img src="/logo.png" className="max-h-[40px] rounded-lg" />
            </a>
          )}
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {firstPath === "media" && (
              <li>
                <a href="/">プロダクト</a>
              </li>
            )}
            {firstPath !== "media" && (
              <li>
                <a href="/media">ブログ</a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="bg-base-100">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
