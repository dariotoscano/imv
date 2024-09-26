import styles from "./Around.module.scss"
import Container from "@/components/Container"
import VillageCard from "@/components/VillageCard"
import villages from "@/dummy/villages"

export default function Around({village}) {
  return (
    <div className={styles.section}>
      <Container>
        <h2 className={styles.title}>In zona</h2>
        <div className={styles.villages}>
          {villages.filter((v) => v.id !== village.id).map(x => [Math.random(), x]).sort(([a], [b]) => a - b).map(([_, x]) => x).slice(0,3).map((v) => (
            <VillageCard village={v} key={v.id} />
          ))}
        </div>
      </Container>
    </div>
  );
}
