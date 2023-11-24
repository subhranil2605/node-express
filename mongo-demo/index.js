const mongoose = require('mongoose');

// Connecting to the mongodb server
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Could not connect to the MongoDB...', err.message))

// Create a schema for the courses
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

// Create the model of the schema
const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    // Create an object of the model
    const course = new Course({
        name: 'Angular.js course',
        author: 'Subhranil',
        tags: ['angular', 'frontend'],
        isPublished: true
    });
    
    // Save a document
    const result = await course.save();
    console.log(result);
}

createCourse();
