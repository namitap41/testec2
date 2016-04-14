var http = require("http");

console.log("Hiiiiiiiii!! Namitaaaddddddaraa Hereeeeeeeeeeee111111");

http.createServer(function (request, response) {
 
   response.writeHead(200, {'Content-Type': 'text/plain'});
    
   response.end('amitttjttttastttjktttttt');
   
}).listen(3000);
