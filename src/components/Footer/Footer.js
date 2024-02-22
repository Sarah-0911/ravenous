import React from "react";
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>2024 | <FontAwesomeIcon icon={faGithub} />
        <a href='https://github.com/Sarah-0911' rel='noreferrer' target='_blank'>&nbsp;Sarah-0911</a>
      </p>
    </div>
  )
}

export default Footer;
