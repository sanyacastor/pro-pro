import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./Slider.module.css";

export const Slider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.imageWrapper}>
      <Swiper modules={[Navigation]} navigation>
        {React.Children.map(children, (child, ndx) => (
          <SwiperSlide key={ndx}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
