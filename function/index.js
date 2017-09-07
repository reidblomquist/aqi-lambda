const axios = require('axios');
const config = require('../config');

exports.fetch = function(event, callback) {
  if (event.queryStringParameters !== null && event.queryStringParameters !== undefined) {
    if (event.queryStringParameters.lat !== undefined &&
      event.queryStringParameters.lat !== null &&
      event.queryStringParameters.lng !== undefined &&
      event.queryStringParameters.lng !== null) {
      const { lat, lng } = event.queryStringParameters;
      const url = `http://api.waqi.info/feed/geo:${lat};${lng}/?token=${config.token}`;

      axios.get(url)
        .then(function (response) {
          return callback(null, JSON.stringify(response.data.data));
        })
        .catch(function (error) {
          callback(true, error);
        });
    } else {
      callback(true, 'Invalid parameters provided!');
    }
  } else {
    callback(true, 'No parameters provided!');
  }
};
