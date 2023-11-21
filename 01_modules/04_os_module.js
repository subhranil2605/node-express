const os = require('os');


// Get the uptime 
console.log(os.uptime())

console.log(os.userInfo())

// Get the memory details of the device
let totalMem = os.totalmem()
let freeMem = os.freemem()

console.log(`Total memory: ${totalMem} and Free Memory: ${freeMem}`);