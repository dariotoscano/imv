import styles from "./Icon.module.scss";
import classnames from "classnames";

const Icon = ({file, alt, className}) => {
  return (
    <div className={classnames(styles.icon,className)}>
      <span className={styles.decor} />
      <img src={`/icons/${file}.svg`} alt={alt} />
    </div>
  )
}

export default Icon
