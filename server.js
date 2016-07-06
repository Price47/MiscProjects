/**
 * Created by rstoeffel on 7/6/16.
 */
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000,'127.0.0.1');