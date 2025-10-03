"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SectionTitle from "@/components/SectionTitle";
import HalfBorder from "@/components/HalfBorder";
import styles from "./OurBrands.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function OurBrands() {
  const slides = [
    {
      id: 1,
      desktopImage: "/images/ourbrands-slide-1-1.jpg",
      mobileImage: "/images/ourbrands-slide-1-1-mobile.jpg",
    },
    {
      id: 2,
      desktopImage: "/images/ourbrands-slide-2-1.jpg",
      mobileImage: "/images/ourbrands-slide-2-1-mobile.jpg",
    },
    {
      id: 3,
      desktopImage: "/images/ourbrands-slide-3-1.jpg",
      mobileImage: "/images/ourbrands-slide-3-1-mobile.jpg",
    },
    {
      id: 4,
      desktopImage: "/images/ourbrands-slide-4-1.jpg",
      mobileImage: "/images/ourbrands-slide-4-1-mobile.jpg",
    },
  ];

  return (
    <section id="brands" className={styles.ourBrands}>
      {/* Half Border - Top Left */}
      <HalfBorder position="top" align="left" />

      {/* Half Border - Bottom Right */}
      <HalfBorder position="bottom" align="right" />

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={1000}
        slidesPerView={1}
        spaceBetween={0}
        className={styles.swiper}
      >
        {/* Fixed Title on Top of Slider */}
        <div className={styles.fixedTitle}>
          <SectionTitle size="large" weight="medium" color="black">
            Our Brands
          </SectionTitle>
        </div>

        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slide}>
            {/* Desktop Image */}
            <img
              src={slide.desktopImage}
              alt={`Our Brands Slide ${slide.id}`}
              className={styles.desktopImage}
            />

            {/* Mobile Image */}
            <img
              src={slide.mobileImage}
              alt={`Our Brands Slide ${slide.id} Mobile`}
              className={styles.mobileImage}
            />
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows - Pure Triangles */}
        <div className={styles.swiperButtonPrev}>
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
            <path d="M27 33L15 22.5L27 12" fill="currentColor" />
          </svg>
        </div>
        <div className={styles.swiperButtonNext}>
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
            <path d="M18 12L30 22.5L18 33" fill="currentColor" />
          </svg>
        </div>
      </Swiper>
    </section>
  );
}
