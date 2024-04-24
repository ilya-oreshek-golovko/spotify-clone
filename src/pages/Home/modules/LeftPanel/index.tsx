import React from 'react'
import styles from "./index.module.scss";
import { useThemeActions } from '@/contexts/Theme/use';

export default function LeftPanel() {
  const {toggleTheme} = useThemeActions(); 
  
  return (
    <aside className={styles["panel-wrapper"]}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </aside>
  )
}
