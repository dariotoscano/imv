import styles from "./Hero.module.scss"
import Container from "@/components/Container"
import StarIcon from "@/icons/Star"
import HeartIcon from "@/icons/Heart"
import Heading from "@/components/Heading"
import Button from "@/components/Button"

export default function Hero({village}) {
  return (
    <div className={styles.section}>
      <Container>
        <div className={styles.wrap}>
          <div className={styles.image}>
            <span>
              <img src={village.images[0].url} />
              {/*
              <p class="special-label">Ultime camere in offerta</p>
              <a href="javascript:void(0);" class="button light inline" data-fancybox-trigger="gallery">Vai alla gallery</a>
              */}
            </span>
          </div>
          <div className={styles.content}>
            <div className={styles.inner}>
              <div className={styles.meta}>
                {village.classification && (
                  <span className={styles.stars}>
                    {Array.from({length: village.classification}, (_, i) => i + 1).map((num) => (
                      <StarIcon key={num} />
                    ))}
                  </span>
                )}
                <span className={styles.brand}>{village.supplier.full_name}</span>
              </div>
              <Heading weight={1} className={styles.name}>{village.name}</Heading>
              <p className={styles.city}>{village.geos[0].name} ({village.geos[0].breadcrumb.at(-1).name})</p>
              <Button className={styles.wishlist_button} icon={<HeartIcon />}>Salva nei preferiti</Button>
              {/*
              <a href="https://www.ilmiovillaggio.it/wishlist/add/165" class="wishlist-button to-modal">
                <svg viewBox="0 0 27 23" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5000422,21.7182682 C14.0699369,21.2754905 14.7315545,20.8305164 16.1275913,19.9237343 C17.5441402,19.0014044 18.2024564,18.562181 19.0144977,17.9819875 C23.6356207,14.6802519 26,11.5097116 26,7.41921106 C26,3.88705457 23.0307515,1 19.3695652,1 C17.6519488,1 15.7703095,2.13051038 14.261069,3.90126385 L13.3766158,4.93897038 L12.6526209,3.78358133 C11.5755913,2.06480093 9.62253119,1 7.63043478,1 C3.96924854,1 1,3.88705457 1,7.41921106 C1,11.5097116 3.36437927,14.6802519 7.98550234,17.9819875 C8.79754365,18.562181 9.45585979,19.0014044 10.8714839,19.9231329 C12.2700487,20.8315577 12.9316802,21.2765785 13.5000422,21.7182682 Z"></path>
                </svg>
                <span>Salva nei preferiti</span>
              </a>
              */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
