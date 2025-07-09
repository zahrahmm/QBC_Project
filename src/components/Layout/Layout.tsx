import Menu from "./Menu";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

const Layout = () => {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <aside className="fixed z-10 right-0 min-h-screen p-2 bg-base-300">
        <Menu />
      </aside>
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
