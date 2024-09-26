import styles from "./Details.module.scss"
import Section from "../Section"

export default function Details({village}) {
  return (
    <Section className={styles.section} title="Dettagli">
      <h3>Condizioni di cancellazione</h3>
      <p>Crediamo che un cambio programma possa sempre esserci, soprattutto quando si viaggia con bambini.</p>
      <p>Per questo motivo ci impegniamo a rendere gli imprevisti meno dispendiosi possibile.</p>
      <p>La prenotazione è soggetta alle seguenti penali di cancellazione:</p>
      <ul>
        <li>fino a 35 giorni prima dell'arrivo: 10%</li>
        <li>da 34 a 25 giorni prima dell'arrivo: 25%</li>
        <li>da 24 a 15 giorni prima dell'arrivo: 50%</li>
        <li>da 14 a 7 giorni prima dell'arrivo: 75%</li>
        <li>da 6 a 0 giorni prima dell'arrivo: 100%</li>
      </ul>
      <p>Quote di gestione, costi di trasporto e assicurazioni non sono mai rimborsabili.</p>
      <p><strong>NB. considerati solo i giorni feriali</strong></p>
    </Section>
  );
}
