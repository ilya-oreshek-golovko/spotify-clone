import styles from "./index.module.scss";
import { BsList } from "react-icons/bs";
import { CiCircleList, CiGrid41 } from "react-icons/ci";

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
                <li className={styles["group-option"]}>
                    <BsList className={styles["group-img"]}/> Компактный
                </li>
                <li className={styles["group-option"]}>
                    <CiCircleList className={styles["group-img"]}/> Список
                </li>
                <li className={styles["group-option"]}> 
                    <CiGrid41 className={styles["group-img"]}/> Сетка
                </li>
            </ul>
        </li>
        
    </ul>   
  )
}
