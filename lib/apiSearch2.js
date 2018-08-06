const request = require('request');

CIVIC_API_KEY = process.env.CIVIC_API_KEY || KEYS.CIVIC_API_KEY;

const searchByAddress = (address, cb) => {
  console.log('address below:');
  console.log(address);

  const options = {
    url: `https://www.googleapis.com/civicinfo/v2/voterinfo/?key=${CIVIC_API_KEY}&address=${address}`,
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
