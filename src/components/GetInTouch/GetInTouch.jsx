import Image from "next/image";
import styles from "./GetInTouch.module.scss";

export default function GetInTouch() {
  return (
    <section className={styles.getInTouch}>
      <div className={styles.container}>
        {/* Main Title */}
        <h2 className={styles.title}>GET IN TOUCH</h2>

        {/* Main Description */}
        <div className={styles.description}>
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
        </div>

        {/* Two Column Content */}
        <div className={styles.contentGrid}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <div className={styles.specializedSection}>
              <p className={styles.specializedText}>
                Specialized in wine and spirits, with a valuable
                <br />
                portfolio of brands.
              </p>
              <a href="#contact" className={styles.contactLink}>
                CONTACT US
              </a>
            </div>

            <div className={styles.emailSection}>
              <h3 className={styles.sectionTitle}>Email</h3>
              <a href="mailto:info@unispirits.be" className={styles.email}>
                info@unispirits.be
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <div className={styles.affiliatedSites}>
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
            </div>

            <div className={styles.followUs}>
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
                <a
                  href="https://instagram.com/themysticduke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <Image
                    src="/images/insta-icon.png"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className={styles.socialIcon}
                  />
                  <span>THEMYSTICDUKE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
