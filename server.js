var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  fs.readFile('index.html', function(err, data){
    console.log('serving maggie\'s k8s app');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
  });
}).listen(8000);
