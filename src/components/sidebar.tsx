import classNames from "classnames";
import { useEffect, useState } from "react";
import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";
import SideBarMenuGroup from "./sidebar-menu-group";
import { SideBarLogo } from "./sidebar-logo";
import { SIDENAV_ITEMS } from "@/constants/menu";

export const SideBar = () => {
  const [mounted, setMounted] = useState(false);
  const { isCollapsed, setSidebar } = useSideBarToggle();

  const asideStyle = classNames(
    "sidebar overflow-y-auto overflow-x-auto fixed bg-sidebar h-full shadow-sm shadow-slate-500/40 transition duration-300 ease-in-out z-[50]",
    {
      ["w-[20rem]"]: !isCollapsed,
      ["sm:w-[5.4rem] sm:left-0 left-[-100%]"]: isCollapsed,
    }
  );

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      // Automatically collapse the sidebar below 768px
      if (window.innerWidth < 768) {
        setSidebar(true);
      } else {
        setSidebar(false);
      }
    };
    // Call once to set initial state
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setSidebar]);

  return (
    <aside className={asideStyle}>
      <div className="sidebar-top relative flex items-center px-3.5 py-5">
        {mounted && <SideBarLogo />}
        <h3
          className={classNames(
            "pl-2 font-bold text-2xl min-w-max text-sidebar-foreground",
            { hidden: isCollapsed }
          )}
        >
          Dashboard
        </h3>
      </div>
      <nav className="flex flex-col gap-2 transition duration-300 ease-in-out">
        <div className="flex flex-col gap-2 px-4">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <SideBarMenuGroup key={idx} menuGroup={item} />;
          })}
        </div>
      </nav>
    </aside>
  );
};
