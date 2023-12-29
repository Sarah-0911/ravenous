import React from 'react';
import Business from '../Business/Business';
import styles from './BusinessList.module.css';

function BusinessList(props) {
  const businessListItems = props.businessesArray.map((restaurant,index) =>
  <Business key={index} business={restaurant} />);

  return (
  <div className={styles.grid}>
    {businessListItems}
  </div>
  )
};

export default BusinessList;
