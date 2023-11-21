const Logger = require("./logger");

const logger = new Logger();

logger.on('messageLogged', (data) => {
    console.log('Listener called', data);
})

logger.log('Helllo');
