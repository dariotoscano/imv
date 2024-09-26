import Container from "@/components/Container"
import Logo from "@/components/Logo"
import Link from "next/link"
import styles from "./Header.module.scss";

const Header = ({}) => {
  return (
    <div className={styles.header}>
      <Container>
        <Link href="/"><Logo className={styles.logo} /></Link>
      </Container>
    </div>
  )
}

export default Header
