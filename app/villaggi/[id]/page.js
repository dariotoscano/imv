import styles from "./page.module.scss"
import travio from "@/lib/travio"
import Hero from "./Hero"
import Help from "./Help"
import Intro from "./Intro"
import Club from "./Club"
import Booking from "./Booking"
import Gallery from "./Gallery"
import Descriptions from "./Descriptions"
import Payment from "./Payment"
import Services from "./Services"
import Header from "./Header"
import Map from "./Map"
import Review from "./Review"
import Details from "./Details"
import Related from "./Related"
import Around from "./Around"
import Container from "@/components/Container"

export default async function Villaggio({ params }) {
  const id = parseInt(params.id)
  const village = await travio.getVillage({id})
  return (
    <div className={styles.page}>
      <Hero village={village} />
      <Header village={village} />
      <div id="village-main-content">
        <Container>
          <div className={styles.wrap}>
            <div className={styles.side}>
              <Booking village={village} />
            </div>
            <div className={styles.main}>
              <Intro village={village} />
              <Club village={village} />
              <Gallery village={village} />
              <Descriptions village={village} />
              <Payment village={village} />
              <Services village={village} />
              <Map village={village} />
              <Review village={village} />
              <Details village={village} />
            </div>
          </div>
        </Container>
      </div>
      <Related village={village} />
      <Help />
      <Around village={village} />
    </div>
  );
}



//
