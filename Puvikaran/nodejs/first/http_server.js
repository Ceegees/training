const http = require('http');
const url = require('url');
const path = require('path');
const crypto = require('crypto');
const fs = require('fs');

const server = http.createServer(function (req, res) {
	res.write('Hello from http server');
	// res.writeHead(200,{'content-type': 'text/html'});
	// res.write(req.url);
	// var parsed = url.parse(req.url,true);
	// console.log('Parsed url:',parsed);
	const cert1 = new crypto.Certificate();
	console.log('Certificate:',cert1);
	var test = path.basename('C:\\Users\\Thurkka\\Desktop\\Task given\\index.html');
	console.log('Path',test);
	res.end();
});

server.listen(8082);