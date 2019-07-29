const http = require('http')

const server = http.createServer(); // this server is an event emitter

server.on('connection', (socket) => {
    console.log('New connection.')
}) // registering a handler

server.listen(3000)

console.log('Listening on port 3000...')