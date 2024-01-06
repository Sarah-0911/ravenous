import React from 'react';
import styles from './Business.module.css';

const Business = props => {
  return (
    <div>
      <img
        className={styles.image}
        src={props.business.imageSrc}
        alt="restaurant"
      />
      <h2>{props.business.name}</h2>
      <div className={styles.flexDescription}>
        <div>
          <p>{props.business.address}</p>
          <p>{props.business.city}</p>
          <p>{`${props.business.state} ${props.business.zipCode}`}</p>
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
