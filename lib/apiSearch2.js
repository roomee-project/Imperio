const request = require('request');
const config = require('../config/civic.js');

const searchByAddress = (address, cb) => {
  console.log('address below:');
  console.log(address);

  const options = {
    url: `https://www.googleapis.com/civicinfo/v2/voterinfo/?key=${config.CIVIC_API_KEY}&address=${address}`,
    headers: {
      'User-Agent': 'request',
    },
  };
  console.log(options.url);
  request(options, (err, res, body) => {
    if (err) {
      console.log(err);
      cb(JSON.parse(body));
    } else {
      cb(JSON.parse(body));
    }
  });
};

module.exports = {
  searchByAddress,
};
