var http = require('http');
var url = require('url');

// localhost:8080?year=2019&month=5

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  console.log('before ', req.url);
  var q = url.parse(req.url, true).query;
  console.log('after ', req.url);
  console.log('q ', q);
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);