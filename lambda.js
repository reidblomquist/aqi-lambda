const func = require('./function');

exports.handler = function(event, context, callback) {
    func.fetch(event, function(err, result) {
      if (err) {
        return callback(null, {error: result});
      }
      callback(null, {result: result});
    })
};
