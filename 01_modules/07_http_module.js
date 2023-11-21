const http = require('http');

const port = 3000;

// Create a server
const server = http.createServer();


// Raise an event when a new connection is made
server.on('connection', (socket) => {
    console.log('New connection...');
})


// Server start listening 
server.listen(port);

console.log(`Listening on Port: ${port}`);

