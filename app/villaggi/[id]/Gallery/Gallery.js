'use client'

import styles from "./Gallery.module.scss"
import Button from "@/components/Button"
import Section from "../Section"
import ArrowLeftIcon from "@/icons/ArrowLeft"
import ArrowRightIcon from "@/icons/ArrowRight"
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper/modules'
import {useRef} from 'react'
import 'swiper/css'

export default function Gallery({village}) {
  const images = village.images.filter((c,i) => i > 0);
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  if (village.images.length <= 1) return;
  return (
    <Section className={styles.section} title="Gallery" painted>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        className={styles.slider}
        spaceBetween={0}
        slidesPerView={'auto'}
        >
        {images.map((img, index) => (
          <SwiperSlide className={styles.image} key={index}>
            <img src={img.url} alt={img.description} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.bottom}>
        <Button className={styles.button}>Tutte le foto</Button>
        <div className={styles.nav}>
          <button ref={navigationPrevRef} className={styles.arrow}><ArrowLeftIcon /></button>
          <button ref={navigationNextRef} className={styles.arrow}><ArrowRightIcon /></button>
        </div>
      </div>
    </Section>
  );
}
