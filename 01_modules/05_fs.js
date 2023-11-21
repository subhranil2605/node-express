// Loading the fs module 
const fs = require('fs');

// Get the all the file names in the current directory
// const files = fs.readdirSync('./');

// console.log(files);


// Asynchronus way
fs.readdir('./', (err, files) => {
    err ? console.log(`Error => ${err}`) : console.log(`Files: ${files}`);
})