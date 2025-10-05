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
      mobileImage: "/images/Mobile.jpg",
      title: "Mystic Grove Gin",
      subtitle: "A Lifestyle Preceding Distinction",
      text: "Step into the world of Mystic Grove, a story spanning four eras, narrated by The Owl of Mystic Grove—a pioneering gin where experience becomes taste and excellence transforms into legacy.\n\nMystic Grove Gin's exquisite quality is a result of a delicate blend of pure highland spring water and a slow vapor infusion process. This involves gentle contact of premium neutral grain alcohol with a curated selection of botanicals, sourced from around the globe, creating a harmonious and complex profile that embodies craftsmanship and innovation.",
      variations: [
        "Mystic Grove Gin – Chapter XII | The Mediterranean Dry-Gin",
        "Mystic Grove Gin – Chapter IX | The Blue Indigo Gin",
        "Mystic Grove Gin – Chapter VIII | The Golden Saffron Gin",
      ],
      upcoming: [
        "Mystic Grove Gin – Chapter VI | The Original 4-generation-old recipe",
        "Mystic Grove Gin – Chapter _O_ | ZERO Alcohol",
      ],
      textPosition: "right", // First slide text on right
    },
    {
      id: 2,
      desktopImage: "/images/ourbrands-slide-2-1.jpg",
      mobileImage: "/images/Mobile.jpg",
      title: "The Mystic Duke",
      subtitle: "The Bartenders' Delight",
      text: "An explorer of elusive truths, the Mystic Duke uncovered the secrets within The Grove's Den. From this journey, three exceptional spirits were born—each designed to captivate connoisseurs and elevate bartenders worldwide.\n\nThe Mystic Duke Vodka offers an exceptionally smooth and refined taste, crafted from carefully selected grains and pristine mountain spring water. Triple distilled and gluten-free, it shines whether enjoyed neat, on the rocks, or as the foundation of a perfect cocktail.\n\nThe Mystic Duke Gin embodies the art of vapor infusion, where high-quality grain alcohol is delicately layered over a bed of six meticulously chosen botanicals. Its natural aromas deliver a balanced, distinctive character that has been cherished across generations.\n\nThe Mystic Duke Whisky reveals an intense harmony of malt and grain, matured through the exchange of flavors and tannins within ancient oak barrels. Its deep burnt-brown hue and velvety richness create a lingering, indulgent experience on the palate.",
      variations: [],
      upcoming: [],
      textPosition: "left", // Second slide text on left
    },
    {
      id: 3,
      desktopImage: "/images/ourbrands-slide-3-1.jpg",
      mobileImage: "/images/Mobile.jpg",
      title: "Arak Baalbak",
      subtitle: "A Timeless Tribute to Lebanon's Legacy",
      text: "Rooted in Lebanon's storied history, Arak Baalbak stands as a tribute to the civilizations that once thrived on this sacred land. Named after the revered god Ba'al and the historic city of Baalbek home to the legendary Temples of Bacchus and Jupiter Arak Baalbak embodies centuries of heritage.\n\nCarefully distilled from the finest aniseed, this exceptional Arak reveals traditional flavors anise, delicate herbs, and a hint of citrus crafted through triple distillation. Its harmonious blend of sweetness and subtle spice, complemented by earthy undertones, offers an unforgettable sensory journey that honors Lebanon's cultural legacy.",
      variations: [],
      upcoming: [],
      textPosition: "right", // Third slide text on right
    },
    {
      id: 4,
      desktopImage: "/images/ourbrands-slide-4-1.jpg",
      mobileImage: "/images/Mobile.jpg",
      title: "Domaine des Princes",
      subtitle: "A Wine Rooted in Mtein's Heart",
      text: "Deep within the ancestral village of Mtein, the passion for winemaking runs through every vine.\n\nMtein, the historic center of the Metn region in the early 1700s, was home to the rising Abillama princes. Their enduring palace stands proudly in the village square, shaping Mtein's identity and inspiring our brand.\n\nBeyond this legacy, archaeological discoveries reveal ancient grape presses remnants of a winemaking tradition dating to the 4th century AD during the Byzantine era illustrating the region's long-standing reputation for quality wines exported across the Mediterranean.\n\nInfused with this rich heritage, our Red, Rosé, White and Sweet wines are crafted to reflect the character of their grapes and the unique terroirs that shape them.",
      variations: [],
      upcoming: [],
      textPosition: "left", // Fourth slide text on left
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

            {/* Desktop Text Content - Only show on desktop */}
            <div
              className={`${styles.desktopTextContent} ${
                styles[slide.textPosition]
              }`}
            >
              <h2 className={styles.brandTitle}>{slide.title}</h2>
              <h3 className={styles.brandSubtitle}>{slide.subtitle}</h3>
              <div className={styles.brandText}>
                {slide.text.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {slide.variations.length > 0 && (
                <div className={styles.variationsSection}>
                  <p className={styles.sectionLabel}>
                    So far, Mystic Grove offers three distinguished variations,
                    each showcasing a unique character:
                  </p>
                  <ul className={styles.variationsList}>
                    {slide.variations.map((variation, index) => (
                      <li key={index}>{variation}</li>
                    ))}
                  </ul>
                </div>
              )}

              {slide.upcoming.length > 0 && (
                <div className={styles.upcomingSection}>
                  <p className={styles.sectionLabel}>
                    Two more declinations are on the horizon:
                  </p>
                  <ul className={styles.upcomingList}>
                    {slide.upcoming.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className={styles.disclaimer}>
                    The latter being a sophisticated non-alcoholic gin, joining
                    the portfolio soon.
                  </p>
                </div>
              )}
            </div>

            {/* Mobile Background */}
            <img
              src={slide.mobileImage}
              alt={`Our Brands Slide ${slide.id} Mobile`}
              className={styles.mobileBackgroundImage}
            />

            {/* Mobile Content with Bottle Images */}
            <div className={styles.mobileSlideContent}>
              <img
                src={`/images/Our-brands-slide-img-${slide.id}.png`}
                alt={`${slide.title} bottle`}
                className={`${styles.mobileBottleImage} ${
                  styles[`slide${slide.id}`]
                }`}
              />
              <div className={styles.mobileTextContent}>
                <h2 className={styles.mobileBrandTitle}>{slide.title}</h2>
                <h3 className={styles.mobileBrandSubtitle}>{slide.subtitle}</h3>
                <div className={styles.mobileBrandText}>
                  {slide.text.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {slide.variations.length > 0 && (
                  <div className={styles.mobileVariationsSection}>
                    <p className={styles.mobileSectionLabel}>
                      So far, Mystic Grove offers three distinguished
                      variations, each showcasing a unique character:
                    </p>
                    <ul className={styles.mobileVariationsList}>
                      {slide.variations.map((variation, index) => (
                        <li key={index}>{variation}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {slide.upcoming.length > 0 && (
                  <div className={styles.mobileUpcomingSection}>
                    <p className={styles.mobileSectionLabel}>
                      Two more declinations are on the horizon:
                    </p>
                    <ul className={styles.mobileUpcomingList}>
                      {slide.upcoming.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className={styles.mobileDisclaimer}>
                      The latter being a sophisticated non-alcoholic gin,
                      joining the portfolio soon.
                    </p>
                  </div>
                )}
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
