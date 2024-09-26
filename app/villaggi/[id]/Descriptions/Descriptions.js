'use client'

import styles from "./Descriptions.module.scss"
import Section from "../Section"
import {useState, useEffect} from "react"
import classnames from "classnames"

export default function Descriptions({village}) {
  if (village.descriptions.length <= 1) return;
  const descriptions = village.descriptions.filter((c,i) => i > 0);
  const [currentItem, setCurrentItem] = useState(0);
  return (
    <Section className={styles.section}>
      <ul className={styles.nav}>
        {descriptions.map((item,index) => (
          <li className={(index == currentItem) ? styles.current : null} key={index}>
            <button onClick={()=>setCurrentItem(index)}>{item.title}</button>
          </li>
        ))}
      </ul>
      <div className={styles.content}>
        {descriptions.map((item,index) => (
          <div className={classnames(styles.inner,{[styles.current]:index==currentItem})} key={index}>
            <h2 className={styles.title}>{item.title}</h2>
            <div className={styles.text} dangerouslySetInnerHTML={{__html:item.text}} />
          </div>
        ))}
      </div>
    </Section>
  );
}
