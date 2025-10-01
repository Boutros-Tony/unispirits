"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import styles from "./ProductSlider.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function ProductSlider() {
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
    },
    {
      id: 2,
      image: "/images/MD-whisky.png",
      title: "The Mystic DUKE",
      subtitle: "Malt & Grain SPIRITUOUS",
      specs: "750ML | 40% Alc./Vol.",
      link: "https://google.com",
      alt: "Mystic Grove Chapter IX Blue Indigo Gin",
    },
    {
      id: 3,
      image: "/images/domain-des-princes-red-wine.png",
      title: "Domaine Des Princes",
      subtitle: "Red Wine",
      specs: "750ML | 13% Alc./Vol.",
      link: "https://google.com",
      alt: "Mystic Grove Chapter IX Blue Indigo Gin",
    },
    {
      id: 4,
      image: "/images/MG-chapter-12.png",
      title: "Mystic Grove - CHAPTER XII",
      subtitle: "The Mediterranean Dry-Gin",
      specs: "700ML | 47% Alc./Vol.",
      link: "https://google.com",
      alt: "Mystic Grove Chapter IX Blue Indigo Gin",
    },
    {
      id: 5,
      image: "/images/MD-Vodka.png",
      title: "The Mystic DUKE",
      subtitle: "Vodka",
      specs: "750ML | 40% Alc./Vol.",
      link: "https://google.com",
      alt: "Mystic Grove Chapter IX Blue Indigo Gin",
    },
    {
      id: 6,
      image: "/images/domain-des-princes-white-wine.png",
      title: "Domaine Des Princes",
      subtitle: "White Wine",
      specs: "750ML | 11% Alc./Vol.",
      link: "https://google.com",
      alt: "Mystic Grove Chapter IX Blue Indigo Gin",
    },
    {
      id: 7,
      image: "/images/MG-chapter-8.png",
      title: "Mystic Grove - CHAPTER VIII",
      subtitle: "The Golden Saffron Gin",
      specs: "700ML | 43% Alc./Vol.",
      link: "https://google.com",
      alt: "Mystic Grove Chapter IX Blue Indigo Gin",
    },
    {
      id: 8,
      image: "/images/MD-gin.png",
      title: "The Mystic DUKE",
      subtitle: "Dry Gin",
      specs: "750ML | 40% Alc./Vol.",
      link: "https://google.com",
      alt: "Mystic Grove Chapter IX Blue Indigo Gin",
    },
    {
      id: 9,
      image: "/images/domain-des-princes-wine-rose.png",
      title: "Domaine Des Princes",
      subtitle: "Wine Rose",
      specs: "750ML | 12% Alc./Vol.",
      link: "https://google.com",
      alt: "Mystic Grove Chapter IX Blue Indigo Gin",
    },
    {
      id: 10,
      image: "/images/Baalback.png",
      title: "Arak Baalbak",
      subtitle: "Arak",
      specs: "750ML | 53% Alc./Vol..",
      link: "https://google.com",
      alt: "Mystic Grove Chapter IX Blue Indigo Gin",
    },
  ];

  // Group products into slides of 3
  const slides = [];
  for (let i = 0; i < products.length; i += 3) {
    slides.push(products.slice(i, i + 3));
  }

  return (
    <section className={styles.productSlider}>
      <div className={styles.container}>
        <SectionTitle size="medium" weight="regular" color="black">
          Products that may capture your interest
        </SectionTitle>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: `.${styles.swiperButtonNext}`,
            prevEl: `.${styles.swiperButtonPrev}`,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={800}
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides={false}
          allowTouchMove={true}
          watchOverflow={true}
          slidesOffsetBefore={0}
          slidesOffsetAfter={0}
          className={styles.swiper}
        >
          {slides.map((slide, slideIndex) => (
            <SwiperSlide key={slideIndex} className={styles.slide}>
              <div className={styles.productsGrid}>
                {slide.map((product) => (
                  <ProductCard
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    subtitle={product.subtitle}
                    specs={product.specs}
                    link={product.link}
                    alt={product.alt}
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Arrows */}
          <div className={styles.swiperButtonPrev}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M18 22L10 15L18 8" fill="currentColor" />
            </svg>
          </div>
          <div className={styles.swiperButtonNext}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M12 8L20 15L12 22" fill="currentColor" />
            </svg>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
