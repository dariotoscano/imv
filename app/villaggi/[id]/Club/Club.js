import styles from "./Club.module.scss"
import Button from "@/components/Button"
import Section from "../Section"

export default function Club({village}) {
  return (
    <Section painted className={styles.section}>
      <div className={styles.wrap}>
        <p className={styles.text}>Perchè non ti iscrivi al Club? Puoi ricevere <strong>fino al 20% di sconto</strong> su questo villaggio.</p>
        <Button color="brand">Iscriviti al club gratis</Button>
      </div>
    </Section>
  );
}
