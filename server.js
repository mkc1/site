const http = require('http');
const port = 3000;

http.createServer(function(req, res) {  
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<!doctype html>\n<html lang="en">\n' + 
    '\n<meta charset="utf-8">\n<h2>Meredith Coulis</h2>\n' + 
    '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' + 
    '\n\n<h3>software engineer in NYC</h3>\n')
  res.end();
}).listen(3000);