import React from "react";
import styles from "../App.module.css";
import { icon } from "../styles/ContactIcon.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ContactButton = () => (
  <footer className={styles.footer}>
    <Link to="/contact" title="contact us">
      <i className={`fa-solid fa-envelope ${icon}`}></i>
    </Link>
  </footer>
);

export default ContactButton;
