"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import HalfBorder from "@/components/HalfBorder";
import styles from "./GetInTouch.module.scss";

export default function GetInTouch() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className={styles.getInTouch}>
      {/* Half Border - Top Left */}
      <HalfBorder position="top" align="left" />

      {/* Half Border - Bottom Right */}
      <HalfBorder position="bottom" align="right" />

      <div ref={ref} className={styles.container}>
        {/* Main Title */}
        <motion.h2
          className={styles.title}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2,
          }}
        >
          GET IN TOUCH
        </motion.h2>

        {/* Main Description */}
        <motion.div
          className={styles.description}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.4,
          }}
        >
          <p>
            We would love to hear from you. Whether you have questions about our
            products, want to discuss a bespoke <br /> private label, or simply
            wish to connect with us, our team is here to assist.
          </p>
          <p>
            Please feel free to reach out through the contact form below, or
            contact us directly via email.
            <br />
            We are committed to providing personalized service and look forward
            to exploring new opportunities together.
          </p>
          <p>
            Thank you for your interest in Unispirits srl, where tradition meets
            luxury, and excellence is our signature.
          </p>
        </motion.div>

        {/* Two Column Content */}
        <motion.div
          className={styles.contentGrid}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.6,
          }}
        >
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <motion.div
              className={styles.specializedSection}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.8,
              }}
            >
              <p className={styles.specializedText}>
                Specialized in wine and spirits, with a valuable
                <br />
                portfolio of brands.
              </p>
              <a href="#contact" className={styles.contactLink}>
                CONTACT US
              </a>
            </motion.div>

            <motion.div
              className={styles.emailSection}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 1.0,
              }}
            >
              <h3 className={styles.sectionTitle}>Email</h3>
              <a href="mailto:info@unispirits.be" className={styles.email}>
                info@unispirits.be
              </a>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <motion.div
              className={styles.affiliatedSites}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 1.2,
              }}
            >
              <h3 className={styles.sectionTitle}>Affiliated sites</h3>
              <ul className={styles.sitesList}>
                <li>
                  <a
                    href="https://www.naderdistilleries.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.naderdistilleries.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.themysticgrove.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.themysticgrove.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mg-gin1950.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.mg-gin1950.com
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className={styles.followUs}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 1.4,
              }}
            >
              <h3 className={styles.sectionTitle}>Follow us</h3>
              <div className={styles.socialIcons}>
                <div className={styles.socialBrand}>
                  <div className={styles.socialIconGroup}>
                    <a
                      href="https://facebook.com/mysticgrovegin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                    >
                      <Image
                        src="/images/facebook-icon.png"
                        alt="Facebook"
                        width={20}
                        height={20}
                        className={styles.socialIcon}
                      />
                    </a>
                    <a
                      href="https://instagram.com/mysticgrovegin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                    >
                      <Image
                        src="/images/insta-icon.png"
                        alt="Instagram"
                        width={20}
                        height={20}
                        className={styles.socialIcon}
                      />
                    </a>
                  </div>
                  <span className={styles.brandName}>MYSTICGROVEGIN</span>
                </div>
                <div className={styles.socialBrand}>
                  <div className={styles.socialIconGroup}>
                    <a
                      href="#"
                      className={`${styles.iconLink} ${styles.hiddenIcon}`}
                    >
                      <Image
                        src="/images/facebook-icon.png"
                        alt=""
                        width={20}
                        height={20}
                        className={styles.socialIcon}
                      />
                    </a>
                    <a
                      href="https://instagram.com/themysticduke"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                    >
                      <Image
                        src="/images/insta-icon.png"
                        alt="Instagram"
                        width={20}
                        height={20}
                        className={styles.socialIcon}
                      />
                    </a>
                  </div>
                  <span className={styles.brandName}>THEMYSTICDUKE</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
