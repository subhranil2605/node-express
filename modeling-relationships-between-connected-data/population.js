import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/connectedData')
    .then(() => console.log('Connected to DB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err))

const Author = mongoose.model('Author', mongoose.Schema({
    name: String,
    bio: String, 
    website: String
}));

const Course = mongoose.model('Course', mongoose.Schema({
    name: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
}));

async function createAuthor(name, bio, website) {
    const author = Author({
        name,
        bio,
        website
    });

    const result = await author.save();
    console.log(result);
}

async function createCourse(name, author) {
    const course = Course({
        name,
        author
    });

    const result = await course.save();
    console.log(result);
}

async function listCourses() {
    const courses = await Course
        .find()
        .populate('author', 'name -_id')
        .select('name author');
    console.log(courses);
}

// createAuthor('Subhranil', 'My Bio', 'My Website');

// createCourse('Node course', '656d69b115e56a1c0942f9b3');

listCourses();
