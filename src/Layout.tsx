import type { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative">
      <aside className="fixed right-0 min-h-screen min-w-20 bg-accent"></aside>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
