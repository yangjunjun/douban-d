var fs = require('fs');
var path = require('path');

var request = require('request');
var cheerio = require('cheerio');
var mkdirp = require('mkdirp');

//var url = 'http://www.douban.com/photos/album/122942743/';
var headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.62 Safari/537.36'
}

var doubanD = function(option) {

  var requestOption = {
    url: option.url,
    headers: headers
  }
  var fileFolder = option.location || '';
  fileFolder = option.random ? fileFolder + Math.floor(Math.random()*100):
               fileFolder;

  request(requestOption, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      $ = cheerio.load(body);
      mkdirp(fileFolder, function (err){
        if(err) console.error(err);

        $('.photo_wrap img').each(function() {
          var imgUrl = $(this).attr('src'); 
          // src == > http://img4.douban.com/view/photo/thumb/public/p2256024648.jpg
          imgUrl = imgUrl.replace('thumb', option.size || 'photo');
          var filename = path.basename(imgUrl);
          var fileLocation = path.join(fileFolder, filename);
          request(imgUrl).pipe(fs.createWriteStream(fileLocation));
        });
        console.log('download success at: ' + fileFolder + '/');
      })      

    }
  });
}


module.exports = doubanD;