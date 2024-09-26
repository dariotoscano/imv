import styles from "./Intro.module.scss"
import Section from "../Section"
import CheckIcon from "@/icons/Check"
import Icon from "@/components/Icon"
import classnames from "classnames"

export default function Intro({village}) {
  return (
    <Section className={styles.section}>
      <div className={styles.intro} dangerouslySetInnerHTML={{__html:village.descriptions[0].text}} />
      <div className={styles.contents}>
        <div className={styles.rating}>
          <p className={styles.vote}>
            <strong>8.5<em>/10</em></strong>
            Favoloso
          </p>
          <button className={styles.link}>Leggi la recensione</button>
        </div>
        <dl className={styles.features}>
          <div>
            <dt>Spiaggia</dt>
            <dd><CheckIcon className={styles.icon} /> Accanto al villaggio</dd>
            <dd><CheckIcon className={styles.icon} /> Di sabbia e mare con fondale digradante</dd>
          </div>
          <div>
            <dt>Trattamenti disponibili</dt>
            <dd><CheckIcon className={styles.icon} /> Formula Residence</dd>
          </div>
        </dl>
      </div>
      <div className={styles.icons}>
        <Feature icon="nursery" name="Servizio nursery" disabled />
        <Feature icon="gluten-free" name="Cucina per celiaci" />
        <Feature icon="children" name="Animazione bambini" />
        <Feature icon="animals" name="Animali ammessi" disabled />
        <Feature icon="wellness" name="Area wellness" />
        <Feature icon="sport-arena" name="Impianti sportivi" />
        <Feature icon="health" name="Presidio medico" />
        <Feature icon="restaurant" name="Tavolo privato" disabled />
      </div>
    </Section>
  );
}

const Feature = ({icon,name,disabled}) => {
  return (
    <div className={classnames(styles.feature,{[styles.disabled]:disabled})}>
      <Icon className={styles.icon} file={icon} alt={name} />
      <span className={styles.name}>{name}</span>
    </div>
  )
}
