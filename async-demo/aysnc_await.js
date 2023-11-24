console.log('Before');

// Async-await
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepos(user.gitHubUsername);
        const commits = await getCommits(repos[1]);
        console.log(commits);
    } catch (err) {
        console.log(err.message);
    }
}

displayCommits();

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

