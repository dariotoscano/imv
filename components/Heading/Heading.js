import styles from "./Heading.module.scss";
import classnames from "classnames";

const Heading = ({ weight, size, children, className, ...props }) => {
  const Tag = (weight) ? `h${weight}` : `p`;
  return (
    <Tag className={classnames(styles.title,styles[size],className)} {...props}>{children}</Tag>
  )
}

export default Heading;
