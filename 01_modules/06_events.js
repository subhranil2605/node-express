const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', (data) => {
    console.log('Listener called', data);
})

// Raise an event
// emit('eventName', eventArgument);
emitter.emit('messageLogged', {'id': 1, url: 'https://localhost.com'});
