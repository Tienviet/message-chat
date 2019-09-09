var express = require('express');
var app = express();

var hostName = 'localhost';
var port = 8011;

app.get('/hello', (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.listen(port, hostName, () => {
  console.log('success');
});
