const http = require('http');

const port = 3000;

// Create a server
// const server = http.createServer();

// Create a server with different routes handling
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello world');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
})


// Raise an event when a new connection is made
server.on('connection', (socket) => {
    console.log('New connection...');
})


// Server start listening 
server.listen(port);

console.log(`Listening on Port: ${port}`);

