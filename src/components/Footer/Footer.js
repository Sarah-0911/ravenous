import React from "react";
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>2024 | <FontAwesomeIcon icon={faGithub} /> Sarah-0911</p>
    </div>
  )
}

export default Footer;
