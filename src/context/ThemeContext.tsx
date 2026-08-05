/** @format */
"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "theme";

// The blocking script in the root layout has already resolved and applied the
// theme before first paint, so the initial state just reads what it decided.
const readAppliedTheme = (): Theme => {
    if (typeof document === "undefined") return "light";
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

const applyTheme = (theme: Theme) => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(readAppliedTheme);

    // The DOM already matches on first render; this only handles later changes.
    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    // Follow the system until the visitor makes an explicit choice.
    useEffect(() => {
        const query = window.matchMedia("(prefers-color-scheme: dark)");

        const handleSystemChange = (event: MediaQueryListEvent) => {
            if (window.localStorage.getItem(STORAGE_KEY)) return;
            setTheme(event.matches ? "dark" : "light");
        };

        const handleStorage = (event: StorageEvent) => {
            if (event.key !== STORAGE_KEY) return;
            if (event.newValue === "light" || event.newValue === "dark") {
                setTheme(event.newValue);
            }
        };

        query.addEventListener("change", handleSystemChange);
        window.addEventListener("storage", handleStorage);

        return () => {
            query.removeEventListener("change", handleSystemChange);
            window.removeEventListener("storage", handleStorage);
        };
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme((previous) => {
            const next = previous === "light" ? "dark" : "light";
            try {
                window.localStorage.setItem(STORAGE_KEY, next);
            } catch {
                // Private mode or blocked storage — the theme still applies for this session.
            }
            return next;
        });
    }, []);

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
