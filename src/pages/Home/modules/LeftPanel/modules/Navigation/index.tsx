import styles from "./index.module.scss";
import { IoHome } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

export default function Navigation() {
  return (
    <section className={styles["top-panel"]}>
        <div className={styles["btn"]}>
          <IoHome className={styles["btn-icon"]} />
          <a href="№">Главная</a>
        </div>
        <div className={styles["btn"]}>
          <CiSearch className={styles["btn-icon"]}/>
          <a href="№">Поиск</a>
        </div>
    </section>
  )
}
