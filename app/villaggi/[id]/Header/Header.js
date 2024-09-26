'use client'

import styles from "./Header.module.scss"
import Container from "@/components/Container"
import {useState, useEffect, useRef} from "react"
import classnames from "classnames"

export default function Header({village}) {
  const [isVisibile, setIsVisible] = useState(false)
  const section = useRef()
  useEffect(() => {
    const onScroll = e => {
      if (!section.current) return
      const elem = document.getElementById("village-main-content")
      const pos = e.target.documentElement.scrollTop
      const trigger_offset = elem.offsetTop - section.current.offsetHeight
      if (pos > trigger_offset) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={classnames(styles.section,{[styles.show]:isVisibile})} ref={section}>
      <Container>
        <p className={styles.title}>{village.name}</p>
      </Container>
    </div>
  );
}
