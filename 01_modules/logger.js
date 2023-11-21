let url = 'https://google.com';

const log = (message) => {
    // Send an HTTP request
    console.log(message);
}

// exporting the function as an object of the module
// if we have multiple functions to export 
// module.exports.log = log;

// Export the function as a function
module.exports = log