"use client";

import { useState } from "react";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
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
      <div className={styles.container}>
        {/* Contact Form Title */}
        <h3 className={styles.formTitle}>Contact form:</h3>

        {/* Form Description */}
        <div className={styles.formDescription}>
          <h4 className={styles.descriptionTitle}>
            We would love to hear from you
          </h4>
          <p className={styles.descriptionText}>
            Get in touch with Unispirits. Reach out for enquiries and
            partnerships.
          </p>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGrid}>
            {/* Left Column - Form Fields */}
            <div className={styles.leftColumn}>
              {/* Area or Location Dropdown */}
              <div className={styles.formGroup}>
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
              </div>

              {/* Contact Name */}
              <div className={styles.formGroup}>
                <label htmlFor="contactName" className={styles.label}>
                  Contact name:
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Input default"
                  className={styles.input}
                />
              </div>

              {/* Contact Email */}
              <div className={styles.formGroup}>
                <label htmlFor="contactEmail" className={styles.label}>
                  Contact email:
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  placeholder="Input default"
                  className={styles.input}
                />
              </div>

              {/* Subject */}
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Input default"
                  className={styles.input}
                />
              </div>
            </div>

            {/* Right Column - Message */}
            <div className={styles.rightColumn}>
              <div className={styles.formGroup}>
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
                <button type="submit" className={styles.submitButton}>
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className={styles.submitSection}></div>
        </form>
      </div>
    </section>
  );
}
