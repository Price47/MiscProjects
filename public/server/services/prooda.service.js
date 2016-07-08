/**
 * Created by rstoeffel on 7/6/16.
 */
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var sp = require('scrape-js');
var jsdom = require("node-jsdom");

module.exports = function(app){
   
    app.get("/scrape/:day/:month/:year",addUser);
    app.get("/scrape-hacker", HackerNews);

    function addUser(req,res) {
        var day = req.params["day"];
        var month = req.params["month"];
        var year = req.params["year"];

        url = 'https://app.fooda.com/my?date=' + year + '-07-07';

        jsdom.env({
            url: "https://www.fooda.com/",
            scripts: ["http://code.jquery.com/jquery.js"],
            done: function (errors, window) {
                var $ = window.$;
                console.log("HN Links");
                $('div.gray-section:first-child:first-child:first-child:text').each(function () {
                    console.log(" -", $(this).text());
                });
            }
        });
    }


    function HackerNews(req, res) {

        request('https://news.ycombinator.com', function (error, response, html) {
            if (!error && response.statusCode == 200) {
                var $ = cheerio.load(html);
                var hackerStories = [];
                $('span.comhead').each(function (i, element) {
                    var a = $(this).prev();
                    var rank = a.parent().parent().text();
                    var title = a.text();
                    var url = a.attr('href');
                    var subtext = a.parent().parent().next().children('.subtext').children();
                    var points = $(subtext).eq(0).text();
                    var username = $(subtext).eq(1).text();
                    var comments = $(subtext).eq(2).text();
                    // Our parsed meta data object
                    var metadata = {
                        rank: parseInt(rank),
                        title: title,
                        url: url,
                        points: parseInt(points),
                        username: username,
                        comments: parseInt(comments)
                    };
                    hackerStories.push(metadata);

                })
            }
            res.send(hackerStories);

        });
    }
    

    
};
