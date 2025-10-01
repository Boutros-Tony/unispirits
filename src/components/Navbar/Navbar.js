import Image from "next/image";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logo}>
          <Image
            src="/images/Unispirits-logo.png"
            alt="UniSpirits Logo"
            width={165}
            height={55}
            priority
            className={styles.logoImage}
          />
        </div>

        {/* Navigation Links */}
        <ul className={styles.navLinks}>
          <li>
            <a href="#business" className={styles.navLink}>
              Our Business
            </a>
          </li>
          <li>
            <a href="#brands" className={styles.navLink}>
              Our Brands
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.navLink}>
              Get in Touch
            </a>
          </li>
          <li>
            <a href="#events" className={styles.navLink}>
              Media & Events
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
