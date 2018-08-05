const request = require('request');


var CIVIC_API_KEY;
if (!process.env.CIVIC_API_KEY) {
  var KEYS = require('../config/civic.js');
}
CIVIC_API_KEY = process.env.CIVIC_API_KEY || KEYS.CIVIC_API_KEY;


// const CIVIC_API_KEY = process.env.CIVIC_API_KEY || require('../config/civic.js').CIVIC_API_KEY;

const searchByZip = (locator, cb) => {
  console.log('zip below:');
  console.log(locator);

  const options = {
    url: `https://www.googleapis.com/civicinfo/v2/representatives/?key=${CIVIC_API_KEY}&address=${locator}`,
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
  searchByZip,
};
