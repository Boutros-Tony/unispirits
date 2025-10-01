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
          <div className={styles.footerLinks}>
            <a href="#" className={styles.link}>
              Conditions of Use
            </a>
            <a href="#" className={styles.link}>
              Privacy and Cookie Notice
            </a>
            <a href="#" className={styles.link}>
              Drink responsibly
            </a>
          </div>

          <div className={styles.footerInfo}>
            <p className={styles.copyright}>© UNISPIRITS ltd 2025</p>
            <p className={styles.disclaimer}>
              Please do not share with anyone under the legal purchase age for
              alcohol. Drink responsibly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
