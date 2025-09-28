import { create } from "zustand";
import { Theme, ThemeStore } from "./themeStore.types";
import { persist } from "zustand/middleware";

const getDefaultTheme = (): Theme => {
  if (typeof window === "undefined") return "light";
  return (localStorage.getItem("theme") as Theme) || "light";
};

const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: getDefaultTheme(),
      toggleTheme: () => {
        const newTheme = get().theme === "light" ? "dark" : "light";
        set({ theme: newTheme });
      },
    }),
    {
      name: "theme",
    }
  )
);

export const useTheme = (): { theme: Theme; toggleTheme: () => void } => {
  const { theme, toggleTheme } = useThemeStore();

  if (typeof window !== "undefined") {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }
  return { theme, toggleTheme };
};
