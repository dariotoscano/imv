import Container from "@/components/Container"
import Logo from "@/components/Logo"
import styles from "./Footer.module.scss";

const Footer = ({}) => {
  return (
    <div className={styles.footer}>
      <Container>
        <Logo className={styles.logo} />
      </Container>
    </div>
  )
}

export default Footer
