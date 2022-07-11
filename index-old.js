const http = require("http");

//set hostname
const hostname = "localhost"
const PORT = 4333
const server = http.createServer(function(request, response){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World My People');
})

server.listen(PORT, hostname, () => console.log(`Server is listening on http://${hostname}:${PORT}`) )









