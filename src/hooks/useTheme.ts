import { create } from "zustand";

type Theme = "light" | "dark";
interface ThemeState {
    theme: Theme;
    toggleTheme: () => void;
}

export const useTheme = create<ThemeState>((set) => ({
    theme: "dark",
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === "dark" ? "light" : "dark"
    
    if (newTheme === "dark") {
        document.documentElement.classList.add("dark")
    } else {
        document.documentElement.classList.remove("dark")
    }
    
    return { theme: newTheme }
}),
}));
