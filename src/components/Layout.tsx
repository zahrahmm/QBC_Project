import type { PropsWithChildren } from "react";
// import User from "./Layout/User";
import Menu from "./Layout/Menu";
// import Admin from "./Layout/Admin";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <aside className="fixed z-10 right-0 min-h-screen p-2 bg-base-300">
        <Menu />
        {/* <User /> */}
        {/* <Admin /> */}
      </aside>
      <main className="bg-gray-900 min-h-screen">{children}</main>
    </div>
  );
};

export default Layout;
