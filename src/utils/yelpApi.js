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
    console.log(data);
    const businessesResult = data.businesses.map(business => {
      return {
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
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

export default searchYelp;
