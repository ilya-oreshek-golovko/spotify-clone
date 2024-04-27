import styles from "./index.module.scss";
import { TWithTooltipProps } from "@/types";

export default function WithTooltip({children, tooltop} : TWithTooltipProps) {
  return (
    <div className={styles["tooltip"]}>
        {children}
        <span className={styles["tooltiptext"]}>{tooltop}</span>
    </div>
  )
}
