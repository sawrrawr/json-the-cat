const request = require('request');

const options = { method: 'GET',
  url: 'https://api.thecatapi.com/v1/breeds/search?q=',
  headers: { 'x-api-key': 'DEMO-API-KEY' } };


const fetchBreedDescription = function(breedName, callback) {
  options['url'] += breedName;
  request(options, (error, response, body) => {
    if (error) {
      console.log(`ERROR: request could not be completed.`);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(null, `Breed not in database`);
    }
    if (data.length > 0) {
      callback(null, data[0]['description']);
    }
  });
};

module.exports = fetchBreedDescription;