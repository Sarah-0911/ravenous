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
  return `https://cors-anywhere.herokuapp.com/${yelpApiUrl}term=${term}&location=${location}&sort_by=${sortBy}`;
};

const searchYelp = async (term, location, sortBy) => {
  const searchURL = createSearchURL(term, location, sortBy);

  try {
    const response = await fetch(searchURL, options);
    const data = await response.json();
    const businessesResult = data.businesses.map(business => {
      return {
        imageSrc: business.image_url,
        name: business.name,
        address: `${business.location.address1}
          ${business.location.address2} ${business.location.address3}`,
        city: business.city,
        state: business.state,
        zipCode: business.zip_code,
        category: business.categories.map(category => category.title).join(', '),
        rating: business.rating,
        reviewCount: business.review_count
      };
    });
    return businessesResult;
  } catch (err) {
      return console.error(err);
  }
}

// https://cors-anywhere.herokuapp.com/corsdemo

export default searchYelp;
