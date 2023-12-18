import React, { useState, useEffect } from 'react';
import './Business.css';



function Business() {
  const [businessData, setBusinessData] = useState(null);

  useEffect(() => {
    const apiKey = 'YEsZ7jkTPMpLu_ifAEayMPK0rGMDiXPn0la8jFOIZ648nWksGH1RsK8VRtMddg72PQY6HZiCZwUA_X85DgZj_ErFxSSciWvJeXhZ4OUlivWoMdR-x8SRYIEYKHE2AZXYx';
    const yelpEndpoint = 'https://api.yelp.com/v3/businesses/HBcSYVckDhznB7KR9fmvTg';

    fetch(yelpEndpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        setBusinessData(data);
      })
      .catch(error => console.error('Error fetching Yelp API:', error));
  }, []);

  // if(!businessData) {
  //   return <p>Loading...</p>;
  // }

  console.log(businessData);

  return (
    <div className="business-container">
      <img
        src="images/pokebowl.jpg"
        alt="Pokebowl"
      />
      <h2>
        Pokawa
      </h2>
      <div className="flex-description">
        <div className="address">
          <p>
            12 Independence Avenue
          </p>
          <p>
            London
          </p>
          <p>
            W12
          </p>
        </div>
        <div className="right-description">
          <p className="gold">
            Hawaii
          </p>
          <p className="gold">
            4.5 stars
          </p>
          <p>
            90 reviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default Business;
