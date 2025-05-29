import React from 'react';
import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>About Us</h1>

      <section className={styles.introSection}>
        <p>
          Welcome to BlackRicha - your premier destination for high-quality home furniture.
          We specialize in providing exceptional customer service and curated selections.
        </p>
      </section>

      <div className={styles.featuredItems}>
        <h2>What We Offer</h2>
        <ul>
          <li>Made-to-order furniture</li>
          <li>In-store customization</li>
          <li>No-interest payment plans</li>
        </ul>
      </div>

      <div className={styles.contactCallout}>
        <button className={styles.contactButton}>Contact Us</button>
      </div>
    </div>
  );
};

export default About;