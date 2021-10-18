const http = require('http');
let port = process.argv.splice(2)[0];

server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log("Server recieved request at port: " + port);
    res.end();
});

server.on('data', function(data) {
    server.read(data.toString());
});

server.listen(port, function() {
    console.log("Server running at http://localhost:" + port);
});