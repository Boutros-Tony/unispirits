"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import styles from "./VisionMission.module.scss";

export default function VisionMission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    {
      id: "vision",
      icon: "/images/vision-icon.png", // Update with actual icon path
      title: "Vision",
      text: "To be a distinguished name in the creation of innovative spirits, wines, and vinegars,<br /> fostering a legacy of refinement and inspiring excellence across the world.",
    },
    {
      id: "strategy",
      icon: "/images/strategy-icon.png", // Update with actual icon path
      title: "Strategy",
      text: "To nurture our own brands and private labels, expanding thoughtfully into <br /> international markets. Our approach emphasizes timeless craftsmanship combined <br /> with a sensitivity to emerging trends and sustainable practices.",
    },
    {
      id: "mission",
      icon: "/images/mission-icon.png", // Update with actual icon path
      title: "Mission",
      text: "To craft products of uncompromising quality, blending tradition with innovation<br /> to elevate the senses and enrich the industry with authentic experiences.",
    },
    {
      id: "goal",
      icon: "/images/goal-icon.png", // Update with actual icon path
      title: "Goal",
      text: "To grow as a leader and trendsetter in the industry,<br /> shaping the future of premium beverages through innovation,<br /> integrity, and a steadfast commitment to excellence and sustainability.",
    },
    {
      id: "target",
      icon: "/images/target-icon.png", // Update with actual icon path
      title: "Target",
      text: "To serve both local and global markets with a curated selection of refined spirits<br /> and wines designed to satisfy connoisseurs and inspire new audiences<br /> with elegance and authenticity.",
    },
  ];

  return (
    <div className={styles.visionMission}>
      <div className={styles.container}>
        <div ref={ref} className={styles.grid}>
          {items.map((item, index) => {
            const isReverse = index % 2 === 1;
            const baseDelay = index * 0.5; // Base delay for each box - 0.5s between boxes

            return (
              <motion.div
                key={item.id}
                className={`${styles.item} ${
                  isReverse ? styles.itemReverse : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: baseDelay,
                }}
              >
                {/* Mobile Header - Title left, Icon right */}
                <motion.div
                  className={styles.mobileHeader}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 1.0,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: baseDelay + 0.3,
                  }}
                >
                  <h3 className={`mohave italic medium red ${styles.title}`}>
                    {item.title}
                  </h3>
                  <motion.div
                    className={styles.iconContainer}
                    initial={{ x: isReverse ? 50 : -50, opacity: 0 }}
                    animate={
                      isInView
                        ? { x: 0, opacity: 1 }
                        : { x: isReverse ? 50 : -50, opacity: 0 }
                    }
                    transition={{
                      duration: 1.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: baseDelay + 0.5,
                    }}
                  >
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon`}
                      width={40}
                      height={40}
                      className={styles.icon}
                      style={{ objectFit: "contain" }}
                    />
                  </motion.div>
                </motion.div>

                {/* Desktop Icon Container (hidden on mobile) */}
                <motion.div
                  className={styles.desktopIconContainer}
                  initial={{ x: isReverse ? 100 : -100, opacity: 0 }}
                  animate={
                    isInView
                      ? { x: 0, opacity: 1 }
                      : { x: isReverse ? 100 : -100, opacity: 0 }
                  }
                  transition={{
                    duration: 1.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: baseDelay + 0.4,
                  }}
                >
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    width={40}
                    height={40}
                    className={styles.icon}
                    style={{ objectFit: "contain" }}
                  />
                </motion.div>

                {/* Desktop Layout - Divider (hidden on mobile) */}
                <motion.div
                  className={styles.divider}
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{
                    duration: 1.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: baseDelay + 0.6,
                  }}
                  style={{ transformOrigin: "top" }}
                ></motion.div>

                {/* Content */}
                <motion.div
                  className={styles.content}
                  initial={{ y: 60, opacity: 0 }}
                  animate={
                    isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }
                  }
                  transition={{
                    duration: 1.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: baseDelay + 0.8,
                  }}
                >
                  {/* Title for desktop only */}
                  <h3
                    className={`mohave italic medium red ${styles.title} ${styles.desktopTitle}`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mohave light medium black ${styles.text}`}
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
