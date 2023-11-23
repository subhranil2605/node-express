const express = require('express');
const router = express.Router();


// A list of courses
const courses = [
    { id: 1, name: 'python' },
    { id: 2, name: 'c++' },
    { id: 3, name: 'react' },
];


router.get('/', (req, res) => {
    res.send(courses);
})

// Route parameter
router.get('/:id', (req, res) => {
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
router.post('/', (req, res) => {

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


router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find(c => c.id === courseId);

    if (!course) {
        return res.status(404).send('Course with given ID was not found!');
    }

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

module.exports = router;
