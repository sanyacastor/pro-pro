import React from "react";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";
import styles from "./GurtourBanner.module.css";

const CheburekImage = () => {
  const start = Math.floor(Math.random() * 360);
  const { ref } = useParallax<HTMLDivElement>({
    rotate: [start, start + 360],
  });
  return (
    <span ref={ref} className={styles.imageWrapper}>
      <img src="/images/content/cheburek.png" alt="Cheburek" />
    </span>
  );
};

export default function GurtourBanner() {
  return (
    <ParallaxProvider>
      <a href="/gurtour" className={styles.wrapper}>
        <div className={styles.bannerContainer}>
          Г<CheburekImage />
          У<CheburekImage />
          Р<CheburekImage />
          Т<CheburekImage />
          У<CheburekImage />Р
        </div>
      </a>
    </ParallaxProvider>
  );
}
