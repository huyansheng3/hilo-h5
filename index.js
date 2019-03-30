var express = require('express');
var compression = require('compression');
var connectHistoryApiFallback = require('connect-history-api-fallback');

var port = process.env.PORT || process.env.LEANCLOUD_APP_PORT;

var app = express();

app.use(compression());
app.use(connectHistoryApiFallback());

app.use('/', express.static('./dist'));

// Listen
app.listen(port, err => {
  if (err) {
    console.error(err);
  } else {
    console.log('running in the ' + port);
  }
});
