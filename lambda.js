const func = require('./function');

exports.handler = function(event, context, callback) {
    func.fetch(event, function(err, result) {
      if (err) {
        return callback(result);
      }

      const response = {
        statusCode: 200,
        body: result
      }

      callback(null, response);
    })
};
