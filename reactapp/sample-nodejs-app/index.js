var http = require('http');

const serverStartTime = new Date();

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    if (req.url === '/shutdown') {
        res.end('Killing the process!');
        process.exit(1);
    } else {
        res.end('Hello Harsha! Server started: ' + serverStartTime);
    }
}).listen(80);
