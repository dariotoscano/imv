import styles from "./Section.module.scss"
import classnames from "classnames"

export default function Section({title, painted, className, children}) {
  return (
    <div className={classnames(styles.section,{[styles.painted]:painted},className)}>
      {title && (
        <h2 className={classnames(styles.title,'section-title')}>{title}</h2>
      )}
      {children}
    </div>
  );
}
