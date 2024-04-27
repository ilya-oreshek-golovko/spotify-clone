import styles from "./index.module.scss";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { FaPlus, FaArrowRight, FaMusic  } from "react-icons/fa";
import { CiSearch, CiCircleList } from "react-icons/ci";
import { GiPin } from "react-icons/gi";
import WithTooltip from "@/components/withTooltip/index";

export default function MediaLibrary() {
  return (
    <section className={styles["main-panel"]}>
        
      <div className={styles["media-library"]}>
        <WithTooltip tooltop="Закрыть мою медиатеку">
          <div className={styles["btn"]}>
            <TfiLayoutMediaRightAlt className={styles["btn-icon"]} />
            <a href="№">Моя медиатека</a>
          </div>
        </WithTooltip>
    
        <div className={styles["btn-actions"]}>
          <WithTooltip tooltop="Создать плейлист или папку">
            <FaPlus className={styles["btn-icon"]}/>
          </WithTooltip>
          <WithTooltip tooltop="Развернуть">
            <FaArrowRight className={styles["btn-icon"]}/>
          </WithTooltip>
        </div>
      </div>

      <div className={styles["action-btn-wrapper"]}>
        <WithTooltip tooltop="Искать в медиатеке">
          <CiSearch className={styles["btn-search"]}/>
        </WithTooltip>
        <div className={styles["btn"]}>
          Недавно прослушано
          <CiCircleList className={styles["btn-icon"]} />
        </div>       
      </div>

      <div className={styles["playlist-wrapper"]}>
        <div className="playlist-card"></div>
      </div>

    </section>
  )
}
