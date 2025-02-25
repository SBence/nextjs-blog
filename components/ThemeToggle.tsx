"use client";

import { darkModeAtom } from "@/store";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

import styles from "@/styles/components/ThemeToggle.module.scss";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle("dark", darkMode);
    }
  }, [darkMode, mounted]);

  const buttonMarkup = (
    <button
      className={`${styles.toggle} ${mounted && darkMode ? styles.on : ""}`}
      onClick={() => setDarkMode((prev) => !prev)}
      aria-label={
        mounted
          ? darkMode
            ? "Switch to light mode"
            : "Switch to dark mode"
          : "Theme toggle"
      }
    >
      <div className={styles.circle}></div>
      {mounted && (darkMode ? "☀️" : "🌙")}
    </button>
  );

  return buttonMarkup;
}
