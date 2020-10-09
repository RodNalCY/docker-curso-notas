const http = require('http');
const os = require('os');

console.log('App server is starting ...');

var handler = function(request, response){
        console.log("Response from : "+request.connection.remoteAddress);
	response.writeHead(200);
	response.end("Hi from v2: " +os.hostname()+"\n");
}

var www = http.createServer(handler);
www.listen(8080);
