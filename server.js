var http = require('http')
var server = http.createServer();
var handleRequest = function(req, res){
  if(req.method === 'GET'){
    res.writeHead(200, {
      'Connection': 'close',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify(messages));
  } else if (req.method == 'POST') {
    console.log('I tried');
    var postData = '';
        req.on('data', function(chunk) {
          console.log(chunk);
           postData += chunk.toString();
        });
        req.on('end', function() {
            console.log("Got POST data:");
            message = JSON.parse(postData);
            message.timestamp = Date.now();
            messages.push(message);
            console.log(messages);

       });
       res.writeHead(200, {
         'Connection': 'close',
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
       });
       res.end();
     } else if (req.method === 'OPTIONS') {
       res.writeHead(200, {
         'Connection': 'close',
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
       });
       res.end();
     }
}
var messages = [];
server.on('request', handleRequest).listen(8002)
