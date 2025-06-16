import React from 'react';
import Business from '../Business/Business';
import styles from './BusinessList.module.css';

const BusinessList = props => {
  const corsLink = "https://cors-anywhere.herokuapp.com/corsdemo";

  if(props.isLoading) {
    return (
    <div className={styles.load}>
      <div className={styles.loadSpinner}></div>
      <p>Loading...</p>
    </div>
    )
  }

  if (props.apiError) {
  return (
    <div className={styles.errorContainer}>
      <h3 className={styles.apiError}>{props.apiError}</h3>
    </div>
    );
  }

  const noResults = props.businessesArray.length === 0 && props.hasSearched;

  return (
    <div className={styles.grid}>
      {props.businessesArray.map((restaurant) => (
        <Business key={restaurant.id} business={restaurant} />
        ))}

      {noResults && (
      <h3 className={styles.noResults}>
        No results found. Try a different search term or location.
      </h3>
      )}

      {(props.businessesArray.length === 0 || (!props.businessesArray)) &&
      <h3 className={styles.corsLink}>
        You may need to visit this
        &nbsp;
          <a
            href={corsLink}
            target="_blank"
            rel="noreferrer">
            link
          </a>
        &nbsp;
        first and Request temporary access in order to display search results
      </h3>}
    </div>
  )
};

export default BusinessList;
