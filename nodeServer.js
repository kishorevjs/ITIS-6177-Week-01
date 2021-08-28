var http = require('http');

var server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text');
    res.end('Hello World');
});

server.listen(4000);

console.log('Node.js web server at port 4000 has started running..') 