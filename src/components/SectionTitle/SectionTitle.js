"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./SectionTitle.module.scss";

export default function SectionTitle({
  children,
  className = "",
  size = "medium", // medium (33px) or large (35px)
  weight = "medium", // medium or regular
  textAlign = "left",
  color = "black", // black or red
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  // Debug log for Company title
  if (children === "Company") {
    console.log("Company title isInView:", isInView);
  }

  return (
    <motion.h2
      ref={ref}
      className={`title ${size} ${color} ${styles.sectionTitle} ${styles[textAlign]} ${styles[weight]} ${className}`}
      initial={{ x: -100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
      transition={{
        duration: 1.4,
        ease: [0.25, 0.46, 0.45, 0.94], // Perfect balance easing
        delay: 0.3,
      }}
    >
      {children}
      <motion.div
        className={styles.animatedBorder}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          duration: 1.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.6,
        }}
        style={{ transformOrigin: "left" }}
      />
    </motion.h2>
  );
}
