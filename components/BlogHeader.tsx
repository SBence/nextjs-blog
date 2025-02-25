import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

import styles from "@/styles/components/BlogHeader.module.scss";

export default function BlogHeader() {
  return (
    <header className={styles.header}>
      <Link href="/">My Blog</Link>
      <ThemeToggle />
    </header>
  );
}
