"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import styles from "./ProductSlider.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function ProductSlider() {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const desktopIsInView = useInView(desktopRef, {
    once: true,
    margin: "-100px",
  });
  const mobileIsInView = useInView(mobileRef, { once: true, margin: "-100px" });

  // Sample data - you can change this later
  const products = [
    {
      id: 1,
      image: "/images/MG-chapter-9.png",
      title: "Mystic Grove - CHAPTER IX",
      subtitle: "The Blue Indigo Gin",
      specs: "700ML | 43% Alc./Vol.",
      link: "https://google.com",
      alt: "Mystic Grove Chapter IX Blue Indigo Gin",
      links: {
        pdf1: "/pdfs/media-and-events-2.pdf",
        pdf2: "/pdfs/media-and-events-10.pdf",
        website: "https://themysticgrove.com/our-creations/chapter-9/",
        instagram: "https://www.instagram.com/mysticgrovegin",
      },
    },
    {
      id: 2,
      image: "/images/MD-whisky.png",
      title: "The Mystic DUKE",
      subtitle: "Malt & Grain Whisky",
      specs: "750ML | 40% Alc./Vol.",
      link: "https://google.com",
      alt: "Mystic Grove Chapter IX Blue Indigo Gin",
      links: {
        pdf1: "/pdfs/media-and-events-11.pdf",
        pdf2: "/pdfs/media-and-events-5.pdf",

        instagram: "https://www.instagram.com/themysticduke",
      },
    },
    {
      id: 3,
      image: "/images/domain-des-princes-red-wine.png",
      title: "Domaine Des Princes",
      subtitle: "Red Wine",
      specs: "750ML | 13% Alc./Vol.",
      link: "https://google.com",
      alt: "Mystic Grove Chapter IX Blue Indigo Gin",
      links: {
        pdf1: "/pdfs/media-and-events-8.pdf",
      },
    },
    {
      id: 4,
      image: "/images/MG-chapter-12.png",
      title: "Mystic Grove - CHAPTER XII",
      subtitle: "The Mediterranean Dry-Gin",
      specs: "700ML | 47% Alc./Vol.",
      link: "https://google.com",
      alt: "Mystic Grove Chapter IX Blue Indigo Gin",
      links: {
        pdf1: "/pdfs/media-and-events-3.pdf",
        pdf2: "/pdfs/media-and-events-10.pdf",
        website: "https://themysticgrove.com/our-creations/chapter-12/",
        instagram: "https://www.instagram.com/mysticgrovegin",
      },
    },
    {
      id: 5,
      image: "/images/MD-Vodka.png",
      title: "The Mystic DUKE",
      subtitle: "Vodka",
      specs: "750ML | 40% Alc./Vol.",
      link: "https://google.com",
      alt: "Mystic Grove Chapter IX Blue Indigo Gin",
      links: {
        pdf1: "/pdfs/media-and-events-4.pdf",
        pdf2: "/pdfs/media-and-events-11.pdf",

        instagram: "https://www.instagram.com/themysticduke",
      },
    },
    {
      id: 6,
      image: "/images/domain-des-princes-white-wine.png",
      title: "Domaine Des Princes",
      subtitle: "White Wine",
      specs: "750ML | 11% Alc./Vol.",
      link: "https://google.com",
      alt: "Mystic Grove Chapter IX Blue Indigo Gin",
      links: {
        pdf1: "/pdfs/media-and-events-8.pdf",
      },
    },
    {
      id: 7,
      image: "/images/MG-chapter-8.png",
      title: "Mystic Grove - CHAPTER VIII",
      subtitle: "The Golden Saffron Gin",
      specs: "700ML | 43% Alc./Vol.",
      link: "https://google.com",
      alt: "Mystic Grove Chapter IX Blue Indigo Gin",
      links: {
        pdf1: "/pdfs/media-and-events-1.pdf",
        pdf2: "/pdfs/media-and-events-10.pdf",
        website: "https://themysticgrove.com/our-creations/chapter-8/",
        instagram: "https://www.instagram.com/mysticgrovegin",
      },
    },
    {
      id: 8,
      image: "/images/MD-gin.png",
      title: "The Mystic DUKE",
      subtitle: "Dry Gin",
      specs: "750ML | 40% Alc./Vol.",
      link: "https://google.com",
      alt: "Mystic Grove Chapter IX Blue Indigo Gin",
      links: {
        pdf1: "/pdfs/media-and-events-6.pdf",
        pdf2: "/pdfs/media-and-events-11.pdf",

        instagram: "https://www.instagram.com/themysticduke",
      },
    },
    {
      id: 9,
      image: "/images/domain-des-princes-wine-rose.png",
      title: "Domaine Des Princes",
      subtitle: "Wine Rose",
      specs: "750ML | 12% Alc./Vol.",
      link: "https://google.com",
      alt: "Mystic Grove Chapter IX Blue Indigo Gin",
      links: {
        pdf1: "/pdfs/media-and-events-8.pdf",
      },
    },
    {
      id: 10,
      image: "/images/Baalback.png",
      title: "Arak Baalbak",
      subtitle: "Arak",
      specs: "750ML | 53% Alc./Vol..",
      link: "https://google.com",
      alt: "Mystic Grove Chapter IX Blue Indigo Gin",
      links: {
        pdf1: "/pdfs/media-and-events-7.pdf",
      },
    },
  ];

  // Group products into slides of 3 for desktop
  const desktopSlides = [];
  for (let i = 0; i < products.length; i += 3) {
    desktopSlides.push(products.slice(i, i + 3));
  }

  // Group products into slides of 2 for mobile
  const mobileSlides = [];
  for (let i = 0; i < products.length; i += 2) {
    mobileSlides.push(products.slice(i, i + 2));
  }

  return (
    <section className={styles.productSlider}>
      <div className={styles.container}>
        <SectionTitle size="medium" weight="light" color="black">
          Products that may capture your interest
        </SectionTitle>

        {/* Desktop Slider - 3 products per slide */}
        <motion.div
          ref={desktopRef}
          className={styles.desktopSlider}
          initial={{ y: 100, opacity: 0 }}
          animate={
            desktopIsInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
          }
          transition={{
            duration: 1.4,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.3,
          }}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: `.${styles.desktopSwiperButtonNext}`,
              prevEl: `.${styles.desktopSwiperButtonPrev}`,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={800}
            slidesPerView={1}
            spaceBetween={40}
            centeredSlides={false}
            allowTouchMove={true}
            watchOverflow={true}
            slidesOffsetBefore={0}
            slidesOffsetAfter={0}
            className={styles.swiper}
          >
            {desktopSlides.map((slide, slideIndex) => (
              <SwiperSlide key={slideIndex} className={styles.slide}>
                <div className={styles.desktopProductsGrid}>
                  {slide.map((product) => (
                    <ProductCard
                      key={product.id}
                      image={product.image}
                      title={product.title}
                      subtitle={product.subtitle}
                      specs={product.specs}
                      link={product.link}
                      alt={product.alt}
                      links={product.links}
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}

            {/* Desktop Navigation Arrows */}
            <div className={styles.desktopSwiperButtonPrev}>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M18 22L10 15L18 8" fill="currentColor" />
              </svg>
            </div>
            <div className={styles.desktopSwiperButtonNext}>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M12 8L20 15L12 22" fill="currentColor" />
              </svg>
            </div>
          </Swiper>
        </motion.div>

        {/* Mobile Slider - 2 products per slide */}
        <motion.div
          ref={mobileRef}
          className={styles.mobileSlider}
          initial={{ y: 100, opacity: 0 }}
          animate={
            mobileIsInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
          }
          transition={{
            duration: 1.4,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.3,
          }}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: `.${styles.mobileSwiperButtonNext}`,
              prevEl: `.${styles.mobileSwiperButtonPrev}`,
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={800}
            slidesPerView={1}
            spaceBetween={40}
            centeredSlides={false}
            allowTouchMove={true}
            watchOverflow={true}
            slidesOffsetBefore={0}
            slidesOffsetAfter={0}
            className={styles.swiper}
          >
            {mobileSlides.map((slide, slideIndex) => (
              <SwiperSlide key={slideIndex} className={styles.slide}>
                <div className={styles.mobileProductsGrid}>
                  {slide.map((product) => (
                    <ProductCard
                      key={product.id}
                      image={product.image}
                      title={product.title}
                      subtitle={product.subtitle}
                      specs={product.specs}
                      link={product.link}
                      alt={product.alt}
                      links={product.links}
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}

            {/* Mobile Navigation Arrows */}
            <div className={styles.mobileSwiperButtonPrev}>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M18 22L10 15L18 8" fill="currentColor" />
              </svg>
            </div>
            <div className={styles.mobileSwiperButtonNext}>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M12 8L20 15L12 22" fill="currentColor" />
              </svg>
            </div>
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
