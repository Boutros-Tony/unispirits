"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import HalfBorder from "@/components/HalfBorder";
import styles from "./MediaAndEvents.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function MediaAndEvents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mediaItems = [
    {
      id: 1,
      image: "/images/media-events-1.png",
      alt: "Media Event 1",
      link: "https://google.com",
    },
    {
      id: 2,
      image: "/images/media-events-2.png",
      alt: "Media Event 2",
      link: "https://google.com",
    },
    {
      id: 3,
      image: "/images/media-events-3.png",
      alt: "Media Event 3",
      link: "https://google.com",
    },
    {
      id: 4,
      image: "/images/media-events-4.png",
      alt: "Media Event 4",
      link: "https://google.com",
    },
    {
      id: 5,
      image: "/images/media-events-5.png",
      alt: "Media Event 5",
      link: "https://google.com",
    },
    {
      id: 6,
      image: "/images/media-events-6.png",
      alt: "Media Event 6",
      link: "https://google.com",
    },
    {
      id: 7,
      image: "/images/media-events-7.png",
      alt: "Media Event 7",
      link: "https://google.com",
    },
  ];

  // Group media items into slides of 3 for mobile
  const mobileSlides = [];
  for (let i = 0; i < mediaItems.length; i += 3) {
    mobileSlides.push(mediaItems.slice(i, i + 3));
  }

  // Group media items into rows of 3 for desktop animation
  const desktopRows = [];
  for (let i = 0; i < mediaItems.length; i += 3) {
    desktopRows.push(mediaItems.slice(i, i + 3));
  }

  return (
    <section id="events" className={styles.mediaAndEvents}>
      {/* Half Border - Top Left */}
      <HalfBorder position="top" align="left" />

      <div className={styles.titleContainer}>
        <SectionTitle size="large" weight="medium" color="black">
          Media and Events
        </SectionTitle>
      </div>

      <div ref={ref} className={styles.mediaContainer}>
        {/* Desktop Grid - Show on desktop, hide on mobile */}
        <div className={styles.desktopMediaGrid}>
          {desktopRows.map((row, rowIndex) => {
            const rowRef = useRef(null);
            const rowIsInView = useInView(rowRef, {
              once: true,
              margin: "-50px",
            });

            return (
              <motion.div
                key={rowIndex}
                ref={rowRef}
                className={styles.desktopRow}
                initial={{ y: 80, opacity: 0 }}
                animate={
                  rowIsInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }
                }
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.2, // Small delay for smooth effect
                }}
              >
                {row.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mediaItem}
                  >
                    <div className={styles.imageWrapper}>
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={200}
                        height={150}
                        className={styles.mediaImage}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </a>
                ))}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Slider - Show on mobile, hide on desktop */}
        <div className={styles.mobileSlider}>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: `.${styles.mobileSwiperButtonNext}`,
              prevEl: `.${styles.mobileSwiperButtonPrev}`,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={800}
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={false}
            allowTouchMove={true}
            watchOverflow={true}
            className={styles.swiper}
          >
            {mobileSlides.map((slide, slideIndex) => (
              <SwiperSlide key={slideIndex} className={styles.slide}>
                <div className={styles.mobileMediaGrid}>
                  {slide.map((item) => (
                    <a
                      key={item.id}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.mediaItem}
                    >
                      <div className={styles.imageWrapper}>
                        <Image
                          src={item.image}
                          alt={item.alt}
                          width={200}
                          height={150}
                          className={styles.mediaImage}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </SwiperSlide>
            ))}

            {/* Mobile Navigation Arrows */}
            <div className={styles.mobileSwiperButtonPrev}>
              <svg width="25" height="25" viewBox="0 0 30 30" fill="none">
                <path d="M18 22L10 15L18 8" fill="currentColor" />
              </svg>
            </div>
            <div className={styles.mobileSwiperButtonNext}>
              <svg width="25" height="25" viewBox="0 0 30 30" fill="none">
                <path d="M12 8L20 15L12 22" fill="currentColor" />
              </svg>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
