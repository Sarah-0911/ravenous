const apiKey = "UVM44qXF06-rB18ZWE_1b5QkNB1PMaMWz6yfAlh1D8ZVKJd6cGAXmm5VFcClnlxneYk57Xyf2ZZQZcWGjVyUZAZxc9jJ-AUxm-10sZKN0PETW-I5UfcIcXcdacGZZXYx";
const yelpApiUrl = 'https://api.yelp.com/v3/businesses/search?';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`
  }
};

const search = (term, location, sortBy) => {
  const searchURL = `${yelpApiUrl}term=${term}&location=${location}&sort_by=${sortBy}`;

  fetch(searchURL, options)
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
      console.log(businesses);
      }
    )
    .catch(err => console.error(err));
}

export default search;
