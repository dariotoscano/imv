import styles from "./Payment.module.scss"
import Section from "../Section"
import Heading from "@/components/Heading"

export default function Payment({village}) {
  return (
    <Section className={styles.section} painted>
      <Heading className={styles.title} size="small">Paga adesso € 149,00 <br />Il resto, prima di partire.</Heading>
      <p>Prenota subito versando un acconto di € 149,00 sul totale dell’offerta. <br /> Pagherai il saldo entro e non oltre 30 giorni della data di partenza.</p>
      <div className={styles.cards}>
        <p>Paga in tutta sicurezza con:</p>
        <ul>
          <li><img src="/img/cards-visa.svg" /></li>
          <li><img src="/img/cards-mastercard.svg" /></li>
          <li><img src="/img/cards-postepay.svg" /></li>
          <li><img src="/img/cards-bonifico.svg" /></li>
        </ul>
      </div>
    </Section>
  );
}
