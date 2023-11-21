
const Logger = require('./logger_02');
const logger = new Logger();

logger.on('messageLogged', (data) => {
    console.log('Listener called', data);
});

logger.log('message subhranil');