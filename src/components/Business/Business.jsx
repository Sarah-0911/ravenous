// import React, { useState, useEffect } from 'react';
import styles from './Business.module.css';


function Business() {

  const business = {
    imageSrc: "images/pokebowl.jpg",
    name: "Pokawa",
    address: "12 Independence Avenue",
    city: "Bordertown",
    state: "NY",
    zipCode: "10101",
    category: "Hawaii",
    rating: 4.5,
    reviewCount: 90
  }

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
    <div className={styles.business}>
      <img
        className={styles.image}
        src={business.imageSrc}
        alt=""
      />
      <h2>{business.name}</h2>
      <div className={styles.flexDescription}>
        <div>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{`${business.state} ${business.zipCode}`}</p>
        </div>
        <div className={styles.rightDescription}>
          <p className={styles.gold}>{business.category.toUpperCase()}</p>
          <p className={styles.gold}>{`${business.rating} stars`}</p>
          <p>{`${business.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
