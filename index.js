var http = require('http');
var fs = require('fs');

var server = http.createServer();

var fileData = fs.readFile('./index.html', 'utf-8', function(err, data) {
    return data;
});

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        response.write(fileData);
            response.end();
    } else {
            response.statusCode = 404;
            response.write('https://cdn.shopify.com/s/files/1/0322/6897/files/404-permalink_1170x1170.png?432866230176278629');
            response.end();
    }
});

server.listen(8080);