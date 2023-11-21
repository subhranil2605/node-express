// import the 'express' module and create a variable
const express = require('express');

// Create an instance of the Express application 
const app = express();

// Add json middleware to parse incoming requests with JSON payloads.
app.use(express.json());

// Different HTTP methods with express
// app.get();
// app.post();
// app.put();
// app.delete();


// A list of courses
const courses = [
    {id: 1, name: 'python'},
    {id: 2, name: 'c++'},
    {id: 3, name: 'react'},
];


// Using environment variable
const port = process.env.PORT || 3000;

// set PORT = 5000 
// export PORT = 5000

// Route for '/'
app.get('/', (req, res) => {
    res.send('<h1>Hello Subhranil!!!</h1>');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
})

// Route parameter
app.get('/api/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);

    // Find the course with the same ID
    let course = courses.find(c => c.id === courseId);

    if (!course) { // Didn't find the course
        // Raise an status with a message
        res.status(404).send('<p>The course with the given ID was not found!!!</p>');
    } else {
        res.send(course);
    }
})

// Handling a POST request
app.post('/api/courses', (req, res) => {

    if (!req.body.name || req.body.name.length < 3) {
        // Bad request 400
        res.status(400).send('Name is required and should be minimum 3 characters!');
        return;
    }

    // Create a new course with name from the client
    const course = {
        id: courses.length + 1,
        name: req.body.name,
    };

    // Add the new course to the courses
    courses.push(course);

    // Sending back the course to the client
    res.send(course);
    console.log(courses);
});


app.put('/api/courses/:id', (req, res) => {
    // Look up the course
    // If not existing, return 404
    const courseId = parseInt(req.params.id);
    const course = courses.find(c => c.id === courseId);

    if (!course) {
        return res.status(404).send('Course with given ID was not found!');
    }

    // Validate the course 
    // If invalid, return 400
    if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send('Name should be given and the size should be minimum 3');
        return;
    }

    // Update the course
    // Return the update one;
    course.name = req.body.name;
    res.send(course);
});


// Delete
app.delete('/api/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find(c => c.id === courseId);

    if (!course) {
        return res.status(404).send('Course with given ID was not found!');
    }

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

// Start the server and make it listen on the specified port
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});