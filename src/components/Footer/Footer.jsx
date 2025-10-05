import Image from "next/image";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Footer Visual Image */}
      <div className={styles.footerImageSection}>
        <Image
          src="/images/Footer-Visual.png"
          alt="UniSpirits Footer Visual"
          width={1920}
          height={400}
          className={styles.footerImage}
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      {/* Black Footer Section */}
      <div className={styles.footerContent}>
        <div className={styles.container}>
          <div className={styles.footerInfo}>
            <p className={styles.copyright}>© UNISPIRITS srl 2025</p>
            <p className={styles.disclaimer}>
              Please do not share with anyone under the legal purchase age for
              alcohol.{" "}
              <a
                href="https://responsibledrinking.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.responsibleLink}
              >
                Drink responsibly.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
