console.log('Before');

getUser(1, (user) => {
    console.log(user);

    getRepos(user.gitHubUsername, (repos) => {
        console.log(repos);
    });
})

console.log('After');


function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading from the database...');
        callback({id: id, gitHubUsername: 'subhranil2605'});
    }, 2000);
}

function getRepos(username, callback) {
    setTimeout(() => {
        console.log(`Get repositories from GitHub user: ${username}`);
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}