import styles from "./page.module.css"
import VillageCard from "@/components/VillageCard"
import Container from "@/components/Container"
import villages from "@/dummy/villages"

export default function Home() {
  return (
    <Container>
      <div className={styles.villages}>
        {villages.map((v) => (
          <VillageCard village={v} />
        ))}
      </div>
    </Container>
  );
}
