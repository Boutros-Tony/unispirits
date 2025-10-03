"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import VisionMission from "@/components/VisionMission";
import styles from "./ProductsAndServices.module.scss";

export default function ProductsAndServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.productsAndServices}>
      <div className={styles.container}>
        <SectionTitle size="medium" weight="regular" color="red">
          Products and Services
        </SectionTitle>

        <div ref={ref} className={styles.content}>
          {/* Text slides from bottom */}
          <motion.div
            className={styles.textContent}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{
              duration: 1.4,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.4,
            }}
          >
            <p>
              <strong>Unispirits</strong> specializes in brand development, from
              conceptualization to realization, and in creating exclusive
              private <br /> labels that merge modern innovation with timeless
              craftsmanship. Our offering includes a carefully curated selection
              of <br /> refined red, rosé, white, and sweet wines as well as a
              range of spirits such as whisky, vodka, gin, brandy, and arak.{" "}
              <br /> We also provide high-quality cider and wine vinegars, with
              plans to introduce specialty beers and non-alcoholic <br />{" "}
              spirits, including an elegant non-alcoholic gin.
            </p>

            <p>
              Every product reflects our unwavering commitment to excellence and
              luxury. Our goal is to elevate brands and craft <br /> exceptional
              experiences through meticulous attention to detail, craftsmanship,
              and dedication to quality. At <strong>Unispirits</strong>, <br />{" "}
              luxury is central to everything we do delivering the finest taste,
              style, and distinction.
            </p>
          </motion.div>

          <div className={styles.imageSection}>
            {/* Image slides from right */}
            <motion.div
              initial={{ x: 150, opacity: 0, width: "90%" }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 150, opacity: 0 }}
              transition={{
                duration: 1.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.8,
              }}
            >
              <Image
                src="/images/products-and-services-section.png"
                alt="A World of Spirits - UniSpirits product range illustration"
                width={600}
                height={200}
                className={styles.spiritsIllustration}
              />
            </motion.div>

            {/* Small title slides from bottom */}
            <motion.h3
              className={styles.imageTitle}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 1.3,
              }}
            >
              A WORLD OF SPIRITS
            </motion.h3>
          </div>
        </div>
      </div>

      <VisionMission />
    </section>
  );
}
