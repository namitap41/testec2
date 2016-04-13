var http = require("http");

console.log("Hiiiiiiiii!! Namita Hereeeeeeeeeeee");

http.createServer(function (request, response) {
 
   response.writeHead(200, {'Content-Type': 'text/plain'});
    
   response.end('amittttttttttttttt');
   
}).listen(3000);
