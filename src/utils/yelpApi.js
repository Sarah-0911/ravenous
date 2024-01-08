import config from './config';

const yelpApiUrl = 'https://api.yelp.com/v3/businesses/search?';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${config.apiKey}`
  }
};

const createSearchURL = (term, location, sortBy) => {
  return `${yelpApiUrl}term=${term}&location=${location}&sort_by=${sortBy}`;
};

const search = (term, location, sortBy) => {
  const searchURL = createSearchURL(term, location, sortBy);

  return fetch(searchURL, options)
    .then(response => response.json())
    .then(response => {
      const businesses = response.map(business => {
        return {
          imageSrc: business.imageSrc,
          name: business.name,
          address: business.address,
          city: business.city,
          state: business.state,
          zipCode: business.zipCode,
          category: business.category,
          rating: business.rating,
          reviewCount: business.reviewCount
        };
      });
      return businesses;
      }
    )
    .catch(err => console.error(err));
}

export default search;
