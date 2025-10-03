"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "./HeroSlider.module.scss";

// Import Swiper styles
import "swiper/css";

export default function HeroSlider() {
  // Placeholder slide data - user can replace with actual images
  const slides = [
    {
      id: 1,
      image: "/images/top-slider-1.jpg",
      mobileImage: "/images/top-slider-1-mobile.jpg",
      alt: "Premium spirits bartender crafting cocktails",
    },
    {
      id: 2,
      image: "/images/top-slider-2.jpg",
      mobileImage: "/images/top-slider-2-mobile.png",
      alt: "Luxury bar with premium bottles",
    },
    {
      id: 3,
      image: "/images/top-slider-3.jpg",
      mobileImage: "/images/top-slider-3-mobile.png",
      alt: "Professional mixologist at work",
    },
    {
      id: 4,
      image: "/images/top-slider-4.jpg",
      mobileImage: "/images/top-slider-4-mobile.jpg",
      alt: "Elegant cocktail presentation",
    },
    {
      id: 5,
      image: "/images/top-slider-5.jpg",
      mobileImage: "/images/top-slider-5-mobile.png",
      alt: "Premium spirits collection display",
    },
    {
      id: 6,
      image: "/images/top-slider-1.jpg", // Using existing image for desktop
      mobileImage: "/images/top-slider-6-mobile.png",
      alt: "Premium spirits collection display",
    },
    {
      id: 7,
      image: "/images/top-slider-2.jpg", // Using existing image for desktop
      mobileImage: "/images/top-slider-7-mobile.png",
      alt: "Premium spirits collection display",
    },
  ];

  return (
    <section className={styles.heroSlider}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={1000}
        slidesPerView={1}
        spaceBetween={0}
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slide}>
            {/* Desktop Background */}
            <div
              className={styles.desktopBackground}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${slide.image})`,
              }}
            />

            {/* Mobile Background */}
            <div
              className={styles.mobileBackground}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${slide.mobileImage})`,
              }}
            />
          </SwiperSlide>
        ))}

        {/* Fixed title that appears once for all slides */}
        <div className={styles.fixedSlideContent}>
          <div className={styles.titleContainer}>
            <div className={styles.titleWithLine}>
              <div className={styles.titleLine}></div>
              <h1 className={`signature white ${styles.title}`}>
                Sheer Excellence
              </h1>
              <div className={styles.titleLineAfter}></div>
            </div>
          </div>
        </div>
      </Swiper>
    </section>
  );
}
