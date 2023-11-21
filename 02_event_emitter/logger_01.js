const EventEmitter = require('events');
const emitter = new EventEmitter();

const log = (message) => {
    console.log(message);

    // Raise an event
    emitter.emit('messageLogged', { id: 1, url: 'https://' });
}

module.exports = log;
