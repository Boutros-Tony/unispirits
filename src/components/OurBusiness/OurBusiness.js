"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import styles from "./OurBusiness.module.scss";

export default function OurBusiness() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="business" className={styles.ourBusiness}>
      <div className={styles.container}>
        <SectionTitle size="large" weight="medium">
          Our Business
        </SectionTitle>

        <div ref={ref} className={styles.content}>
          {/* Image slides from left */}
          <motion.div
            className={styles.imageSection}
            initial={{ x: -150, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -150, opacity: 0 }}
            transition={{
              duration: 1.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.5,
            }}
          >
            <Image
              src="/images/our-business-section-logo.png"
              alt="UniSpirits Business Logo"
              width={400}
              height={300}
              className={styles.businessLogo}
            />
          </motion.div>

          <div className={styles.textSection}>
            <motion.h2
              className={`title medium red ${styles.sectionTitle} ${
                styles.left
              } ${styles.regular} ${styles.companyTitle} ${
                isInView ? styles.showBorder : ""
              }`}
              initial={{ x: -100, opacity: 0 }}
              animate={
                isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
              }
              transition={{
                duration: 1.4,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.7,
              }}
            >
              Company
            </motion.h2>

            {/* Text slides from bottom */}
            <motion.div
              className={styles.textContent}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{
                duration: 1.4,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.9,
              }}
            >
              <p>
                At <strong>Unispirits</strong>, we embody craftsmanship and
                quality <br /> through a luxurious portfolio of spirits and
                wines
                <br /> tailored for the discerning palate. Founded in Belgium
                <br /> by the grandson of the original{" "}
                <strong>Nader Distilleries Co.</strong>
                <br /> founder, our company brings a rich heritage of
                <br />
                distillation and excellence, combined with dedicated
                <br />
                craftsmanship to meet both European and
                <br /> international markets.
              </p>

              <p>
                Our parent company, <strong>Nader Distilleries Co.</strong>, has
                <br />
                been a symbol of tradition and mastery since 1950 in
                <br /> Lebanon. Renowned for its legendary arak, Lebanon&apos;s
                <br />
                national beverage, <strong>Nader Distilleries</strong> has grown
                into
                <br /> an internationally respected producer of ethyl alcohol,
                <br />
                premium spirits, wines, and vinegars. Building on this <br />{" "}
                legacy,
                <strong>Unispirits</strong> delivers authentic quality and{" "}
                <br />
                expertise in every product we create.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
