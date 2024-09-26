import styles from "./Map.module.scss"
import Section from "../Section"

export default function Services({village}) {
  return (
    <Section className={styles.section} title="Mappa" painted>
      <iframe src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC2fQW7ZfZH0thQnSnrS881GNe8DXsQIg4&zoom=9&q=${village.location.lat},${village.location.lng}`} width="100%" height="350"></iframe>
    </Section>
  );
}
