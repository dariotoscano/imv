import Link from "next/link";
import classnames from "classnames";
import styles from "./Button.module.scss";
import {forwardRef} from "react";

const Button = ({href, onClick, size, block, className, color, icon, iconPosition='before', ghost, target, children, type='button', loading, disabled}, ref) => {
  return (
    <>
      {href ? (
        <Link ref={ref} href={href} onClick={(onClick) ? (e)=>{e.preventDefault();e.stopPropagation();onClick();} : null} className={classnames(styles.button,styles[size],styles[color],{[styles.block]:block,[styles.link]:link,[styles.ghost]:ghost,[styles.loading]:loading},className)} target={target}>
          <span className={styles.content}>
            {(icon && iconPosition=='before') && (
              <span className={classnames('icon',styles.icon,styles[iconPosition])}>{icon}</span>
            )}
            {children}
            {(icon && iconPosition=='after') && (
              <span className={classnames('icon',styles.icon,styles[iconPosition])}>{icon}</span>
            )}
          </span>
        </Link>
      ) : (
        <button ref={ref} type={type} onClick={onClick} disabled={(disabled || loading)} className={classnames(styles.button,styles[size],styles[color],{[styles.block]:block,[styles.ghost]:ghost,[styles.loading]:loading},className)}>
          <span className={styles.content}>
            {(icon && iconPosition=='before') && (
              <span className={classnames('icon',styles.icon,styles[iconPosition])}>{icon}</span>
            )}
            {children}
            {(icon && iconPosition=='after') && (
              <span className={classnames('icon',styles.icon,styles[iconPosition])}>{icon}</span>
            )}
          </span>
          {loading && (
            <span className={styles.spinner}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24">
                <circle cx="4" cy="12" fill="currentColor" r="3"></circle>
                <circle cx="12" cy="12" r="3" fill="currentColor"></circle>
                <circle cx="20" cy="12" fill="currentColor" r="3"></circle>
              </svg>
            </span>
          )}
        </button>
      )}
    </>
  )
}

export default forwardRef(Button);
