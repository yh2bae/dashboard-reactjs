import { create } from "zustand";

interface SidebarToggle {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  setSidebar: (value: boolean) => void;
}

export const useSideBarToggle = create<SidebarToggle>((set, get) => ({
  isCollapsed: false,
  toggleSidebar: () => set({ isCollapsed: !get().isCollapsed }),
  setSidebar: (value: boolean) => set({ isCollapsed: value }),
}));
