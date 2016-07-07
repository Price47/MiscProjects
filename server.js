/**
 * Created by rstoeffel on 7/6/16.
 */
var express = require('express');
var fs = require('fs');
var app = express();
var request = require('request');
var cheerio = ('cheerio');

app.use(express.static(__dirname + '/public'));

require("./public/server/app.js")(app);

app.listen(3000,'127.0.0.1');