// import React, { useState, useEffect } from 'react';
import styles from './Business.module.css';


function Business(props) {

  // const [businessData, setBusinessData] = useState(null);

  // useEffect(() => {
  //   const apiKey = 'YEsZ7jkTPMpLu_ifAEayMPK0rGMDiXPn0la8jFOIZ648nWksGH1RsK8VRtMddg72PQY6HZiCZwUA_X85DgZj_ErFxSSciWvJeXhZ4OUlivWoMdR-x8SRYIEYKHE2AZXYx';
  //   const yelpEndpoint = 'https://api.yelp.com/v3/businesses/HBcSYVckDhznB7KR9fmvTg';

  //   fetch(yelpEndpoint, {
  //     headers: {
  //       Authorization: `Bearer ${apiKey}`,
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       setBusinessData(data);
  //     })
  //     .catch(error => console.error('Error fetching Yelp API:', error));
  // }, []);

  // // if(!businessData) {
  // //   return <p>Loading...</p>;
  // // }

  // console.log(businessData);

  return (
    <div>
      <img
        className={styles.image}
        src={props.business.imageSrc}
        alt=""
      />
      <h2>{props.business.name}</h2>
      <div className={styles.flexDescription}>
        <div>
          <p>{props.business.address}</p>
          <p>{props.business.city}</p>
          <p>{`${props.business.state} ${props.business.zipCode}`}</p>
        </div>
        <div className={styles.rightDescription}>
          <p className={styles.gold}>{props.business.category}</p>
          <p className={styles.gold}>{`${props.business.rating} stars`}</p>
          <p>{`${props.business.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
