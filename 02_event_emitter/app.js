const EventEmitter = require('events');
const emitter = new EventEmitter();


emitter.on('messageLogged', (data) => {
    console.log('Listener called', data);
});

const log1 = require('./logger_01');
log1('message');
