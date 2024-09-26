import styles from "./Review.module.scss"
import Section from "../Section"

export default function Review({village}) {
  return (
    <Section className={styles.section} title="La nostra valutazione">
      <ul className={styles.items}>
        <Item title="Posizione" value={8} />
        <Item title="Spiaggia e piscina" value={9} />
        <Item title="Camere" value={8} />
        <Item title="Ristorazione" value={8} />
        <Item title="Sport e Intrattenimento" value={9} />
        <Item title="Qualità/Prezzo" value={9} />
      </ul>
    </Section>
  );
}


const Item = ({title,value}) => {
  return (
    <li>
      <div className={styles.wrap}>
        <p className={styles.title}>{title}</p>
        <p className={styles.rate}>{value}<em>/10</em></p>
      </div>
      <span className={styles.bar}>
        <span className={styles.value} style={{width:`${value/10*100}%`}}></span>
        <span></span>
      </span>
    </li>
  )
}
