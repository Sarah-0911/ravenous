import React from 'react';
import './Business.css';

function Business() {
  return (
    <div className='business-container'>
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
