import styles from "./index.module.scss";
import Navigation from "./modules/Navigation";
import MediaLibrary from "./modules/MediaLibrary";
import PlaylistContextProvider from "@/contexts/PlaylistLibrary/provider";

export default function LeftPanel() {
  
  return (
    <aside className={styles["panel-wrapper"]}>
      <Navigation />
      <PlaylistContextProvider>
        <MediaLibrary />
      </PlaylistContextProvider>
    </aside>
  )
}
