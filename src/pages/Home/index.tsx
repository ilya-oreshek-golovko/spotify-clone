import LeftPanel from "./modules/LeftPanel";
import MainPanel from "./modules/MainPanel";
import RightPanel from "./modules/RightPanel";
import styles from "./index.module.scss";
import Player from "./modules/Player";
import {MouseEvent} from "react";

export default function Home() {

  const handleRightClick = (e : MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // prevent the default behaviour when right clicked
    console.log("Right Click");
  }
  
  return (
    <div className={styles["main-wrapper"]} onContextMenu={handleRightClick}>
      <div className={styles["top-wrapper"]}>
        <LeftPanel />
        <MainPanel />
        <RightPanel />
      </div>
      <footer className={styles["bottom-wrapper"]}>
        <Player />
      </footer>
    </div>
  )
}
