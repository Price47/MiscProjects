/**
 * Created by rstoeffel on 7/6/16.
 */
var express = require('express');
var app = express();
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var Q = require('q');

app.use(express.static(__dirname + '/public'));

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;


require("./public/server/app.js")(app);

app.listen(port,ipaddress);