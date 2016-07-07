/**
 * Created by rstoeffel on 7/6/16.
 */
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

module.exports = function(app){
   
    app.get("/scrape/:day/:month/:year",addUser);

    function addUser(req,res){
        var day = req.params["day"];
        var month = req.params["month"];
        var year = req.params["year"];

        url = 'https://app.fooda.com/my?date=' + year + '-07-07';

        request(url, function(error, response, html){
                console.log(response.statusCode);

                var $ = cheerio.load(html);

                var title;
                var json = { title : "", url:"",error:""};

                $('div.myFooda-event__meta-left').filter(function(){
                    var data = $(this);
                    title = data.children().first().text;
                    console.log(title);
                    json.title = title;

                });


                json.url = url;
                json.error = error;


// To write to the system we will use the built in 'fs' library.
// In this example we will pass 3 parameters to the writeFile function
// Parameter 1 :  output.json - this is what the created filename will be called
// Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
// Parameter 3 :  callback function - a callback function to let us know the status of our function

            fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

                console.log('File successfully written! - Check your project directory for the output.json file');

            });

// Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
            res.send('Check your console!')

        }) ;
    }


    function addUser(req,res) {
        request('https://news.ycombinator.com', function (error, response, html) {
            if (!error && response.statusCode == 200) {
                var $ = cheerio.load(html);
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
                    console.log(metadata);
                });
            }
        });
    }
    
};
