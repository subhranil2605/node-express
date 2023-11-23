console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');

// Callbacks
// Promises
// Async/await

function getUser(id) {
    setTimeout(() => {
        console.log('Reading a user from the database');
        return {id: id, username: "subhranil2605"};
    }, 2000);
}
