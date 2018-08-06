const axios = require('axios');
const bodyParser = require('body-parser');
const log = require('ololog');

CIVIC_API_KEY = process.env.CIVIC_API_KEY;

module.exports.searchByAddress = (address, cb) => {
  log('api key is ', CIVIC_API_KEY)
  const params = { key: CIVIC_API_KEY, address }
  const searchURL = 'https://www.googleapis.com/civicinfo/v2/voterinfo'
  log('google api call parameters below:');
  log(params);
  axios.get(searchURL, { params })
  .then(response => {
    log('Google returned -->', response.data);
    cb(null, response.data);
  })
  .catch(err => {
    cb(null, 'No data found');
  })
};
