const http = require('http');
const fs = require('fs');
const path = require('path');

function onRequest(request, response) {
    let filePath;
    let contentType = 'text/html';

    if (request.url === '/') {
        filePath = path.join(__dirname, 'Pages', 'index.html');
    } else if (request.url === '/style.css') {
        filePath = path.join(__dirname, 'Style', 'style.css');
        contentType = 'text/css';
    } else if (request.url === '/index.js') {
        filePath = path.join(__dirname, 'script', 'index.js');
        contentType = 'application/javascript';
    } else {
        filePath = path.join(__dirname, 'Pages', 'page404.html');
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.writeHead(404);
            return response.end('Not Fount');
        }
        
        response.writeHead(200, {'Content-Type': contentType,'Cache-Control': 'no-cache'});
        response.end(data);
    });
}

const server = http.createServer(onRequest);
server.listen(3000, '127.0.0.1', function() {
    console.log('Сервер запущен и слушает порт 3000');
    console.log('http://localhost:3000');
});