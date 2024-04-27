import styles from "./index.module.scss";
import Navigation from "./modules/Navigation";
import MediaLibrary from "./modules/MediaLibrary";

export default function LeftPanel() {
  
  return (
    <aside className={styles["panel-wrapper"]}>

      {/* <section className={styles["top-panel"]}>
        <div className={styles["btn"]}>
          <IoHome className={styles["btn-icon"]} />
          <a href="№">Главная</a>
        </div>
        <div className={styles["btn"]}>
          <CiSearch className={styles["btn-icon"]}/>
          <a href="№">Поиск</a>
        </div>
      </section> */}
      <Navigation />
      <MediaLibrary />
      {/* <section className={styles["main-panel"]}>
        
        <section className={styles["media-library"]}>
          <div className={styles["btn"]}>
            <TfiLayoutMediaRightAlt className={styles["btn-icon"]} />
            <a href="№">Моя медиатека</a>
          </div>
          <div className={styles["btn"]}>
            <FaPlus className={styles["btn-icon"]}/>
          </div>
          <div className={styles["btn"]}>
            <FaArrowRight className={styles["btn-icon"]}/>
          </div>
        </section>

        <section className={styles["playlists"]}>

        </section>
      </section> */}

    </aside>
  )
}
