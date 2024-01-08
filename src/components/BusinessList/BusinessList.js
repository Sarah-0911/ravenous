import React from 'react';
import Business from '../Business/Business';
import styles from './BusinessList.module.css';

const BusinessList = props => {
  const businessListItems = props.businessesArray.map((restaurant,index) =>
  <Business key={`${index}-${restaurant.id}`} business={restaurant} />);

  return (
  <div className={styles.grid}>
    {businessListItems}
  </div>
  )
};

export default BusinessList;
