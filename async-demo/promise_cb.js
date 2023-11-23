console.log('Before');

getUser(1)
    .then(user => getRepos(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log(commits));

console.log('After');


function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading from the database...');
            resolve({ id: id, gitHubUsername: 'subhranil2605' });
        }, 2000);
    })
}

function getRepos(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Get repositories from GitHub user: ${username}`);
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Get commits from the repo: ${repo}`);
            resolve(['commit']);
        }, 2000);
    });
}

