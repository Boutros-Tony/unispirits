import Image from "next/image";
import styles from "./ProductCard.module.scss";

export default function ProductCard({
  image,
  title,
  subtitle,
  specs,
  link = "#",
  alt,
}) {
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

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.moreInfoLink}
        >
          MORE INFO HERE <img src="/images/info-icon.png" alt="" srcset="" />
        </a>
      </div>
    </div>
  );
}
