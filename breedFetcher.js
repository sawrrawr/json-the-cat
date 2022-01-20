const request = require('request');

const options = { method: 'GET',
  url: 'https://api.thecatapi.co/v1/breeds/search?q=' + process.argv[2],
  headers: { 'x-api-key': 'DEMO-API-KEY' } };



request(options, function(error, response, body) {
  const errorMsg = `Error: request could not be completed.`;
  if (error) throw new Error(errorMsg);

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log(`Breed not in database`);
  }
  if (data.length > 0) {
    console.log(data[0]['description']);
  }

});
