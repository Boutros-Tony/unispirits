"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import styles from "./OurBrands.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function OurBrands() {
  const slides = [
    {
      id: 1,
      title: "Mystic Grove Gin",
      subtitle: "A Lifestyle Preceding Distinction",
      image: "/images/Our-brands-slide-img-1.png",
      background: "/images/our-brand-bg-img-left.jpg.png",
      layout: "imageLeft", // Image on left, text on right
      content: (
        <div>
          <p>
            Step into the world of Mystic Grove, a story spanning four eras,
            narrated by The Owl of Mystic Grove—a pioneering gin where
            experience becomes taste and excellence transforms into legacy.
          </p>
          <p>
            Mystic Grove Gin's exquisite quality is a result of a delicate blend
            of pure highland spring water and a slow vapor infusion process.
            This involves gentle contact of premium neutral grain alcohol with a
            curated selection of botanicals, sourced from around the globe,
            creating a harmonious and complex profile that embodies
            craftsmanship and innovation.
          </p>
          <p>
            So far, Mystic Grove offers three distinguished variations, each
            showcasing a unique character:
          </p>
          <ul>
            <li>Mystic Grove Gin – Chapter XII | The Mediterranean Dry-Gin</li>
            <li>Mystic Grove Gin – Chapter IX | The Blue Indigo Gin</li>
            <li>Mystic Grove Gin – Chapter VIII | The Golden Saffron Gin</li>
          </ul>
          <p>Two more declinations are on the horizon:</p>
          <ul>
            <li>
              Mystic Grove Gin – Chapter VI | The Original 4-generation-old
              recipe
            </li>
            <li>Mystic Grove Gin – Chapter _O_ | ZERO Alcohol</li>
          </ul>
          <p>
            The latter being a sophisticated non-alcoholic gin, joining the
            portfolio soon.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: "The Mystic Duke",
      subtitle: "The Bartenders' Delight",
      image: "/images/Our-brands-slide-img-2.png",
      background: "/images/our-brand-bg-img-right.jpg",
      layout: "imageRight", // Text on left, image on right
      content: (
        <div>
          <p>
            An explorer of elusive truths, the Mystic Duke uncovered the secrets
            within The Grove's Den. From this journey, three exceptional spirits
            were born—each designed to captivate connoisseurs and elevate
            bartenders worldwide.
          </p>
          <p>
            The Mystic Duke Vodka offers an exceptionally smooth and refined
            taste, crafted from carefully selected grains and pristine mountain
            spring water. Triple distilled and gluten-free, it shines whether
            enjoyed neat, on the rocks, or as the foundation of a perfect
            cocktail.
          </p>
          <p>
            The Mystic Duke Gin embodies the art of vapor infusion, where
            high-quality grain alcohol is delicately layered over a bed of six
            meticulously chosen botanicals. Its natural aromas deliver a
            balanced, distinctive character that has been cherished across
            generations.
          </p>
          <p>
            The Mystic Duke Whisky reveals an intense harmony of malt and grain,
            matured through the exchange of flavors and tannins within ancient
            oak barrels. Its deep burnt-brown hue and velvety richness create a
            lingering, indulgent experience on the palate.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className={styles.ourBrands}>
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
            <div
              className={styles.slideBackground}
              style={{
                backgroundImage: `url(${slide.background})`,
              }}
            />
            <div className={styles.slideOverlay} />

            <div className={styles.slideContent}>
              <div className={styles.container}>
                <div className={`${styles.content} ${styles[slide.layout]}`}>
                  {/* Image Section */}
                  <div className={styles.imageSection}>
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={400}
                      height={500}
                      className={styles.slideImage}
                    />
                  </div>

                  {/* Text Section */}
                  <div className={styles.textSection}>
                    <div className={styles.textContent}>
                      <h2 className={styles.slideTitle}>{slide.title}</h2>
                      <h3 className={styles.slideSubtitle}>{slide.subtitle}</h3>
                      <div className={styles.slideText}>{slide.content}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
