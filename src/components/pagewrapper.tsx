import classNames from "classnames";
import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isCollapsed } = useSideBarToggle();

  const bodyStyle = classNames(
    "bg-background flex flex-col mt-16 py-4 p-4 h-full overflow-y-auto",
    {
      "sm:pl-[21rem]": !isCollapsed,
      "sm:pl-[6.4rem]": isCollapsed,
    }
  );

  return <div className={bodyStyle}>{children}</div>;
}
