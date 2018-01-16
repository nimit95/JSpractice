
const express = require('express');

const app = express();

app.use('/', express.static(__dirname + '/public_static'));



app.listen(5243, function () {
  console.log('Server Started on http://localhost:' + 5243);
});