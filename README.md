# douban-d

download images from douban.com

## getting started

```js
var doubanD = require('douban-d');

doubanD({
  url:'http://www.douban.com/photos/album/122942743/'
});

```

## Options

```js
doubanD({
  url:'http://www.douban.com/photos/album/122942743/',
  size:'large', // thumb, photo, large, raw,
  random: true,
  location:'img'
});
```