import type { PropsWithChildren } from "react";
import Menu from "./Layout/Menu";
// import User from "./User";
// import Admin from "./Admin";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <aside className="fixed right-0 w-20 h-screen bg-black flex flex-col justify-between items-center p-4 z-10">
        <Menu />
      </aside>
      {children}
    </>
  );
};

export default Layout;
