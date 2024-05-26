import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";
import { SideNavItemGroup } from "@/types/sidebar";
import classNames from "classnames";
import { SideBarMenuItem } from "./sidebar-menu-item";

const SideBarMenuGroup = ({ menuGroup }: { menuGroup: SideNavItemGroup }) => {
  const { isCollapsed } = useSideBarToggle();

  const menuGroupTitleSyle = classNames(
    "py-4 tracking-[.1rem] font-medium uppercase text-sm text-sm text-sidebar-foreground",
    {
      "text-center": isCollapsed,
    }
  );
  return (
    <>
      <h3 className={menuGroupTitleSyle}>
        {!isCollapsed ? menuGroup.title : "..."}
      </h3>
      {menuGroup.menuList?.map((item, index) => {
        return <SideBarMenuItem key={index} item={item} />;
      })}
    </>
  );
};

export default SideBarMenuGroup;
