const EventEmitter = require('events')
const emitter = new EventEmitter()

// Register the listener
emitter.on('myEvent', event => {
    console.log(event)
})

emitter.emit('myEvent', {
    data: 'myMessage has triggered',
    url: '/upsell',
    action: 'subscribe'
})