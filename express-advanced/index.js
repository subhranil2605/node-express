const logger = require('./logger');
const config = require('config');

const helmet = require('helmet');
const morgan = require('morgan');

// import the 'express' module and create a variable
const express = require('express');

// Import the courses router
const courses = require('./routes/courses');
const homepage = require('./routes/home');

// Create an instance of the Express application 
const app = express();


console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get('env')}`);

// Add json middleware to parse incoming requests with JSON payloads.
app.use(express.json());

// Urlencoded middleware
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static('public'));

app.use(logger);

app.use((req, res, next) => {
    console.log('Authenticating...');
    next();
});

app.use(helmet());

app.use('/', homepage);
app.use('/api/courses', courses);

// Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));

// Check if the environment is development then use morgan for logging
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled.')
}


// Using environment variable
const port = process.env.PORT || 3000;

// set PORT = 5000 
// export PORT = 5000



// Start the server and make it listen on the specified port
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});