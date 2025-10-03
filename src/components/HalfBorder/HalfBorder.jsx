"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import styles from "./HalfBorder.module.scss";

export default function HalfBorder({
  position = "top", // top or bottom
  align = "left", // left or right
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-200px",
    threshold: 0.3,
  });
  const [width, setWidth] = useState("45vw");
  const [hasAnimated, setHasAnimated] = useState(false);

  // Debug logging
  console.log("HalfBorder isInView:", isInView, "hasAnimated:", hasAnimated);

  const positionClass = `${position}${
    align.charAt(0).toUpperCase() + align.slice(1)
  }`;

  // Handle responsive width
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth <= 480) {
        setWidth("60vw");
      } else {
        setWidth("45vw");
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Scroll-triggered animation - only when user scrolls to section
  useEffect(() => {
    const checkVisibility = () => {
      if (ref.current && !hasAnimated) {
        const rect = ref.current.getBoundingClientRect();
        // Only trigger when element is in the middle portion of viewport
        const isVisible =
          rect.top < window.innerHeight * 0.8 &&
          rect.bottom > window.innerHeight * 0.2;
        if (isVisible) {
          setHasAnimated(true);
        }
      }
    };

    // Only check on scroll, not immediately
    window.addEventListener("scroll", checkVisibility);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, [hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className={`${styles.halfBorder} ${styles[positionClass]} ${className}`}
      initial={{ width: 0 }}
      animate={isInView || hasAnimated ? { width } : { width: 0 }}
      transition={{
        duration: 1.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3,
      }}
    />
  );
}
