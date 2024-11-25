const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const filename = "week3.html"
    fs.readFile(filename, (err, data) => {
        res.write(data);
        if (err = null) {
            res.write(data);
            res.end();
        }
        else {
            res.end("File Not Found");
        }
    });
    res.end('<h1>Hello World!</h1>');
    });



server.listen(500);
