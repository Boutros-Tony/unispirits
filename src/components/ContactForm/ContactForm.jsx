"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    areaOfInterest: "",
    contactName: "",
    contactEmail: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className={styles.contactForm}>
      <div ref={ref} className={styles.container}>
        {/* Contact Form Title */}
        <motion.h3
          className={styles.formTitle}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2,
          }}
        >
          Contact form:
        </motion.h3>

        {/* Form Description */}
        <motion.div
          className={styles.formDescription}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.4,
          }}
        >
          <h4 className={styles.descriptionTitle}>
            We would love to hear from you
          </h4>
          <p className={styles.descriptionText}>
            Get in touch with Unispirits. Reach out for enquiries and
            partnerships.
          </p>
        </motion.div>

        {/* Form Content */}
        <motion.form
          onSubmit={handleSubmit}
          className={styles.form}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.6,
          }}
        >
          <div className={styles.formGrid}>
            {/* Left Column - Form Fields */}
            <div className={styles.leftColumn}>
              {/* Area or Location Dropdown */}
              <motion.div
                className={styles.formGroup}
                initial={{ y: 50, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
                }
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.8,
                }}
              >
                <select
                  name="areaOfInterest"
                  value={formData.areaOfInterest}
                  onChange={handleChange}
                  className={styles.dropdown}
                >
                  <option value="">AREA OR LOCATION OF INTEREST</option>
                  <option value="europe">Europe</option>
                  <option value="north-america">North America</option>
                  <option value="asia">Asia</option>
                  <option value="middle-east">Middle East</option>
                  <option value="africa">Africa</option>
                  <option value="oceania">Oceania</option>
                </select>
              </motion.div>

              {/* Contact Name */}
              <motion.div
                className={styles.formGroup}
                initial={{ y: 50, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
                }
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 1.0,
                }}
              >
                <label htmlFor="contactName" className={styles.label}>
                  Contact name:
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Contact name"
                  className={styles.input}
                />
              </motion.div>

              {/* Contact Email */}
              <motion.div
                className={styles.formGroup}
                initial={{ y: 50, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
                }
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 1.2,
                }}
              >
                <label htmlFor="contactEmail" className={styles.label}>
                  Contact email:
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  placeholder="Email"
                  className={styles.input}
                />
              </motion.div>

              {/* Subject */}
              <motion.div
                className={styles.formGroup}
                initial={{ y: 50, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
                }
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 1.4,
                }}
              >
                <label htmlFor="subject" className={styles.label}>
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={styles.input}
                />
              </motion.div>
            </div>

            {/* Right Column - Message */}
            <div className={styles.rightColumn}>
              <motion.div
                className={styles.formGroup}
                initial={{ y: 50, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
                }
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 1.6,
                }}
              >
                <label htmlFor="message" className={styles.label}>
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows={8}
                />
                <motion.button
                  type="submit"
                  className={styles.submitButton}
                  initial={{ y: 50, opacity: 0 }}
                  animate={
                    isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
                  }
                  transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 1.8,
                  }}
                >
                  Submit
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Submit Button */}
          <div className={styles.submitSection}></div>
        </motion.form>
      </div>
    </section>
  );
}
