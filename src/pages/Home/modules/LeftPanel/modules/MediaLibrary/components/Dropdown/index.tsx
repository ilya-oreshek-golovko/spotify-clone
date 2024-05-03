import styles from "./index.module.scss";
import { BsList } from "react-icons/bs";
import { CiCircleList, CiGrid41 } from "react-icons/ci";
import LibraryFormatButton from "./components/LibraryFormatButton";

export default function Dropdown() {

  return (
    <ul className={styles["dropdown"]}>

        <li className={styles["group-name"]}>
            Сортировка
            <ul className={styles["group-options"]}>
                <li className={styles["group-option"]}>Недавно прослушано</li>
                <li className={styles["group-option"]}>Недавно добавлено</li>
                <li className={styles["group-option"]}>По алфавиту</li>
                <li className={styles["group-option"]}>По автору</li>
                <li className={styles["group-option"]}>Свой порядок</li>
            </ul>
        </li>
        <hr />
        <li className={styles["group-name"]}>
            Формат библиотеки
            <ul className={styles["group-options"]}>
                <LibraryFormatButton title="Компактный" styles={styles} libraryType="compact" ListIcon={BsList}/>
                <LibraryFormatButton title="Список" styles={styles} libraryType="standard" ListIcon={CiCircleList}/>
                <LibraryFormatButton title="Сетка" styles={styles} libraryType="grid" ListIcon={CiGrid41}/>
            </ul>
        </li>
        
    </ul>   
  )
}
