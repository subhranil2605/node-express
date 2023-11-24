const mongoose = require('mongoose');

// Connecting to the mongodb server
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Could not connect to the MongoDB...', err.message))
