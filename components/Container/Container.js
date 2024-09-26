import styles from "./Container.module.scss";
import classnames from "classnames";

const Container = ({ size, children, className }) => {
  return (
    <div className={classnames(styles.container,className,styles[size])}>{children}</div>
  )
}

export default Container;
