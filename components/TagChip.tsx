import { darkModeAtom } from "@/store";
import { useAtomValue } from "jotai";
import uniqolor from "uniqolor";

import styles from "@/styles/components/TagChip.module.scss";

export default function TagChip({ text }: { text: string }) {
  const darkMode = useAtomValue(darkModeAtom);

  const color = uniqolor(text, {
    lightness: darkMode ? 50 : 25,
    saturation: darkMode ? 50 : 100,
  }).color;
  const backgroundColor = uniqolor(text, {
    lightness: darkMode ? 10 : 95,
    saturation: darkMode ? 50 : 100,
  }).color;

  return (
    <div className={styles.container} style={{ backgroundColor, color }}>
      {text}
    </div>
  );
}
