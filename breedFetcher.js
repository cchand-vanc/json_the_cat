const request = require('request');

let fetchBreedDescription = (breedName, callback) => {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      return ('error:', error);
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
    } else {
      callback("Breed not found");
    }
  });
};

module.exports = { fetchBreedDescription };