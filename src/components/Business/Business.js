import React from 'react';
import styles from './Business.module.css';

const Business = props => {
  const handleClick = () => {
    const url = props.business.url;
    if (url) {
      window.open(url)
    }
  }

  return (
    <div className={styles.businessContainer}>
      <img
        className={styles.image}
        src={props.business.imageSrc}
        alt="restaurant"
        onClick={handleClick}
      />
      <h3>{props.business.name}</h3>
      <div className={styles.flexDescription}>
        <div>
          <p>{props.business.address}</p>
          <p>{props.business.zipCode}</p>
          <p>{props.business.city}</p>
        </div>
        <div className={styles.rightDescription}>
          <p className={styles.gold}>{props.business.category.toUpperCase()}</p>
          <p className={styles.gold}>{`${props.business.rating} stars`}</p>
          <p>{`${props.business.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
