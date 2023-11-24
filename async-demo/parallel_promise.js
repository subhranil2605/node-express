// First promise
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
    }, 2000);
});


// Second promise
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(100);
    }, 2000);
});

Promise.all([p1, p2]).then(result => console.log(result));
