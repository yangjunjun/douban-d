var doubanD = require('../');

doubanD({
  url:'http://www.douban.com/photos/album/122942743/',
  size:'large', // thumb, photo, large, raw,
  random: true,
  location:'img'
});