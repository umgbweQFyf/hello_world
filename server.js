const http = require('http');

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('hello world');
});

server.listen(process.env.PORT || 80, function() {
    console.log('server listening at', server.address());
});

server.on('error', function(e) {
    if (e.code === 'EADDRINUSE') {
        console.log('address in use, aborting');
    }
    process.exit(1);
});
