const request = require('request');
const args = process.argv.slice(2);
let breedName = args[0];
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
  }
  const data = JSON.parse(body);
  const breed = data[0];
  if (breed === undefined) {
    return console.log("Breed not found");
  }
  console.log(breed.description);
});