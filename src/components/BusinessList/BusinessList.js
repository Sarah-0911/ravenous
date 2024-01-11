import React from 'react';
import Business from '../Business/Business';
import styles from './BusinessList.module.css';

const BusinessList = props => {
  const corsLink = "https://cors-anywhere.herokuapp.com/corsdemo";
  if (!props.businessesArray) {
    return null;
  }

  const businessListItems = props.businessesArray.map((restaurant,index) =>
  <Business key={`${index}-${restaurant.id}`} business={restaurant} />);

  return (
    <div className={styles.grid}>
      {(props.businessesArray.length === 0 || (!props.businessesArray)) &&
      <h3 className={styles.corsLink}>
        You may need to visit this&nbsp;
          <a
            href={corsLink}
            target="_blank"
            rel="noreferrer">
            link
          </a>
        &nbsp;first and Request temporary access in order to display search results
      </h3>}
      {businessListItems}
    </div>
  )
};

export default BusinessList;
