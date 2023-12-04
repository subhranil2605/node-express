import mongoose from "mongoose";


mongoose.connect('mongodb://localhost/connectedDB')
    .then(() => console.log('Connected to the database...'))
    .catch(err => console.error('Could not connect to the database...', err));

const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
    author: [authorSchema]
}));

async function createCourse(name, authors) {
    const course = new Course({
        name: name,
        author: authors
    });

    const result = await course.save();
    console.log(result);
}


async function updateCourse(id) {
    const course = await Course.findById(id);
    course.author.name = 'Subhranil Sakar';
    course.save();
}

async function listCourses() {
    const courses = await Course.find();
    console.log(courses);
}

createCourse('Node Course', [
    new Author({ name: 'Mosh' }),
    new Author({ name: 'Subhranil' })
]);

// updateCourse('656db8ed308759061161b795');
