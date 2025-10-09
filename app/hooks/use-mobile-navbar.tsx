import { create } from "zustand";

const useMobileNavbar = create<UseMobileNavbarOptions>()((set) => ({
  opened: false,
  toggle: () => set((state) => ({ opened: !state.opened })),
  close: () => set({ opened: false }),
}));
export default useMobileNavbar;

type UseMobileNavbarOptions = {
  opened: boolean;
  toggle: () => void;
  close: () => void;
};
