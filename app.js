var http = require("http");

console.log("Hiiiiiiiii!! Namita Hereeeeeeeeeeee111111");

http.createServer(function (request, response) {
 
   response.writeHead(200, {'Content-Type': 'text/plain'});
    
   response.end('amittttttttttttttt');
   
}).listen(3000);
