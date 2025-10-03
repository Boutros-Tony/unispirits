"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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

        {/* Desktop Navigation Links */}
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

        {/* Mobile Hamburger Button */}
        <button
          className={`${styles.hamburger} ${
            isMenuOpen ? styles.hamburgerOpen : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <ul className={styles.mobileNavLinks}>
          <li>
            <a
              href="#business"
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              Our Business
            </a>
          </li>
          <li>
            <a
              href="#brands"
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              Our Brands
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              Get in Touch
            </a>
          </li>
          <li>
            <a
              href="#events"
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              Media & Events
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
