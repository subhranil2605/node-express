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

async function addAuthor(courseId, author) {
    const course = await Course.findById(courseId);
    course.author.push(author);
    course.save();
}

async function deleteAuthor(courseId, authorId) {
    const course = await Course.findById(courseId);
    const author = course.author.id(authorId);
    author.deleteOne();
    course.save();
}

// createCourse('Node Course', [
//     new Author({ name: 'Mosh' }),
//     new Author({ name: 'Subhranil' })
// ]);

// updateCourse('656db8ed308759061161b795');

// addAuthor('656e003e103e8700a717e4d7', new Author({ name: 'Anish Naskar' }));

deleteAuthor('656e003e103e8700a717e4d7', '656e0d117dbefa0c18581382');
