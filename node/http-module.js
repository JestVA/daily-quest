const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World')
        res.end()
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([{type: true, valid: 'yes'}, {type: false, valid: 'no'}, {type: null, valid: 'yes'}]))
        res.end()
    }
}); 

/*
server.on('connection', (socket) => {
    console.log('New connection.')
}) // registering a handler
*/

server.listen(3000)

console.log('Listening on port 3000...')