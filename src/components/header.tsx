import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";
import classNames from "classnames";
import { BsList } from "react-icons/bs";
import { UserNav } from "./usernav";
import { ThemeSwitcher } from "./theme-switcher";

export default function Header() {
  const { isCollapsed, toggleSidebar } = useSideBarToggle();

  // const sidebarToggle = () => {
  //   invokeToggleCollapse();
  // };

  const headerStyle = classNames(
    "bg-sidebar fixed w-full z-[49] px-4 shadow-sm shadow-slate-500/40",
    {
      ["sm:pl-[20rem]"]: !isCollapsed,
      ["sm:pl-[5.6rem]"]: isCollapsed,
    }
  );

  return (
    <header className={headerStyle}>
      <div className="h-16 flex items-center justify-between">
        <button
          onClick={toggleSidebar}
          className="order-2 sm:order-1 shrink-btn float-right bg-sidebar-muted text-sidebar-muted-foreground hover:bg-foreground hover:text-background ml-3 rounded-md w-[30px] h-[30px] flex items-center justify-center shadow-md shadow-black/10 transition duration-300 ease-in-out"
        >
          <BsList />
        </button>
        <div className="flex items-center justify-between sm:order-2 order-1">
          <div className="p-2">
            <ThemeSwitcher />
          </div>
          <div className="h-10 w-10 flex rounded-full bg-sidebar-muted items-center justify-center text-center">
            <UserNav />
          </div>
        </div>
      </div>
    </header>
  );
}
