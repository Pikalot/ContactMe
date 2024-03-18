import React from 'react';
import styles from './ContactMe.module.css'; // Access a separate CSS module for this page
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
  faPinterestSquare,
  // Replace faXTwitter with the correct Twitter icon if available
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
  return (
    <main className={styles.contactPage}>
      <section className={styles.contactInfo}>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Here's how you can reach us...</p>
        <div className={styles.contactMethods}>
          <div className={styles.email}>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>info@evmax.com</p>
          </div>
          <div className={styles.phone}>
            <FontAwesomeIcon icon={faPhone} />
            <p>+1 (999) 999 9999</p>
          </div>
        </div>
      </section>
      <section className={styles.socialMedia}>
        <h2>Connect With Us</h2>
        <div className={styles.icons}>
          <a href="#">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faPinterestSquare} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
