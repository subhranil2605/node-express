// import the 'express' module and create a variable
const express = require('express');

// Create an instance of the Express application 
const app = express();

// Different HTTP methods with express
// app.get();
// app.post();
// app.put();
// app.delete();


// Using environment variable
const port = process.env.PORT || 3000;

// set PORT = 5000 
// export PORT = 5000

// Route for '/'
app.get('/', (req, res) => {
    res.send('<h1>Hello Subhranil!!!</h1>');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
})

// Route parameter
app.get('/api/courses/:courseId', (req, res) => {
    const courseId = req.params.courseId;   // Get the ID
    res.send(courseId); // Send the data
})

// Start the server and make it listen on the specified port
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});