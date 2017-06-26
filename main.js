var express = require('express');
var port = process.env.PORT || 8080;

var app = express();
app.use(express.static('public'));

app.listen(port);
