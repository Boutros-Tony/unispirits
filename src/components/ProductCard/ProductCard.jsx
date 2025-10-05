"use client";

import { useState } from "react";
import Image from "next/image";
import { FaFilePdf, FaGlobe, FaInstagram } from "react-icons/fa";
import styles from "./ProductCard.module.scss";

export default function ProductCard({
  image,
  title,
  subtitle,
  specs,
  link = "#",
  alt,
  links = {
    pdf1: null,
    pdf2: null,
    website: null,
    instagram: null,
  },
}) {
  const [showLinks, setShowLinks] = useState(false);

  const handleMoreInfoClick = (e) => {
    e.preventDefault();
    setShowLinks(true);
  };

  const handleCloseLinks = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowLinks(false);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={alt || title}
          width={200}
          height={300}
          className={styles.productImage}
        />
      </div>

      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{title}</h3>
        <h4 className={styles.productSubtitle}>{subtitle}</h4>
        <p className={styles.productSpecs}>{specs}</p>

        <div className={styles.linkContainer}>
          {!showLinks ? (
            <a
              href="#"
              onClick={handleMoreInfoClick}
              className={styles.moreInfoLink}
            >
              MORE INFO HERE <img src="/images/info-icon.png" alt="info icon" />
            </a>
          ) : (
            <div className={styles.linksContainer}>
              <button
                onClick={handleCloseLinks}
                className={styles.closeButton}
                aria-label="Close links"
              >
                ×
              </button>

              <div className={styles.linksRow}>
                {links.pdf1 && (
                  <a
                    href={links.pdf1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkItem}
                    title="PDF 1"
                  >
                    <FaFilePdf className={styles.linkIcon} />
                  </a>
                )}

                {links.pdf2 && (
                  <a
                    href={links.pdf2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkItem}
                    title="PDF 2"
                  >
                    <FaFilePdf className={styles.linkIcon} />
                  </a>
                )}

                {links.website && (
                  <a
                    href={links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkItem}
                    title="Website"
                  >
                    <FaGlobe className={styles.linkIcon} />
                  </a>
                )}

                {links.instagram && (
                  <a
                    href={links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkItem}
                    title="Instagram"
                  >
                    <FaInstagram className={styles.linkIcon} />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
