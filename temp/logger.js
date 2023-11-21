const EventEmitter = require('events');


class Logger extends EventEmitter {
    log(message) {
        // data to be sent
        const value = {
            id: 1,
            url: 'http://www.google.com'
        }
        // Print the message
        console.log(message);
        this.emit('messageLogged', value);
    }
}

module.exports = Logger;
