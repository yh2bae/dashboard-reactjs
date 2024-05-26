import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";
import classNames from "classnames";
import { BsChevronRight } from "react-icons/bs";
import { SideNavItem } from "@/types/sidebar";

export const SideBarMenuItem = ({ item }: { item: SideNavItem }) => {
  const { isCollapsed } = useSideBarToggle();
  const location = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const inactiveLink = classNames(
    "flex items-center min-h-[40px] h-full text-sidebar-foreground py-2 px-4 hover:text-sidebar-muted-foreground hover:bg-sidebar-muted rounded-md transition duration-200",
    { "justify-center": isCollapsed }
  );

  const activeLink = classNames(
    "text-sidebar-muted-foreground bg-sidebar-muted"
  );

  const navMenuDropdownItem =
    "text-red py-2 px-4 hover:text-sidebar-muted-foreground transition duration-200 rounded-md";

  const dropdownMenuHeaderLink = classNames(inactiveLink, {
    "bg-sidebar-muted rounded-b-none": subMenuOpen,
  });

  return (
    <>
      {item.submenu ? (
        <div className="min-w-[18px]">
          <div
            className={`${dropdownMenuHeaderLink} ${
              location.pathname.includes(item.path) ? activeLink : ""
            }`}
            onClick={toggleSubMenu}
          >
            <div className="min-w-[20px]">{item.icon}</div>
            {!isCollapsed && (
              <>
                <span className="ml-3 text-base leading-6 font-semibold">
                  {item.title}
                </span>
                <BsChevronRight
                  className={`${
                    subMenuOpen ? "rotate-90" : ""
                  } ml-auto stroke-2 text-xs`}
                />
              </>
            )}
          </div>
          {subMenuOpen && !isCollapsed && (
            <div className="bg-sidebar-muted border-l-4">
              <div className="grid gap-y-2 px-10 leading-5 py-3">
                {item.subMenuItems?.map((subItem, idx) => (
                  <Link
                    key={idx}
                    to={subItem.path}
                    className={`${navMenuDropdownItem} ${
                      location.pathname === subItem.path
                        ? "text-sidebar-muted-foreground font-medium"
                        : "text-sidebar-foreground"
                    }`}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <Link
          to={item.path}
          className={`${inactiveLink} ${
            location.pathname.includes(item.path) ? activeLink : ""
          }`}
        >
          <div className="min-w-[20px]">{item.icon}</div>
          {!isCollapsed && (
            <span className="ml-3 leading-6 font-semibold">{item.title}</span>
          )}
        </Link>
      )}
    </>
  );
};
