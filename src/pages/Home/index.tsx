import LeftPanel from "./modules/LeftPanel";
import MainPanel from "./modules/MainPanel";
import RightPanel from "./modules/RightPanel";
import styles from "./index.module.scss";
import Player from "./modules/Player";

export default function Home() {
  return (
    <div className={styles["main-wrapper"]}>
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
