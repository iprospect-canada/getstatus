var http      = require('http');

var results = [];

function final(app) { 
    app.emit('complete', results);
  }

function getStatus(item, items, app) {
  if(item) {
    check( item, function(result) {
      results.push(result);
      return getStatus(items.shift(), items, app);
    });
  } else {
    return final(app);
  }
}

function check(item, callback) {
  var res = new Object();
  http.get(item, function (response) {
        if(response != undefined) {
          console.log(response.statusCode + ' : ' + item);
          //res[item] = response.statusCode;
          res.url = item;
          res.status = response.statusCode;
        }
        response.resume();
    }).on('error', function(e) {
          res[item] = 'NoneStatus';
    });
    setTimeout(function() { callback(res); }, 1000);
}

exports.getStatus = getStatus;